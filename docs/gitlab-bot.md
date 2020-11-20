---
title: Usage of GitLab Preview bot
description: Launch DDEV-Live preview sites from GitLab merge requests 
---
# Usage of GitLab preview bot

The [GitLab integration guide](https://docs.ddev.com/gitlab/) explains how to provide personal access token for DDEV-Live platform to interact with GitLab. The DDEV Preview bot requires the `api` scope.

You can [create new sites](https://docs.ddev.com/sites/#gitlab) on DDEV-Live from each repository the personal access token grants access to. With the DDEV Preview bot, you can also clone existing sites and deploy them with code directly from a merge request as preview site for testing purposes. The commands are triggered as merge request comments- all you have to do is to post the following:

```
/ddev-live-preview-site
```

The bot will build your Preview site and return a URL.

There are three pre-conditions for the DDEV Preview bot to be able to create preview sites:

- The **Repository** has to be within the scope of the personal access token you used to set up [credentials](https://docs.ddev.com/gitlab/#configure-personal-access-token).
- The **Command** has to be triggered by the merge request author.
- The **Existing origin site** on DDEV-Live references the repository and merge request's base branch. This is used as a reference to copy the database and file assets.

A list of supported commands for the bot is available at [https://docs.ddev.com/preview-bot](https://docs.ddev.com/preview-bot).
