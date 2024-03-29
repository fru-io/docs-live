---
title: The exec command
description: How to run commands in the DDEV hosting environment 
---
# exec

`ddev-live exec` runs a command or creates interactive session directly in the [site's](sites.md) environment.

## exec inline command
The following command illustrates calling `drush version` in the `mysite` site for the `ddev-demo` [organization](organizations.md).
```
$ ddev-live exec --org ddev-demo mysite -- "drush version"
 Drush version : 9.7.1
```

Users can execute interactive exec session as well with `-i` argument and then interact with the site in real time.
```
$ ddev-live exec mysite -i -- bash
```
In order to terminate the interactive exec session, press CTRL+C or send `SIGINT` signal to the process.
In the interactive exec session, it is possible to utilize environment [variables](variables.md), wildcards, and the like when running commands, this is currently not possible in non-interactive exec. 
