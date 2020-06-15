# Known issues

- You may see a 503 or a 502 error at a newly generated [site's](sites.md) URL for a period of time.
- `ddev-live exec` commands queue and cannot currently be run simultaneously, leading to long waiting times and CLI timeouts.
- When you make a change in the [GitHub](github.md) repo for a previously deployed [site](sites.md) you do not have the ability to check on the status of the deployment from the CLI.
- It can take up to 3 seconds after site creation for the `ddev-live describe` command to succeed.
- [Databases](databases.md) from deleted [sites](sites.md) are not being cleaned up properly.
- `ddev-live push files` does not yet work with an archive of the entire files directory.
- `ddev-live push files` will fail with the message "The access key ID you provided does not exist in our records." Please try your file push a few times and it should complete successfully. 

### Running into something that's not listed here? [Support is here for you](https://docs.ddev.com/support/)
