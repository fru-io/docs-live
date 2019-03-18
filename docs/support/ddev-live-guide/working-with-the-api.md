---
title: Working with the API
description:
freshdesk:
  title: Working with the API # title	string	Title of the solution article
  id: 36000106931 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178531 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 2 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

# API account

If you do not have API credentials, please[open a ticket]("https://support.drud.com/support/tickets/new") and request one. We'll create an account, notifying you to set your password.

## API documentation

Our API and its documentation are in active development. Attached below is a Swagger.yaml file for accessing the current API endpoints. You can import this into your tool of choice that supports Swagger.

## Authentication

The ddev-live API uses JWTs as an API token. You can request a JWT by submitting a POST request to [/user]("https://api.ddev-live.drud.io/docs/#/auth/login")

You'll receive a long string of letters and numbers back from that request, and that's what you'll need to include in authenticated requests to other API endpoints. The header that you'll need to send should look like this:

Authorization: Bearer \[your JWT\]

If you're submitting requests through the Swagger UI, you can also copy your JWT, click the "Authorize" button at the top right of the page, and paste the JWT into the "Value" field. This way, subsequent requests to authenticated endpoints will succeed.

## Supported Actions

Through the API, you can perform the following actions:

- Get a list of all projects that you have access to
- Get details about a single project, including Git push URLs
- _Sync assets and databases between environments_
- _Get a list of backups for a given project + environment_
- _Kick off a new backup_
- _Check the status of a backup job_
- _Delete a backup_
- _Upload a backup_
- _Download a backup_
- _Restore a backup to a given project + environment_
- _Check the status of a restore job_

## API roadmap

Additional functionality on our roadmap for the API includes:

- Create/update/delete projects and environments
- Self-service registration of users and organizations
- Ad-hoc command execution inside of a project/environment
- Self-service management of PHP version and environment addons (varnish, memcached, etc)
- There's a work-in-progress, command-line client (and go client library)
