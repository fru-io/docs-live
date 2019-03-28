---
title: Getting Started
description:
freshdesk:
  title: Getting Started # title	string	Title of the solution article
  id: 36000100053 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178531 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 2 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

##  Getting started with DDEV-Live.

# Access and Setup

After signing up for a plan, Drud will invite you to join our [support ticket system](http://support.drud.com) and send you an [invite to our API](https://support.drud.com/support/solutions/articles/36000106931-working-with-the-api).

---

## Setting Up Your S3 Bucket

First, install [s3cmd](https://s3tools.org/s3cmd):

* Linux:
  `sudo apt-get install s3cmd`

* Mac:
  `brew install s3cmd`

* Windows:
  Download and install [http://sourceforge.net/projects/s3tools/files/s3cmd/](http://sourceforge.net/projects/s3tools/files/s3cmd/)

Then, upload your files:

`s3cmd --access_key=<access_key> --secret_key=<secret> --region=us-east-1 --no-check-certificate put <project name>.files.tar.gz s3://<Customer Bucket Name>/<Project Name>/production/<project name>.files.tar.gz`

And database (please use a gzip format):

`s3cmd --access_key=<access_key> --secret_key=<secret> --region=us-east-1 --no-check-certificate put <project name>.sql.gz s3://<Customer Bucket Name>/<Project Name>/production/<project name>.sql.gz`

_where <**access_key**> is your S3 access key, <**secret**> is your S3 secret, <**Customer Bucket Name**> is your S3 bucket name, and <**project name**> is your project name._


---
## Provisioning Your Site
---

- Once uploaded to S3, please [submit a ticket](https://support.drud.com/support/tickets/new) and ask us to provision your site on DDEV-Live. _Please indicate the location of the file(s) in S3 to be used in the restore._

- We'll let you know when it's ready. Then visit your site’s preview URL to [begin working with your site](https://support.drud.com/support/solutions/articles/36000106365-working-with-ddev-live-sites).
