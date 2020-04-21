* Use `ddev-live backup` to initiate a database or files backup.
* Use `ddev-live pull` to download project database or files.

## Import a database
Upload any existing content for your project using a database export archive. 

Uploading files or a database will trigger an instance that performs the task on DDEV-Live. Keep an eye out for the instance name that is displayed as your local command finishes. For example, the instance name for `ddev-live push files` will be contained in the line `Initiated files restore: <org>/<site>-<id>`. You can use the instance name in subsequent describe commands to see status.

- First, upload your database archive to the site environment.
```
ddev-live push db <org>/<site> <path>
```
For example, here is a successful command and response, showing your database restore instance name:
```
ddev-live push db my-org/my-site /tmp/db.sql.gz
Uploaded: /tmp/db.sql.gz
Initiated backup restore: my-org/my-site-8wbmv
```
Use the restore instance to check the status of the restore operation, for example:
```
ddev-live describe restore my-org/my-site-8wbmv
```
