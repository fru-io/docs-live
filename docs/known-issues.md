# Known issues

* Currently, only Drupal sites are supported.
* Not currently supporting live hostnames.
* `ddev-live auth` has a 60 minute timeout. If you start noticing CLI output similar to "failed to get site" when you know the site exists you should run `ddev-live auth` again.
* You may see a 503 or a 502 error at a newly generated site's URL for a period of time.
* `ddev-live push files` only works when the local directory is referenced as `.` 
* You will see additional information during `ddev-live create site` regarding github `[github] GithubRepoSynced: False (GithubRateLimit: Github RateLimit Reached! Requeueing to execute after reset period)`. This does not affect the `ddev-live create site` process.
* You will see additional information during `ddev-live create site` regarding fpm `[fpm] ImageBaseUpToDate: False (DistroUpdateAvailable: New FPM version available: 7.2)`. This does not affect the `ddev-live create site` process.
* `ddev-live describe restore` is only inspecting files restores, not db restores.
* `ddev-live exec` commands queue and cannot currently be run simultaneously, leading to long waiting times.
* Drupal 8 sites warn that Trusted Host Settings is not enabled.
* When you make a change in the GitHub repo for a previously deployed site you do not have the ability to check on the status of the deployment from the cli. It will complete, but might take some time.

Last updated Thu Sep 26 23:33:59 2019 UTC
