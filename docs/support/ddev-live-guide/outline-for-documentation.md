---
title: Outline for Documentation
description:
freshdesk:
  title: Outline for Documentation # title	string	Title of the solution article
  id: 36000069997 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 2 # type	number	The type of the solution article
  category_id: 36000115505 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000178531 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36007655997 # agent_id	number	ID of the agent who created the solution article
  status: 1 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

**Convert this list to Client Facing**

* Managing projects and environments
  - Setup
  - Manage secrets
    - Create
    - Modify
    - Delete
  - Manage projects
    - Create
    - Modify
    - Delete
  - Managing environments
    - Create
    - Modify
    - Delete
* Migrating sites
  - Prepare a site for running on ddev-live
  - Using migration-tools
  - Proxy traffic to legacy infrastructure
  - Point DNS at ddev-live
  - Cut over to full-hosting mode
  - Using a migration tracker spreadsheet
  - HTTPS caveats
* Managing existing sites
  - Push code to an environment
    - Finding push credentials for an already-existing project
  - Import data
  - Sync from one environment to another
  - View logs for a site
  - Backups
    - Scheduled backups
    - Manual backups
    - Restoring from a backup
  - Managing HTTPS
* Client communication
  - Standards and policies
  - Dealing with problems
    - Self resolution
    - Internal escalation
* Reference
  - project-manager flags
  - Relevant IP addresses
  - Useful dashboards
  - FAQ
