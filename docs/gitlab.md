# GitLab

Integration with GitLab has been designed differently from GitHub. The site creation using our [ddev-live CLI introduces slightly modified and more general purpose flags](https://docs.ddev.com/sites/#gitlab). For publicly available gitlab repositories without any advanced GitLab integration, the CLI flags are all you need. This page describes how to configure credentials and enable webhooks for automatic build triggers.

## Configure Personal Access Token

TODO for: @karasekjosef please add a few screenshots and commands:
- how to create a PAT and authorize sufficiently in GitLab
- what CLI commands user needs to execute to provide PAT to ddev-live with explanation of the flags and what they mean

### Project Webhook Configuration

With sufficiently authenticated GitLab personal access token configured, the platform will try to do best effort on configuring webhooks automatically for each project whenever a repository URL is referenced in one of the created sites. You can check the status of the auto-configuration by running a CLI command to describe site details `$ ddev-live describe site <SITE_NAME>`.

You can choose to configure the webhooks manually per project in your GitLab server. The steps may differ based on your gitlab version, following steps are for GitLab 13.0 release:
1) Login to your GitLab instance and go to a desired project `Settings` -> `Webhooks` page.

2) Using ddev-live CLI, run `$ ddev-live describe site <SITENAME>`, under the section `SITE IMAGE`, you can find `GIT SOURCE` and `Status`. This should contain a URL for the GitLab Webhook Settings and Secret Token.

3) Select `Push events` trigger, optionally you can restrict a branch as well, but you can keep that blank to forward events for all branches.

4) Check `Enable SSL verification` to keep the connection between GitLab and ddev secure.

5) Click on `Add webhook`.

![Manual Webhook Configuration](img/gitlab-webhook-manual-config.png)

### Trigger Site Build Manually

With the ddev-live CLI, you have the option of triggering a site deployment from a certain commit manually,

```
$ ddev-live configure site --git-rev <SHA/TAG/BRANCH>
```

will trigger a build if the git revision differs from previously configured revision. 
