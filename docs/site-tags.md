# Site Tags
A "tag" is a type of metadata that can be set on [site](https://docs.ddev.com/sites/) resources. They can be used to group or filter multiple sites with in a `ddev-live list sites` command using the `--tag` flag. They are also useful and visible when describing a site using the `ddev-live describe site` command, visible under the `Tags:` heading.

A `<tag>` can be **defined** two different ways, either as a `<key>:<value>` pair, or simply a `<key>`.

## Tag Format
1. use ',' to separate a list of multiple tags in a command. For example:
<pre><code>    ddev-live create site drupal mysite ... --tag <b>key1,key2,key3</b>
    ddev-live config tag mysite ... <b>key1:val1,key2:val2,key3:val3</b>
    ddev-live list mysite ... --tag <b>key1,key2,key3:val</b></code></pre>
2. each tag `<key>` on a site MUST be <b>unique</b>
3. tags must follow either a `<key>`, or `<key>:<value>` structure
???+ note
    the tags "`<key>`" AND "`<key>:true`" are equivalent

There are a few input restrictions for a tag `<key>` and/or `<value>`:

- a 1-40 character length range
- must start AND end with an alphanumeric character
- must ONLY consist of alphanumeric characters, '-', '_' or '.'
----
## Working with Tags on DDEV-Live CLI

???+ note "Prerequisites"
    The minimum required CLI version needed to utilize `tags` is `v0.7.0`.
    For help installing or updating the DDEV-Live CLI, see [Getting Started]( https://docs.ddev.com/getting-started/#install-the-ddev-live-cli)
### Creating sites with tags
When creating a new site, you can apply tag(s) to the site by including the `--tag` flag, followed by a comma-separated list of tags. For example:
```
ddev-live create site (drupal || typo3 || wordpress ) ... --tag dev
ddev-live create site (drupal || typo3 || wordpress ) ... --tag dev,customer:xyz,repo:ddev
```

### Updating or adding tags to existing sites
You can add new tag(s) or update existing tag(s) on an existing site using `ddev-live config tag set ...`. For example:

```
ddev-live config tag set my-site staging
ddev-live config tag set my-site staging,customer:xyz,repo:ddev
```

### Removing a tag
You can remove tag(s) on an existing site using `ddev-live config tag unset ...` and providing a set of tag keys to remove. For example:

```
ddev-live config tag unset my-site env
ddev-live config tag unset my-site env,customer,repo
```

<b>NOTE:</b> when removing tags, only `<key>` needs to be specified.
If for example a site `my-site` has the tag `env:staging`, the following command will remove it:
`ddev-live config tag unset my-site env`

### Filtering site lists using tags
You can use one or more tags as filters when listing sites by using `ddev-live list sites ... --tag`.
```
ddev-live list sites --tag dev
ddev-live list sites --tag dev,repo:ddev
```

### Viewing site tags
You can view the tags of a site in its describe output. For example:

```
ddev-live describe site my-site

SITE INFO
 Name:          my-site
 Org:           ddev-demo
 Tags:
  - staging
  - customer:ddev
...
```
