---
title: Usage of GitHub preview bot
description: Launch DDEV-Live preview sites interacting from GitHub pull requests 
---
# Usage of GitHub preview bot

The [GitHub integration guide](https://docs.ddev.com/github/) explains how to install the DDEV-Live GitHub app. The DDEV Preview bot requires a publicly visible email configured for your account in order to be able to perform authorization on each command.

???+ note 
    If you have installed the DDEV-Live app before November 23rd, 2020, you will need to approve new set of permissions for reading and writing pull request comments to enable Preview bot functionality.

You can [create new sites](https://docs.ddev.com/sites/#github) from each repository selected as part of the GitHub app installation. With the DDEV Preview bot, you can also clone existing sites and deploy them with code directly from a pull request as preview site for testing purposes. The commands are triggered as pull request comments, all you have to do is post the following comment:

```
/ddev-live-preview-site
```
The bot will build your Preview site and return a URL.

There are three pre-conditions for the DDEV Preview bot to be able to create preview sites:

- The **Repository** has to be part of your DDEV-Live [GitHub app](https://docs.ddev.com/github/) installation.
- The **Command** has to be triggered by the pull request author.
- The **Existing origin site** on DDEV-Live references the repository and pull request's base branch. This is used as a reference to copy the database and file assets.

A list of supported commands for the bot is available at [https://docs.ddev.com/preview-bot](https://docs.ddev.com/preview-bot).
