# Databases

Database [backups](backups.md) are not enabled by default. You will need to [configure a database backup](https://docs.ddev.com/databases/#configuring-database-backups).

## Listing Databases
`ddev-live list` can list different types of objects including [backups](https://docs.ddev.com/backups/), [databases](https://docs.ddev.com/databases/), [execs](https://docs.ddev.com/exec/), [files](https://docs.ddev.com/files/), [restores](https://docs.ddev.com/restores/), and [sites](https://docs.ddev.com/sites/).

The following command returns the databases assets. In this example, there is one database named `mysite` for the `mysite` [site](sites.md).
```
➜  ddev-live list databases
DATABASES
 NAME          SITE          SERVER         SERVERREADY  AGE
 mysite        mysite        default-9482b  True         10d
```

## Listing Database Backups
`ddev-live list` can list different types of objects including [backups](https://docs.ddev.com/backups/), [databases](https://docs.ddev.com/databases/), [execs](https://docs.ddev.com/execs/), [files](https://docs.ddev.com/files/), [restores](https://docs.ddev.com/restores/), and [sites](https://docs.ddev.com/sites/).

The following command returns the database [backups](backups.md). In this example, there is one database named `mysite` for the `mysite` [site](sites.md). The output is restricted to database [backups](backups.md) with the `--db` flag. Omitting the `--db` flag will list both database and file [backups](backups.md).
```
➜  ddev-live list backups --db
DATABASE BACKUPS
 NAME             DATABASE   AGE  COMPLETE  BYTES
 mysite-jtsg8     mysite     14m  true      31556
```

## Database Backups
Database [backups](backups.md) can be created on demand or run on a schedule. Once a [backup](backups.md) has been generated it can be restored to a [site](sites.md) or [downloaded](https://docs.ddev.com/databases/#pulling-databases).

The following command initiates a [backup](backups.md) of the databases assets for the `mysite` [site](sites.md).
```
➜  ddev-live backup database mysite
Initiated database backup: ddev-demo/mysite-h9fqh
```

This command returns a reference to a database [backup](backups.md). The reference can be used to query the state of a [backups](backups.md) with the following command:
```
➜  ddev-live describe backup database ddev-demo/mysite-h9fqh
```

## Configuring Database Backups
To configure a [backup](backups.md) schedule, use `ddev-live config backups`. One argument is required: a reference to a [site](sites.md). [Backups](backups.md) are initiated daily at a randomly assigned time, and seven automated [backups](backups.md) are retained by default.
```
➜  ddev-live config backups enable ddev-demo/mysite
Enabled database backups for site: ddev-demo/mysite
```

The `ddev-live config backups retention` command sets the number of automated [backups](backups.md) to be retained.

This command accepts two arguments: a reference to a [site](sites.md) and the number of [backups](backups.md) to be retained. By default, 7 [backups](backups.md) will be retained, equating to one week's worth of daily [backups](backups.md). The count can be configured to values between 1 and 365.
```
➜  ddev-live config backups retention ddev-demo/mysite 5
Set database backup retention count to 5 for site: ddev-demo/mysite
```

## Pushing Databases
`ddev-live push` can move [files](https://docs.ddev.com/files/) and [databases](https://docs.ddev.com/databases/) from your local environment to a [site](https://docs.ddev.com/sites/). Uploading files or a database will trigger a [job](jobs.md) that performs the task on DDEV-Live.

Use `ddev-live push database` to import a database to your [site](sites.md). Two arguments are required: a reference to a [site](sites.md) and the path to a database [backup](backups.md) asset. Database [backups](backups.md) must be gzip-ed SQL files. When the database [backup](backups.md) has been uploaded, a [backup](backups.md) restore operation is initiated using the uploaded asset.

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

This command downloads a database [backup](backups.md) asset. One argument is required: a reference to a database [backup](backups.md). The [backup](backups.md) is downloaded into the current directory.
```
➜  ddev-live pull database ddev-demo-h9fqh
Downloaded: ddev-demo-h9fqh.gz
```

## Restoring Databases
`ddev-live restore` can apply a [database backup](https://docs.ddev.com/databases/#database-backups) to a [site](https://docs.ddev.com/sites/).

This command [restores](restores.md) a database [backup](backups.md) named `mysite-jtsg8` to the `mysite` [site](sites.md).
```
➜  ddev-live restore database mysite mysite-jtsg8
Initiated database restore ddev-demo/mysite-wd4kq
```
`ddev-live describe` will give you information about the [restore](restores.md) [job](jobs.md).
```
➜  ddev-live describe restore database mysite-wd4kq
Name:     mysite-wd4kq
Org:      ddev-demo
Created:  23s ago (2020-04-29 09:51:27 -0400 EDT)
Database: mysite
Export:   mysite-jtsg8
Status:   ImportOpFinished
```
## Example
Creating a database backup:<script id="asciicast-358910" src="https://asciinema.org/a/358910.js" async></script>
Pushing a local database to ddev-live: <script id="asciicast-358916" src="https://asciinema.org/a/358916.js" async></script>
Pulling a database from ddev-live to your local: <script id="asciicast-358914" src="https://asciinema.org/a/358914.js" async></script>
