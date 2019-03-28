---
title: Do you provide version control for managing my site?
description:
freshdesk:
  title: Do you provide version control for managing my site? # title	string	Title of the solution article
  id: 36000070126 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178516 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 2 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

DDEV Live provides customers a Git endpoint for each project. However, we don’t recommend using this endpoint as the canonical source for your project. Instead, we recommend that you create and maintain a repository internally (Github, Gitlab, etc.) as your central place for development. When you’re ready to push your code to an environment, you push to the GIT remote that we have provided you.

All DDEV-Live environments associated with a specific site share a repo, and deployments occur based on the branch name. In other words, each environment corresponds to a branch that you’ll be able to push to.

We recommend separate branches for each environment production, staging, and dev. Deployments then become a matter of merging your canonical master into the environment branch, and pushing to DDEV-Live.

However, you aren't required to use those branch names: you _could_ push your master branch to the production branch on ddev-live and it will work.

_Note: you don’t need to maintain a linear history for deployments. If you `force push` a branch with a single, giant commit of all of your code, that’s what will be deployed._

For detailed directions on making code changes on DDEV-Live, [see this page](https://support.drud.com/support/solutions/articles/36000106365-making-incremental-code-changes-to-your-site).

For more on remotes, see [https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).
