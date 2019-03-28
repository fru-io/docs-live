---
title: Making Incremental Code Changes to Your Site
description:
freshdesk:
  title: Making Incremental Code Changes to Your Site # title	string	Title of the solution article
  id: 36000106365 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178531 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 0 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

Instructions for pushing incremental changes to your website through code.

# The DDEV-Live Workflow

To make incremental code changes to your site on DDEV-Live, you’ll work with two repositories.

The first is your “source of truth”  repository that you already use to manage your website's code. This can be Github or Bitbucket or Gitlab or wherever you currently host your source control. When you host with DDEV-Live, your canonical source for your project code is maintained by you and doesn’t change.

The second repository is the accompanying GitLab remote that DDEV-Live provides to you in 1password. When you’re ready to push your code to a DDEV-Live environment, you just push to that remote.

_While not required, we strongly recommend you **make your changes locally first. [DDEV-Local](https://ddev.readthedocs.io/en/stable/) makes it easy to stand up a local instance of your site for testing and making changes, and provides [integration with DDEV-Live](https://ddev.readthedocs.io/en/stable/users/providers/drud-s3/)**._

The high-level DDEV-Live workflow is:

1.  Commit and push your changes to the appropriate branch/repo for your site in your “source of truth” repository. *You always push to this location first to ensure it serves as the source of truth for your site.*
2.  Once your repo has been updated, commit and push the changes again to the DDEV-Live GitLab repository for your site. _Be sure to push to the correct branch - in many cases a production and staging branch will be available. It is always advised to push and test first to a staging branch when available)._

_For more background on how repositories work on DDEV-Live, [see this FAQ](https://support.drud.com/support/solutions/articles/36000070126-do-you-provide-version-control-for-managing-my-site-)._

_Depending on your workflow and/or the changes you are making to your site, you may prefer to [push and deploy entire backup assets](https://support.drud.com/support/solutions/articles/36000106500-making-and-pushing-changes-via-backups)._

## To Commit and Push Changes to Your GitLab Repository:

- Add the GitLab repository as a remote, using a name of your choice. In the example below, we add the remote with a name of “ddev”. The user, password and repository location will be different for your site.

`git remote add ddev https://user:password@gitlab.ddev-live.drud.io/your/repo.git`

- Checkout the appropriate branch. In this example, the _ddev remote_ has a staging branch.

`git checkout staging`

- Commit and push your files. When using the push command, it is important to be sure you are specifying the remote location as well as the branch you want to push to. In this example, we are pushing to our _ddev remote_, and pushing changes from our _local staging branch_ to the _remote’s staging branch_.

`git commit -m “Test commit”`

`git push ddev staging:staging`

- With the push to the GitLab staging branch, DDEV-Live will automatically perform the tasks necessary to deploy the changes. Once the job is complete, you should be able to view your changes with the preview URL for the particular site and environment.

## Commit / Push Everything Needed to Run Your Site

There aren’t manual steps involved with a deploy/merge to a DDEV-LIVE environment. Whatever is needed to run your site is pushed to the GIT endpoint via a git push to deploy.  Settings files will be generated and automatically connected to the DB.

Because there’s no pre-processing of source code before it gets deployed to an environment, it is important to commit your 3rd party dependencies to your project repo.

A notable examples are legacy systems that run a composer install, npm install, bower install, or some other related package management command to pull in 3rd party dependencies.

If this will not work for your requirements, please let us know. We can work with you to set up Jenkins (or a similar tool) to run a build step for you, and then push the result to your DDEV-LIVE Git endpoint.

_Note: it is best practice_ [to exclude any large files](https://git-scm.com/docs/gitignore_) *(images, pdfs, etc.) from your Git repository.*
