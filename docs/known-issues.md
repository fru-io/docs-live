# Known issues
* `ddev-live auth` has a 60 minute timeout. If you start noticing CLI output similar to "failed to get site" when you know the site exists you should run `ddev-live auth` again.
* You may see a 503 or a 502 error at a newly generated site's URL for a period of time.
* `ddev-live push files` is slow to transfer assets
* `ddev-live describe restore` is only inspecting files restores, not db restores.
* `ddev-live exec` commands queue and cannot currently be run simultaneously, leading to long waiting times and CLI timeouts.
* Drupal 8 sites warn that Trusted Host Settings is not enabled.
* When you make a change in the GitHub repo for a previously deployed site you do not have the ability to check on the status of the deployment from the CLI.
* DRUPAL_HASH_SALT is visible in CLI output.
* Databases from deleted sites are not being cleaned up properly.


# Golden ticket limitations
* Only Drupal sites are supported.
* Custom domains and hostnames aren't supported.

Last updated Fri Sep 27 15:04:45 2019 UTC
