A "site" on DDEV-Live is a project which has information attached to it and which can be referenced in commands. 

* `<site>` is what you want to call your project on DDEV-Live. It must consist of lower case alphanumeric characters or ''-'', start with an _alphabetic_ character, and end with an _alphanumeric_ character.
* To create your project on DDEV-Live and import code from GitHub with the default settings, run:
```
ddev-live create site drupal <org>/<site> --github-repo <github-org>/<repo-name> [flags]
```
You can add flags for specific configuration options. Use `ddev-live create site drupal --help` to see all possible flags and their descriptions. A few common flags:
* Type `ddev-live describe site <org>/<site>`
The output will display several sections including status and health. These sections are not populated until the system reports on them, and the status messages change as the system provisions the site. It takes several minutes for all health checks to return "true."
* View a list of all the sites within a specified organization with `ddev-live list sites --org <org>`.
* View the state of a specific site with `ddev-live describe site <org>/<site>`.
* Use `ddev-live delete` to delete a resource. For example, `ddev-live delete site <org>/<site>`.

## Working with your site on DDEV-Live
The DDEV-Live GitHub app watches the specified branch of your repo. When you push updates to the repo, DDEV-Live will redeploy the site.

* View a list of all the sites within a specified organization with `ddev-live list sites --org <org>`.
* View the state of a specific site with `ddev-live describe site <org>/<site>`.
* Use `ddev-live config` to modify the GitHub repo or branch to pull from.
* Use `ddev-live delete` to delete a resource. For example, `ddev-live delete site <org>/<site>`.