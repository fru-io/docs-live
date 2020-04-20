# Organizations
An Organization is a shared account where developers can collaborate on projects. When you authenticate with DDEV-Live you are associated with an organization for subsequent commands. Your primary organization is listed as the account slug on [your settings](https://dash.ddev.com/settings) page. The results you have from using ddev-live can vary depending on the organization you are pointed to.

There are two methods for specifying an organization to work with: during login and at command run-time.

## Specify Organization at Login
In the following example we are authenticating for the the "ddev-demo" organization.
```
➜  ddev-live auth --default-org ddev-demo
Complete authentication in your browser.
Authentication complete!
```
## Specify Organization with Commands
```
➜  docs git:(orgs) ddev-live list sites --org ddev-demo
SITES
 NAME                AGE  TYPE       VERSION  SITEHEALTHY  DBHEALTHY  FILESTOREHEALTHY  PREVIEWURL
 foo                 1d  Drupal     7        true         true       true              https://preview-foo-ddev-demo.sites.ddev.live
 bar                 1d  Drupal     8        true         true       true              https://preview-bar-ddev-demo.sites.ddev.live
 ```

## Switching Organizations
Use `ddev-live auth` to globally switch from one organization to another with the `--default-org` flag.