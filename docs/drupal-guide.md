# Drupal Getting Started Guide
This tutorial gives an example of the DDEV-Live commands specific to Drupal and follows on the general [Getting Started Guide](https://docs.ddev.com/getting-started/). DDEV-Live supports other PHP applications and CMSs such as [TYPO3](https://docs.ddev.com/typo3-guide/), [WordPress](https://docs.ddev.com/typo3-guide/), etc.

## DDEV-Live default settings for Drupal
We give additional flags below to use if your project differs from these defaults.

- Default Drupal version is Drupal 8.
- Default docroot is the project root (ie the directory from which your [site](sites.md) is served).
- Default branch is master.
- `composer install` will not run.

## Add a Drupal site from your connected GitHub account
To create a [site](https://docs.ddev.com/sites/) named `mysite` on DDEV-Live and import code from a [connected GitHub account](https://docs.ddev.com/github/) named `ddev-demo` with a repo named `mysite` using the default settings, run: 
```
➜  ~ ddev-live create site drupal mysite --github-repo ddev-demo/mysite
```

Use `ddev-live describe site mysite` to view info about your [site](https://docs.ddev.com/sites/).

## Drupal-specific flags
You can add flags for specific configuration options. Use `ddev-live create site drupal --help` to see all possible flags and their descriptions. 

| Flag | Description |
| :---- | :----------- |
| `--drupal-version <version>` |Specify the Drupal version, `<7>` or `<8>`. The default is Drupal 8. |
| `--docroot <path>` |The docroot is the directory from which your site is served. The default is the project root, `--docroot ""`. <br> This value is a relative path from your project root. For Drupal 8, the most common is `--docroot web`. |

Here is an example for a Drupal 8 site that requires `composer install`, with the docroot in /web:
```
➜  ~ ddev-live create site drupal ddev-demo/mysite --github-repo ddev-demo/mysite --docroot web --run-composer-install
```
