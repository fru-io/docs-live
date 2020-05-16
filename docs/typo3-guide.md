# TYPO3 Getting Started Guide
This tutorial gives an example of the DDEV-Live commands specific to TYPO3 CMS. First you will need to set up your DDEV-Live account and connect to your [GitHub](https://docs.ddev.com/github/) acccount using the [Getting Started Guide](https://docs.ddev.com/getting-started/). DDEV-Live supports other PHP applications and CMSs such as [Drupal](https://docs.ddev.com/drupal-guide/), [WordPress](https://docs.ddev.com/typo3-guide/), etc.

## DDEV-Live default settings for TYPO3
We give additional flags below to use if your project differs from these defaults.

- Default TYPO3 version is 9
- Default docroot is empty, the repository's root directory (this is the directory from which your [site](sites.md) is served).
- Default branch is master.
- `composer install` will not run.

## Add a TYPO3 site from your connected GitHub account
To create a [site](https://docs.ddev.com/sites/) named `mysite` on DDEV-Live and import code from a [connected GitHub account](https://docs.ddev.com/github/) named `ddev-demo` with a repo named `mysite` using the default settings, run:

```
$ ddev-live create site typo3 mysite --github-repo ddev-demo/mysite
```

Use `ddev-live describe site mysite` to view info about your [site](https://docs.ddev.com/sites/).

## TYPO3-specific flags
You can add flags for specific configuration options. Use `ddev-live create site typo3 --help` to see all possible flags and their descriptions.

| Flag | Description |
| :---- | :----------- |
| `--typo3-version <version>` |Specify the TYPO3 version, <8>, <9> or <10>. The default is TYPO3 v9. |
| `--docroot <path>` |The docroot is the directory from which your site is served. The default is the repository's root. <br> This value is a relative path from your project root. For TYPO3, the most common is `--docroot public`. |

Here is an example to create a TYPO3 v10 [site](https://docs.ddev.com/sites/) that requires `composer install`, with the docroot in /public:
```
➜  ~ ddev-live create site typo3 mysite --github-repo ddev-demo/mysite --docroot public --run-composer-install --typo3-version 10
```
