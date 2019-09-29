# Known issues
* `ddev-live auth` has a 60 minute timeout. If you start noticing CLI output similar to "failed to get site" when you know the site exists you should run `ddev-live auth` again.
* You may see a 503 or a 502 error at a newly generated site's URL for a period of time.
* `ddev-live push files` only works when the local directory is referenced as `.`
* `ddev-live exec` commands queue and cannot currently be run simultaneously, leading to long waiting times and CLI timeouts.
* Drupal 8 sites warn that Trusted Host Settings is not enabled.
* When you make a change in the GitHub repo for a previously deployed site you do not have the ability to check on the status of the deployment from the CLI.
* DRUPAL_HASH_SALT is visible in CLI output.
* Databases from deleted sites are not being cleaned up properly.
* If you uninstall the DDEV-Live GitHub integration and then reinstall it you will no longer be able to deploy.


# Golden ticket limitations
* Only Drupal sites are supported.
* Custom domains and hostnames aren't supported.
* `ddev-live push files` does not yet work with an archive of the entire files directory.

Last updated Fri Sep 27 15:04:45 2019 UTC
