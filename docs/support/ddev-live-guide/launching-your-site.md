---
title: Launching Your Site
description:
freshdesk:
  title: Launching Your Site # title	string	Title of the solution article
  id: 36000106930 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178531 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 1 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

# The Launch Process

For sites that are already hosted and live on another platform, we provide a site proxy service to forward traffic to another IP.

We will proxy your live site and restore a copy to DDEV-Live, providing you a preview URL to review it on DDEV Live.

Once you've validated that the production site looks good, let us know that you are ready to migrate to DDEV-Live’s full hosting mode, and point your DNS at us:

- Apex domain (yoursite.com), include all 3 A-records:
  - A Record: @ | 35.168.185.204
  - A Record: @ | 35.169.15.168
  - A Record: @ | 52.0.29.214

* www subdomain ([www.]("http://www.drupaleasy.com/")yoursite.com):
  - CNAME Record: www | live.drud.com

- subdomain (subdomain.yoursite.com)
  - CNAME Record: subdomain | live.drud.com

We'll:

1.  re-sync your DB and files (if required)
2.  Turn off the site proxy
3.  Add the hostnames to the environment
4.  Turn on TLS

_Note: While LetsEncrypt gets the certificate to us very quickly, there is a delay before the TLS cert is in place and usable (usually less than 10 minutes)._

---
