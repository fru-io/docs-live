---
title: Do you include backups?
description:
freshdesk:
  title: Do you include backups? # title	string	Title of the solution article
  id: 36000109075 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178516 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 2 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

Yes, all of our hosting plans include backups. Daily backups are provided for a week; weekly backups are provided for a month.

Backups run nightly and can be accessed directly from your [s3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html). To browse these files, download an SFTP client like [Cyberduck](https://cyberduck.io/) and enter the AWS credentials from the 1Password AWS note.

Alternatively, you can bring your own S3 bucket and we’ll configure DDEV Live to automatically upload backups to it. In this case, our backup retention policy is disabled and you’ll handle backup retention per your business requirements.
