---
title: What types of environments are included in my plan?
description:
freshdesk:
  title: What types of environments are included in my plan? # title	string	Title of the solution article
  id: 36000070127 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178516 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 2 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

In DDEV-Live, a project is a grouping of environments (e.g. stage and prod), linked together with a GIT repository endpoint.

All environments are functionally the same, with instance sizes (CPU and RAM) shaped towards anticipated traffic and memory requirements. You may request as many as you've allotted for in your hosting agreement, and customize them to fit your workflow.

By default, we will provision a production environment for each of your projects, with a master branch and a site preview URL at `[projectname]-production.site-prod.ddevlive.drud.io` when your environment is created.

Staging environments follow this naming convention: `[projectname]-staging.site-stage.ddevlive.drud.io.`At your request, we can setup a custom domain for staging such as `staging.[projectname].com` via a CNAME, aliased to the environment.
