# Databases
Database backups are not enabled by default. You will need to [configure a database backup](https://docs.ddev.com/databases/#configuring-database-backups).

## Listing Databases

`ddev-live list` can list different types of objects including [backups](https://docs.ddev.com/backups/), [databases](https://docs.ddev.com/databases/), [execs](https://docs.ddev.com/execs/), [files](https://docs.ddev.com/files/), [restores](https://docs.ddev.com/restores/), and [sites](https://docs.ddev.com/sites/).

The following command returns the databases assets. In this example, there is one database named `mysite` for the `mysite` site.
```
➜  ddev-live list databases
DATABASES
 NAME          SITE          SERVER         SERVERREADY  AGE
 mysite        mysite        default-9482b  True         10d
```

## Listing Database Backups

`ddev-live list` can list different types of objects including [backups](https://docs.ddev.com/backups/), [databases](https://docs.ddev.com/databases/), [execs](https://docs.ddev.com/execs/), [files](https://docs.ddev.com/files/), [restores](https://docs.ddev.com/restores/), and [sites](https://docs.ddev.com/sites/).

The following command returns the database backups. In this example, there is one database named `mysite` for the `mysite` site. The output is restricted to database backups with the `--db` flag. Omitting the `--db` flag will list both database and file backups.
```
➜  ddev-live list backups --db
DATABASE BACKUPS
 NAME             DATABASE   AGE  COMPLETE  BYTES 
 mysite-jtsg8     mysite     14m  true      31556 
```

## Database Backups

Database [backups](https://docs.ddev.com/backups/) can be created on demand or are run on a schedule. Once a backup has been generated it can be restored to a site or [downloaded](https://docs.ddev.com/databases/#pulling-databases).

The following command initiates a backup of the databases assets for the `mysite` site.
```
➜  ddev-live backup database mysite 
Initiated database backup: ddev-demo/mysite-h9fqh
```

This command returns a reference to a database backup. The reference can be used to query the state of a backup with the following command:
```
➜  ddev-live describe backup database ddev-demo/mysite-h9fqh
```

## Configuring Database Backups
To configure a backup schedule, use `ddev-live config backups`. One argument is required: a reference to a site. Backups are initiated daily at a randomly assigned time, and seven automated backups are retained by default.
```
➜  ddev-live config backups enable ddev-demo/mysite
Enabled database backups for site: ddev-demo/mysite
```

The `ddev-live config backups retention` command sets the number of automated backups to be retained. 

This command accepts two arguments: a reference to a site and the number of backups to be retained. By default, 7 backups will be retained, equating to one week's worth of daily backups. The count can be configured to values between 1 and 365.
```
➜  ddev-live config backups retention ddev-demo/mysite 5
Set database backup retention count to 5 for site: ddev-demo/mysite
```

## Pushing Databases
`ddev-live push` can move [files](https://docs.ddev.com/files/) and [databases](https://docs.ddev.com/databases/) from your local environment to a [site](https://docs.ddev.com/sites/). Uploading files or a database will trigger a [job](https://docs.ddev.com/jobs/) that performs the task on DDEV-Live.

Use `ddev-live push database` to import a database to your site. Two arguments are required: a reference to a site and the path to a database backup asset. Database backups must be gzip-ed SQL files. When the database backup has been uploaded, a backup restore operation is initiated using the uploaded asset.

The following command pushes a database named `foo.sql.gz` from local to live and initiates a [backup restore](https://docs.ddev.com/backups/). 
```
➜  ddev-live push database mysite ./foo.sql.gz
Uploaded: ./foo.sql.gz
Initiated backup restore: ddev-demo/mysite-gxsrd
```

`ddev-live describe` will give you the [job's](https://docs.ddev.com/jobs) status.
```
➜  ddev-live describe  restore  database ddev-demo/mysite-gxsrd
Name:     mysite-gxsrd
Org:      ddev-demo
Created:  5m ago (2020-04-23 18:12:22 -0400 EDT)
Database: mysite
Export:
Status:   ImportOpFinished
```

## Pulling Databases
`ddev-live pull` can move [files](https://docs.ddev.com/files/) and [databases](https://docs.ddev.com/databases/) from a [site](https://docs.ddev.com/sites/) to your local environment.

This command downloads a database backup asset. One argument is required: a reference to a database backup. The backup is downloaded into the current directory.
```
➜  ddev-live pull database ddev-demo-h9fqh
Downloaded: ddev-demo-h9fqh.gz
```

## Restoring Databases
`ddev-live restore` can apply a [database backup](https://docs.ddev.com/databases/#database-backups) to a [site](https://docs.ddev.com/sites/).

This command restores a database backup named `mysite-jtsg8` to the `mysite` site.
```
➜  ddev-live restore database mysite mysite-jtsg8
Initiated database restore ddev-demo/mysite-wd4kq
```
`ddev-live describe` will give you information about the restore job.
```
➜  ddev-live describe restore database mysite-wd4kq
Name:     mysite-wd4kq
Org:      ddev-demo
Created:  23s ago (2020-04-29 09:51:27 -0400 EDT)
Database: mysite
Export:   mysite-jtsg8
Status:   ImportOpFinished

```