---
title: The exec command
description: How to run commands in the DDEV hosting environment 
---
# exec

`ddev-live exec` runs a command or script in the [site's](sites.md) environment.

Commands and scripts can be defined directly in the invocation or stored in a
file for repeatability and consistency. By default, this command will wait
until all constituent commands are complete, then return the combined stdout
and stderr output, along with other execution information.

You can use the `--async` flag with `ddev-live exec` if you prefer not waiting for the output to be returned.

## exec inline command
The following command illustrates calling `drush version` in the `mysite` site for the `ddev-demo` [organization](organizations.md).
```
$ ddev-live exec mysite -- 'drush version'
Targeting site: ddev-demo/mysite
Running command:
drush version
Created exec: ddev-demo/mysite-v9vp8

OUTPUT
 Drush version : 9.7.1
```
Once a [job](jobs.md) has been created you can check the status at any time with `ddev-live describe`.
```
$ ddev-live describe exec ddev-demo/mysite-v9vp8
Name:      mysite-v9vp8
Org:       ddev-demo
Created:   3m ago (2020-04-30 14:17:01 -0400 EDT)
Status:    Completed
Duration:
Exit Code:

COMMAND
drush version

OUTPUT
 Drush version : 9.7.1
```
## exec local script
The following command executes a local script named `wp-version.sh` which contains the command `wp --version` against the remote `mysite` [site](sites.md) for the `ddev-demo` [organization](organizations.md).
```
$ ddev-live exec mysite --file wp-version.sh
Targeting site: ddev-demo/mysite
Running command:
wp --version


Created exec: ddev-demo/mysite-vsjsx

OUTPUT
WP-CLI 2.4.0
```
## exec shell
Any command or script passed to exec will be interpreted by 'sh', meaning a
user can utilize environment [variables](variables.md), wildcards, and the like when running
commands. If the commands used in an exec rely on these features of 'sh', the
commands should be defined in a file to prevent shell parsing and substitution
locally. For example, the following command will echo the value of the [variables](variables.md)
as defined on the local system, not the [site's](sites.md) remote environment:
```
$ ddev-live exec mysite -- echo $HOME
Targeting site: ddev-demo/mysite
Running command:
echo /home/local-ddev-demo
Created exec: ddev-demo/mysite-xcpln

OUTPUT
/home/local-ddev-demo
```

To avoid this, create a file containing the commands:
```
  #! /bin/sh
  echo $HOME
```
...and reference the file in the exec command:
```$  ddev-live exec mysite --file home.sh
Targeting site: ddev-demo/mysite
Running command:
  #! /bin/sh
  echo $HOME


Created exec: ddev-demo/mysite-gxxcf

OUTPUT
/tekton/home
```
## Cancel an exec
After an exec has been created and scheduled (but before it has been executed),
it can be cancelled:
```
$  ddev-live exec cancel ddev-demo/mysite-gdk6x
Cancelled exec ddev-demo/mysite-gdk6x
```
