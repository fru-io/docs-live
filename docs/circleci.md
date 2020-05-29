# Tutorial: How to integrate CircleCI with DDEV-Live

This tutorial will illustrate how to perform a one-time setup to configure [CircleCI](https://circleci.com/) in order to run regular automatic deployments into [DDEV-Live](https://ddev.com/ddev-live/). With this setup, you can connect an existing CI/CD process to DDEV-Live.

This tutorial uses [Drupal](https://docs.ddev.com/drupal-guide/) as an example. DDEV-Live has explicit support for multiple CMSs and PHP applications.

**Why you might need this:**
- You want to demo work to clients or your team so they can approve work in a user acceptance testing (UAT) environment.
- You want to run functional tests.

### Table of contents:
- [Prerequisites](#prerequisites)
- [Resources](#resources)
- [Steps](#steps)
  -  [Set up and configure your CircleCI project](#1-set-up-and-configure-your-CircleCI-project)
  - [Get your DDEV-Live API token](#2-Get-your-DDEV-Live-API-token)
  - [Add the DDEV-Live token to CircleCI](#3-Add-the-DDEV-Live-token-to-CircleCI)
  - [Include the DDEV-Live orb in your CircleCI config](#4-Include-the-DDEV-Live-orb-in-your-CircleCI-config)
  - [Configure with orb commands](#5-Configure-with-orb-commands)
  - [Run your build](#6-Run-your-build)

### Prerequisites
- A fully configured [account](account-types.md) on [DDEV-Live](https://dash.ddev.com/)
- A DDEV-Live [API token](https://docs.ddev.com/authentication/#authenticating-with-a-token)
- A CircleCI account
- A CircleCI organization configured to allow [uncertified orbs](https://circleci.com/docs/2.0/using-orbs/#certified-vs-3rd-party-orbs)
- A GitHub repository configured with the [DDEV-Live GitHub app](https://docs.ddev.com/github/#install-the-ddev-live-github-app)

### Resources
- [The DDEV-Live CircleCI orb](https://circleci.com/orbs/registry/orb/ddev/ddev-live)

### Files you will need to create or configure 
- .circleci/config.yml

## Steps
### 1. Set up and configure your CircleCI project 
- Follow your usual procedures to start or configure a project. Add a new project from the repository list in CircleCI, click "start building" to add configuration manually in the following steps.
### 2. Get your DDEV-Live API token
- In the DDEV-Live dash, under [settings](https://dash.ddev.com/settings/), click the copy icon at the right of the DDEV API Token field to copy your API token.
### 3. Add the DDEV-Live token to CircleCI
- Visit settigs for your project in CircleCI and add the DDEV-Live API Token as a new environmental variable such as `DDEV_LIVE_AUTH`.
### 4. Include the DDEV-Live orb in your CircleCI config
- Add or alter the CircleCI config file in your project under .circleci/config.yml to include the [ddev-live orb](https://circleci.com/orbs/registry/orb/ddev/ddev-live) as follows and as shown in the [example](#Example-config.yml): 
```
orbs:
  ddev-live: ddev/ddev-live@latest
```
- Use `@latest` or the version number found on the [DDEV-Live orb registry page](https://circleci.com/orbs/registry/orb/ddev/ddev-live).
- When the build runs, the DDEV-Live orb will install Homebrew and the DDEV-Live CLI if not present.

### 5. Configure with orb commands
Use the following DDEV-Live orb commands as appropriate for your project and use case, or add additional commands from the DDEV-Live CLI. Use these to configure your circleci/config.yml to run your required build steps:
- **ddev-live/install** This orb command will install the DDEV-Live CLI. You may not need to do this step if your image already includes the DDEV-Live CLI.
- **ddev-live/auth** Logs in with your API token environmental variable (see example below). You can also provide a `default-org` if your account has access to multiple [organizations](https://docs.ddev.com/organizations/).
- **ddev-live/ci-branch-multi** This will create new sites for every push that happens to the repository.
- **ddev-live/delete** This deletes the site following a test run or a manual UAT step.

### Example config.yml:
```
version: 2.1

parameters:
  ddev-org:
    type: string
    default: 'your-organization'

orbs:
  ddev-live: ddev/ddev-live@0.17.0

jobs:
  build:
    docker:
      - image: circleci/php:7.2-node-browsers
    steps:
      - checkout
      - run: sudo composer self-update
      - restore_cache:
          keys:
            - composer-v1-{{ checksum "composer.lock" }}
            - composer-v1-
      - run: composer install -n --prefer-dist
      - save_cache:
          key: composer-v1-{{ checksum "composer.lock" }}
          paths:
            - vendor
      - ddev-live/install
      - ddev-live/auth:
          ddev-live-token: DDEV_LIVE_AUTH
          default-org: '<<pipeline.parameters.ddev-org>>'
      - ddev-live/ci-branch-multi:
          prefix: 'stg'
          site-type: 'drupal'
          extra-params: '--docroot=public --run-composer-install'
      - run: BEHAT_PARAMS='context[parameters][base_url]=https://preview-${DDEV_SITENAME}-<<pipeline.parameters.ddev-org>>.site.ddev.live' ./vendor/bin/behat
      - ddev-live/delete
```

### 6. Run your build
Trigger your build as usual, such as by pushing changes to your repository. In the above example the cleanup step is run immediately. You may want to include a step to wait for manual QA etc. 

### What next? 
We’d love to help you be successful with DDEV-Live. Please visit our [Help & Support page](https://docs.ddev.com/support/).

What do you think? Send us your feedback about DDEV-Live using the [Feedback form](https://dash.ddev.com/feedback/).