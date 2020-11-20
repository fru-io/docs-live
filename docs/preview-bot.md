---
title: Preview bot
description: Launch DDEV-Live preview sites with the repository bot 
---
# Preview Bot

The DDEV-Live platform supports launching preview sites directly from  supported source code [providers](https://docs.ddev.com/providers), [GitHub](https://docs.ddev.com/github-bot) and [GitLab](https://docs.ddev.com/gitlab-bot). The bot detects new pull or merge requests on repositories connected to DDEV-Live and allows users to trigger the following actions using comments on the PR or MR:

### Basic commands

- `/ddev-live-help` - display preview bot help
- `/ddev-live-preview-site` - launch a preview site based on the code in this PR/MR
- `/ddev-live-delete-preview-site` - delete existing preview site associated with this pull or merge request

The command `/ddev-live-help` is triggered automatically on each new pull or merge request from which creation of a preview site is possible. The branch against which the PR or MR has been raised must be deployed on DDEV-Live for Preview to be available. More information about this is provided on the [GitHub](https://docs.ddev.com/github-bot) and [GitLab](https://docs.ddev.com/gitlab-bot) pages. Similarly, `/ddev-live-delete-preview-site` is triggered when pull or merge request is closed.
