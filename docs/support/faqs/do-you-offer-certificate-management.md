---
title: Do you offer certificate management?
description:
freshdesk:
  title: Do you offer certificate management? # title	string	Title of the solution article
  id: 36000108915 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178516 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 2 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

Yes, certificate management is included via LetsEncrypt for all hostnames associated with your environment(s).

Sites can either have TLS turned on or off. If off, we will only ever serve the site on http (https URLs will not work). If TLS is turned on, we only serve redirects on HTTP to HTTPS.

For more about HTTPS on DDEV-LIVE, please see this [Support policy page](https://support.drud.com/support/solutions/articles/36000069971-https-on-ddev-live).
