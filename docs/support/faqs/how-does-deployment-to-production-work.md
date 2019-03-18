---
title: How does deployment to production work?
description:
freshdesk:
  title: How does deployment to production work? # title	string	Title of the solution article
  id: 36000070128 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178516 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 1 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

_There aren't manual steps involved with adeploy/merge to production_. _As long as all of your dependencies are in the git push, they will get deployed. Settings files will be generated and automatically connected to the DB.

Because the DDEV LIve build process is not complex, you should expect that whatever you push to DDEV Live will get deployed. If there’s a failure in the managed part of the platform, we’ll absolutely take care of it.
