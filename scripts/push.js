const fs = require("fs")
const _ = require("lodash")
const path = require("path")
const showdown = require("showdown")
const fm = require("front-matter")
const DDEVFreshdesk = require("./freshdesk")

const converter = new showdown.Converter()
const freshdesk = new DDEVFreshdesk("https://drudtech.freshdesk.com", process.env.FRESHDESKAPITOKEN)

// validate path to search for support docs
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + "  ./docs")
    process.exit(-1)
}

// recursive function to collect all document files
const findSupportDocs = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        filelist = fs.statSync(path.join(dir, file)).isDirectory()
            ? findSupportDocs(path.join(dir, file), filelist)
            : filelist.concat({
                path: path.join(dir, file),
                meta: fm( fs.readFileSync(path.join(dir, file), "utf8") ).attributes,
                body: converter.makeHtml(fm( fs.readFileSync(path.join(dir, file), "utf8") ).body)
            })
    })
    return filelist
}

// filter all the static content into groups - Categories, Folders, Articles to follow FreshDesk Schema
let all_freshdesk_content = _.filter(findSupportDocs(process.argv[2]), "meta.freshdesk")
let [ doc_categories, doc_category_articles ] = _.partition(all_freshdesk_content, [ "meta.freshdesk.taxonomy", "category" ])
let [ doc_folders, filtered_articles ] = _.partition(doc_category_articles, [ "meta.freshdesk.taxonomy", "folder" ])

// Categories
_.forEach(doc_categories, (category) => {
    const {name, id, description, visible_in_portals} = category.meta.freshdesk
    // if category exists
    if (_.isNumber(id)) {
        // update category
        freshdesk.updateSolutionsCategory(id, {
            name,
            description,
            visible_in_portals
        }, function (err, data) {
            console.log(err || data)
        })
    } else {
        // create category
        freshdesk.createSolutionsCategory({
            name,
            description,
            visible_in_portals
        }, function (err, data) {
            console.log(err || data)
        })
    }

})

// Folders
_.forEach(doc_folders, (folder) => {
    const {name, id, category_id, description, visibility, company_ids} = folder.meta.freshdesk
    // if folder exists
    if (_.isNumber(id)) {
        // update folder
        freshdesk.updateSolutionsFolder(id, {
            name,
            description,
            visibility,
            company_ids
        }, function (err, data) {
            console.log(err || data)
        })
    } else {
        // create folder
        freshdesk.createSolutionsFolder(category_id, {
            name,
            description,
            visibility,
            company_ids
        }, function (err, data) {
            console.log(err || data)
        })
    }
})

// Articles
_.forEach(filtered_articles, (article) => {
    const {
        title,
        id,
        description,
        type,
        folder_id,
        agent_id,
        status,
        tags
    } = article.meta.freshdesk
    // if article exists
    if (_.isNumber(id)) {
        // update article
        freshdesk.updateArticle(id, {
            title,
            description,
            type,
            agent_id,
            status,
            tags
        }, function (err, data) {
            console.log(err || data)
        })
    } else {
        // create article
        freshdesk.createArticle(folder_id, {
            title,
            description,
            type,
            agent_id,
            status,
            tags
        }, function (err, data) {
            console.log(err || data)
        })
    }
})
