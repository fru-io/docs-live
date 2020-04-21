## Add a site from your connected GitHub account
This tutorial uses Drupal and follows on the general [Getting Started Guide](getting-started.md). DDEV-Live supports other PHP applications and CMSs such as TYPO3, WordPress, etc.

#### DDEV-Live default settings.
We give additional flags below to use if your project differs from these defaults.

* Default Drupal version is Drupal 8.
* Default docroot is the project root (ie the directory from which your site is served).
* Default branch is master.
* `composer install` will not run.

#### User-provided values in commands:
* `<org>` is the DDEV provided value for your unique organization on DDEV-Live. Please see your "Welcome" email for details.
* `<site>` is what you want to call your project on DDEV-Live. It must consist of lower case alphanumeric characters or ''-'', start with an _alphabetic_ character, and end with an _alphanumeric_ character.
* `<github-org>` is your connected GitHub user or organization.
* `<repo-name>` is the connected repo you want to import.

1. To create your project on DDEV-Live and import code from GitHub with the default settings, run:
```
ddev-live create site drupal <org>/<site> --github-repo <github-org>/<repo-name> [flags]
```

Here is a common example for a Drupal 8 site that requires `composer install`, with the docroot in /web:
```
ddev-live create site drupal my-org/my-site --github-repo my-github/my-repo --docroot web --run-composer-install
```

You can add flags for specific configuration options. Use `ddev-live create site drupal --help` to see all possible flags and their descriptions. A few common flags:

| Flag | Description |
| :---- | :----------- |
| `--drupal-version <version>` |Specify the Drupal version, `<7>` or `<8>`. The default is Drupal 8. |
| `--docroot <path>` |The docroot is the directory from which your site is served. The default is the project root, `--docroot ""`. <br> This value is a relative path from your project root. For Drupal 8, the most common is `--docroot web`. |
| `--run-composer-install` |Runs `composer install` on site creation. <br> The default is that Composer does _not_ run. <br> Further arguments are available with `--composer-args <args>`.|
| `--branch <branch-name>` |Specify the branch of a GitHub repo. The default branch is `master`. |

The CLI will display feedback while your site is being initialized. It may take a few minutes for your site image to be built.  When your site has been successfully created, the CLI displays:
```
Created Drupal site: <org>/<site>
```

2. Type `ddev-live describe site <org>/<site>`
The output will display several sections including status and health. These sections are not populated until the system reports on them, and the status messages change as the system provisions the site. It takes several minutes for all health checks to return "true."

The `Preview URL:` line of the output will display the preview url for your site when it has been created. Visit this link to confirm that your code has been imported. For example, `https://my-site-my-org.sites.ddev.live/`.

## Import a database and files
Upload any existing content for your project using the database export archive and files directory as mentioned in the section ["You will need"](#you-will-need), above. For more on asset backup and restore please see the [FAQs](https://docs.ddev.com/faq/).

Uploading files or a database will trigger an instance that performs the task on DDEV-Live. Keep an eye out for the instance name that is displayed as your local command finishes. For example, the instance name for `ddev-live push files` will be contained in the line `Initiated files restore: <org>/<site>-<id>`. You can use the instance name in subsequent describe commands to see status.
1. First, upload your database archive to the site environment.
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

2. Next, upload your files to the site environment. Move into your files directory and push the files using:
```
ddev-live push files <org>/<site> .
```
For example, here is a successful command and response for a site with the docroot in web, showing your file restore instance name:
```
cd web/sites/default/files && ddev-live push files my-org/my-site .
Uploaded: [files list]
Initiated files restore: my-org/my-site-t5jn5
```
Use the restore instance to check the status of the file restore operation, for example:
```
ddev-live describe restore my-org/my-site-t5jn5
```

3. Visit or refresh your site's URL in the browser to confirm it is displaying as expected.

## Working with your site on DDEV-Live
The DDEV-Live GitHub app watches the specified branch of your repo. When you push updates to the repo, DDEV-Live will redeploy the site.

* View a list of all the sites within a specified organization with `ddev-live list sites --org <org>`.
* View the state of a specific site with `ddev-live describe site <org>/<site>`.
* Use `ddev-live config` to modify the GitHub repo or branch to pull from.
* Use `ddev-live delete` to delete a resource. For example, `ddev-live delete site <org>/<site>`.
* Use `ddev-live backup` to initiate a database or files backup.
* Use `ddev-live pull` to download project database or files.
