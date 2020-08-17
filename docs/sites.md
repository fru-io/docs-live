# Sites

A "site" on DDEV-Live is a project which has information attached to it and which can be referenced in commands.

`<site>` is what you want to call your project on DDEV-Live. It must consist of lower case alphanumeric characters or ''-'', start with an _alphabetic_ character, and end with an _alphanumeric_ character.

### GitHub

To create your project on DDEV-Live and import code from [GitHub](github.md) with the default settings, run:
```
$ ddev-live create site drupal <org>/<site> --github-repo <github-org>/<repo-name> [flags]
```

You can add flags for specific configuration options. Use a command as follows to see all possible flags and their descriptions:
```
$ ddev-live create site wordpress -h
```

### GitLab

The previous command is tightly coupled with the GitHub API and [GitHub Apps](https://developer.github.com/apps/), and therefore it does not support any other Git hosts. As we are gradually introducing integrations with more third-party tools and platforms, for GitLab we have added more universal set of flags that are agnostic of the Git hosting [provider](https://docs.ddev.com/providers/) and newly support not only branches but also tags and any other valid Git revisions:
```
$ ddev-live create site drupal <org>/<site> --git-repo <git-repository-url> --git-rev <branch/tag/commit> [flags]
```


## Working with your site on DDEV-Live
The DDEV-Live GitHub app watches the specified branch of your repo. When you push updates to the repo, DDEV-Live will redeploy the site. This will take a few minutes to complete.

- View a list of all the sites within a specified [organization](organizations.md) with `ddev-live list sites --org <org>`.
- View the state of a specific site with `ddev-live describe site <org>/<site>`.
- Use `ddev-live config` to modify the GitHub repo or branch to pull from.
- Use `ddev-live delete` to delete a resource. For example, `ddev-live delete site <org>/<site>`.

#### Setting expiration on your site
Optionally you can set a site to expire anywhere from 30 minutes to 5 days from the creation timestamp with `--expires-in` flag. It can be used both at site creation time as well as configured later. When the site expires, it will be automatically deleted from DDEV-Live.

Example creating a site that will expire in 90 minutes.
```
$ ddev-live create site drupal <org>/<site> --github-repo <github-org>/<repo-name> --expires-in 90m
```

Extending or shortening the expiration sets the time to live from the site creation and can never extend beyond 5 days total.
This example will set the expiry to 4 days from when the site was created.
```
$ ddev-live config drupal <site> --expires-in 4d
```

Here is a handy command to filter through your sites for all that have expiry set and sort by which one expires earliest:
```
$ ddev-live list sites -o json --format-time-as-seconds | jq -c '[.sites[] | select(.expires != "")] | sort_by(.expires) | .[]'
```

The flag `-o json` sets the output from plaintext to JSON formatted, the second flag `--format-time-as-seconds` converts the human readable duration and time to seconds and timestamp so it can be conveniently passed to other tools, such as `jq`, for additional processing.
