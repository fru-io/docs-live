## Add a site from your connected GitHub account
This tutorial uses Drupal and follows on the general [Getting Started Guide](getting-started.md). DDEV-Live supports other PHP applications and CMSs such as TYPO3, WordPress, etc.

#### DDEV-Live default settings.
We give additional flags below to use if your project differs from these defaults.

* Default Drupal version is Drupal 8.
* Default docroot is the project root (ie the directory from which your [site](sites.md) is served).
* Default branch is master.
* `composer install` will not run.

#### User-provided values in commands:
* `<org>` is your [account slug](account-types.md).
* `<site>` is the [key for this project](site.md).
* `<github-org>` is your connected [GitHub](github.md) user or organization.
* `<repo-name>` is the connected repo you want to import.

To create your project on DDEV-Live and import code from [GitHub](github.md) with the default settings, run:
```
ddev-live create site drupal <org>/<site> --github-repo <github-org>/<repo-name> [flags]
```

Here is a common example for a Drupal 8 [site](sites.md) that requires `composer install`, with the docroot in /web:
```
ddev-live create site drupal my-org/my-site --github-repo my-github/my-repo --docroot web --run-composer-install
```

You can add flags for specific configuration options. Use `ddev-live create site drupal --help` to see all possible flags and their descriptions. A few common flags:

| Flag | Description |
| :---- | :----------- |
| `--drupal-version <version>` |Specify the Drupal version, `<7>` or `<8>`. The default is Drupal 8. |
| `--docroot <path>` |The docroot is the directory from which your site is served. The default is the project root, `--docroot ""`. <br> This value is a relative path from your project root. For Drupal 8, the most common is `--docroot web`. |
| `--run-composer-install` |Runs `composer install` on site creation. <br> The default is that Composer does _not_ run. <br> Further arguments are available with `--composer-args <args>`.|
| `--branch <branch-name>` |Specify the branch of a [GitHub](github.md) repo. The default branch is `master`. |

The CLI will display feedback while your [site](sites.md) is being initialized. It may take a few minutes for your [site](sites.md) image to be built.  When your [site](sites.md) has been successfully created, the CLI displays:
```
Created Drupal site: <org>/<site>
```

- Type `ddev-live describe site <org>/<site>`
The output will display several sections including status and health. These sections are not populated until the system reports on them, and the status messages change as the system provisions the site. It takes several minutes for all health checks to return "true."

The `Preview URL:` line of the output will display the preview url for your [site](sites.md) when it has been created. Visit this link to confirm that your code has been imported. For example, `https://my-site-my-org.sites.ddev.live/`.
