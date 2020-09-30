# WordPress Getting Started Guide

This tutorial gives an example of the DDEV-Live commands specific to WordPress. First you will need to set up your DDEV-Live account and connect to your [GitHub](https://docs.ddev.com/github/) acccount using the [Getting Started Guide](https://docs.ddev.com/getting-started/). DDEV-Live supports other PHP applications and CMSs such as [TYPO3](https://docs.ddev.com/typo3-guide/), [Drupal](https://docs.ddev.com/drupal-guide/), etc.

## DDEV-Live default settings for WordPress
We give additional flags below to use if your project differs from these defaults.

- Default WordPress version is WordPress 5.3.2.
- Default docroot is the project root.
- Default branch is master.
- `composer install` will not run.

## Add a WordPress site from your connected GitHub account
To create a [site](https://docs.ddev.com/sites/) named `mysite` on DDEV-Live and import code from a [connected GitHub account](https://docs.ddev.com/github/) named `ddev-demo` with a repo named `mysite` using the default settings, run:
```
$ ddev-live create site wordpress mysite --github-repo ddev-demo/mysite
```

Use `ddev-live describe site mysite` to view info about your [site](https://docs.ddev.com/sites/).

## WordPress-specific flags
You can add flags for specific configuration options. Use `ddev-live create site wordpress --help` to see all possible flags and their descriptions.

| Flag | Description |
| :---- | :----------- |
| `--wordpress-version <version>` |Specify WordPress version, `<5.x>`. The default is `5.3.2`. |
| `--docroot <path>` |The docroot is the directory from which your site is served. The default is the project root, `--docroot ""`. <br> This value is a relative path from your project root. For WordPress, you might use `--docroot web`. |
| `--ephemeral-paths <path>` |A comma-separated list of ephemeral mount paths relative to docroot (ex. content/cache). |
| `--persistent-paths <path>`|A comma-separated list of persistent mount paths relative to docroot (ex. content/uploads).|

Here is an example for a WordPress site that requires `composer install`, with the docroot in /docroot:
```
$  ddev-live create site wordpress ddev-demo/mysite --github-repo ddev-demo/mysite --docroot docroot --run-composer-install
```

## WordPress DDEV Custom Config
We also support a custom WP config file in your repo that will allow you to set custom WP config settings for your install. The file name is `wp-drud-config.php` and located in the docroot. You can set env variables using the CLI like so `ddev-live config variable set {org}/{site} NGINX_DOCROOT '/var/www/html/docroot'`/ Then you can use `getenv` in the `wp-drud-config.php` file like so `getenv('NGINX_DOCROOT')` to pull environment specific configs.

### Common Use Cases: 

WP in sub directory

```
<?php
// site URL
define('WP_HOME', ($_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https' ? 'https://' : 'http://') . $_SERVER['HTTP_HOST']);

/** WP in Sub-directory */
// WP URL
define('WP_SITEURL', WP_HOME . '/wp');
// set WP ABSPATH
define('ABSPATH', getenv('DDEV_DOCROOT') . '/wp/');

/** Custom wp-content Directory */
// full local path of current directory (no trailing slash)
define('WP_CONTENT_DIR', getenv('DDEV_DOCROOT') . '/content');
// full URI of current directory (no trailing slash)
define('WP_CONTENT_URL', WP_HOME . '/content');
```


