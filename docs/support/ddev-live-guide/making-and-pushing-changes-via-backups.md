---
title: Making and Pushing Changes Via Backups
description:
freshdesk:
  title: Making and Pushing Changes Via Backups # title	string	Title of the solution article
  id: 36000106500 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178531 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 1 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

Instructions for pushing changes through file and database backups.

# Push and Deploy Backup Assets

Make your changes locally or in the appropriate environment. Once the changes have been made, perform the actions necessary for your platform to produce the file or database backup needed.

- For site files, create as a tar.gz file.
- For a database, create a SQL dump file.

### To Create Drupal Backups

Connect to your Drupal web instance. If you are using DDEV-Local, you can use the ddev ssh command to connect to the web container.

To backup the database, run

`drush sql-dump --gzip > database-backup.sql.gz`

To backup the site files, run

`tar -zcvf file-backup.tar.gz /path/to/site`

### To Create WordPress Backups

Connect to your WordPress web instance. If you are using DDEV-Local, you can use the ddev ssh command to connect to the web container.

To backup the database, from the WordPress root directory, run

`wp db export /path/to/database-backup.sql`

to generate the SQL backup, then run

`gzip /path/to/database-backup.sql`

to compress the resulting file.

To backup the site files, from the WordPress root directory, run

`tar -zcvf file-backup.tar.gz .`

(note the dot at the end, to ensure all files in the directory are included)

### Push Backups to DDEV-Live

WE ARE MISSING THE FINAL STEP, how to deploy on ddev-live?
