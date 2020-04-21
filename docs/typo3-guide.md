## Add a site from your connected GitHub account
This tutorial uses TYPO3 and follows on the general [Getting Started Guide](getting-started.md). DDEV-Live supports other PHP applications and CMSs such as Drupal, WordPress, etc.

#### DDEV-Live default settings.
We give additional flags below to use if your project differs from these defaults.

* Default TYPO3 version is 9
* Default docroot is empty, the repository's root directory (this is the directory from which your site is served).
* Default branch is master.
* `composer install` will not run.

#### User-provided values in commands:
* `<org>` is your [account slug](account-types.md).
* `<site>` is the [key for this project](site.md).
* `<github-org>` is your [connected GitHub user or organization](github.md).
* `<repo-name>` is the connected repo you want to import.

- To create your project on DDEV-Live and import code from GitHub with the default settings, run:
```
ddev-live create site typo3 <org>/<site> --github-repo <github-org>/<repo-name> [flags]
```

Here is a common example for a TYPO3 v10 site that requires `composer install`, with the docroot in /public:
```
ddev-live create site typo3 my-org/my-site --github-repo my-github/my-repo --docroot public --run-composer-install --typo3-version 10
```

You can add flags for specific configuration options. Use `ddev-live create site typo3 --help` to see all possible flags and their descriptions. A few common flags:

| Flag | Description |
| :---- | :----------- |
| `--typo3-version <version>` |Specify the TYPO3 version, <8>, <9> or <10>. The default is TYPO3 v9. |
| `--docroot <path>` |The docroot is the directory from which your site is served. The default is the repository's root. <br> This value is a relative path from your project root. For TYPO3, the most common is `--docroot public`. |
| `--run-composer-install` |Runs `composer install` on site creation. <br> The default is that Composer does _not_ run. <br> Further arguments are available with `--composer-args <args>`.|
| `--branch <branch-name>` |Specify the branch of a GitHub repo. The default branch is `master`. |

The CLI will display `Creating TYPO3 site: <org>/<site>`. It may take a few minutes for your site image to be built.  When your site has been successfully created, running `ddev-live describe site <org>/<site>` will display:
```
Created TYPO3 site: <org>/<site>
```

- Type `ddev-live describe site <org>/<site>`
The output will display several sections including general site info, and the health of various components. The status messages change as the system provisions the site. It takes several minutes for all health checks to return "true."

The `Preview URL:` line of the output will display the preview url for your site when it has been created. Visit this link to confirm that your code has been imported. For example, `https://preview-my-site-my-org.sites.ddev.live`.
