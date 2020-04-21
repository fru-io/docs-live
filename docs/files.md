* Use `ddev-live backup` to initiate a database or files backup.
* Use `ddev-live pull` to download project database or files.

## Import a database and files
Upload any existing content for your project using a database export archive and files directory. For more on asset backup and restore please see the [FAQs](https://docs.ddev.com/faq/).

Uploading files or a database will trigger an instance that performs the task on DDEV-Live. Keep an eye out for the instance name that is displayed as your local command finishes. For example, the instance name for `ddev-live push files` will be contained in the line `Initiated files restore: <org>/<site>-<id>`. You can use the instance name in subsequent describe commands to see status.

- Next, upload your files to the site environment. Move into your files directory and push the files using:
```
ddev-live push files <org>/<site> .
```
For example, here is a successful command and response for a Drupal site with the docroot in web, showing your file restore instance name:
```
cd web/sites/default/files && ddev-live push files my-org/my-site .
Uploaded: [files list]
Initiated files restore: my-org/my-site-t5jn5
```
For example, here is a successful command and response for a TYPO3 site with the docroot in public/, showing your file restore instance name:
```
ddev-live push files my-org/my-site /path/to/dir
Uploaded: [files list]
Initiated files restore: my-org/my-site-t5jn5
```
Use the restore instance to check the status of the file restore operation, for example:
```
ddev-live describe restore my-org/my-site-t5jn5
```

- Visit or refresh your site's URL in the browser to confirm it is displaying as expected.
