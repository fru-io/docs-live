# Known issues

* Drush via `ddev-live exec` is currently broken
* You will see additional information during `ddev-live create site` regarding github `[github] GithubRepoSynced: False (GithubRateLimit: Github RateLimit Reached! Requeueing to execute after reset period)`. This does not affect the `ddev-live create site` process.
* You will see additional information during `ddev-live create site` regarding fpm `[fpm] ImageBaseUpToDate: False (DistroUpdateAvailable: New FPM version available: 7.2)`. This does not affect the `ddev-live create site` process.
* `ddev-live describe restore` is only inspecting files restores, not db restores. 

Last updated 23 Sept 2019 18:25:45 CEST
