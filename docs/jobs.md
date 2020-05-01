# Jobs
Many of the commands that are issued against the DDEV-Live platform are processed as a job. In each instance of a command that generates a job you will be given a job ID that allows you to track the status of the job. When a job is complete it is not deleted so that you can continue to check it's status as necessary.
## Getting a Job ID
The following example generates a job as a result of performing a [database backup](https://docs.ddev.com/databases/#database-backups) against a [site](sites.md) named `mysite` for the `ddev-demo` [organization](organizations.md). The job ID will always bethe last line of output that is returned once a command is [executed](execs.md). In this example, the job ID is `ddev-demo/mysite-h9fqh`.
```
➜  ddev-live backup database mysite 
Initiated database backup: ddev-demo/mysite-h9fqh
```
## Getting a Job's Details
`ddev-live describe` is used to view more details about a specific job. You can describe jobs related to [backups](https://docs.ddev.com/backups/), [databases](https://docs.ddev.com/databases/), [execs](https://docs.ddev.com/exec/), [restores](https://docs.ddev.com/restores/), and [sites](https://docs.ddev.com/sites/).

The following command describes a database backup that was succesfully generated for the `mysite` [site](sites.md) against the `ddev-demo` [organization](organizations.md).
```
➜  ddev-live describe backup database mysite-jtsg8
Name:     mysite-jtsg8
Org:      ddev-demo
Created:  2d ago (2020-04-29 09:32:42 -0400 EDT)
Database: mysite
Complete: true
Bytes:    31556
Path:     gs://9db61369-7e94-11ea-8154-a2d42e636/database/backups/adhoc/mysite-jtsg8.gz
```