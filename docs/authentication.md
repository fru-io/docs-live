---
title: Authentication
description: Connecting to the DDEV-Live platform using the CLI or the API token 
---
# Authentication

## Authenticating from the command line
The DDEV-Live client initiates authentication via the `ddev-live auth` command. Running the command with no arguments will open a browser tab prompting you to complete the authentication process at https://dash.ddev.com/verify. After logging in through the browser page, authentication and configuration information will be passed to the client and you will be ready to interact with DDEV-Live.

## Authenticating with a token
In instances where authenticating by interacting with a browser is not practical, you can pass a DDEV-Live API Token to the command-line. Your [account settings](https://dash.ddev.com/settings/integration) hold the value for the DDEV-Live API Token under the "Integration" tab.

```
$ export DDEV_LIVE_TOKEN="my-ddev-live-token"
$ ddev-live auth --token $DDEV_LIVE_TOKEN
```

Storing the DDEV-Live API token as an environment variable and then referencing that environment variable is the recommend way of working with this type of token.

## Example
Authtentication with a default organization and a token:<script id="asciicast-358902" src="https://asciinema.org/a/358902.js" async></script>
