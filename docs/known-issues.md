# Known issues

* Currently, only Drupal sites are supported.
* `ddev-live auth` has a 60 minute timeout. If you start noticing CLI output similar to "failed to get site" when you know the site exists you should run `ddev-live auth` again.
* `ddev-live push files` only works when the local directory is referenced as `.` 
* You will see additional information during `ddev-live create site` regarding github `[github] GithubRepoSynced: False (GithubRateLimit: Github RateLimit Reached! Requeueing to execute after reset period)`. This does not affect the `ddev-live create site` process.
* You will see additional information during `ddev-live create site` regarding fpm `[fpm] ImageBaseUpToDate: False (DistroUpdateAvailable: New FPM version available: 7.2)`. This does not affect the `ddev-live create site` process.
* `ddev-live describe restore` is only inspecting files restores, not db restores. 

Last updated 23 Sept 2019 19:13:46 UTC
