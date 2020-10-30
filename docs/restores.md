---
title: Restores
description: How to restore a database or files on DDEV hosting 
---
# Restores

You can create [backups](https://docs.ddev.com/backups/) of both [files](files.md) and [databases](databases.md) that can be restored to a running [site](sites.md).

## Databases
- [Restoring backups](https://docs.ddev.com/databases/#restoring-databases)

## Files
- [Restoring backups](https://docs.ddev.com/files/#file-restores)

## Syncing Data

Backups of both databases and files are scoped to an [organization](organizations.md).  Because backups are not scoped to the site from which they were taken restore operations of backups can be restored to any target in that [organization](organizations.md).  

One use case where this can be useful when syncing files and database content from a production site to a site which is under development.

For example:
```
$ ddev-live backup database my-org/production-site
Initiated database backup: my-org/production-site-v4j6f

For backup status, run:
  ddev-live describe backup database my-org/production-site-v4j6f
```

This backup can be restored to another site:
```
$ ddev-live restore database my-org/feature-site production-site-v4j6f
Initiated database backup restore my-org/feature-site-5d7mv

For restore status, run:
  ddev-live describe restore database my-org/feature-site-5d7mv
```