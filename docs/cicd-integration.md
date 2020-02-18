# How to integrate Jenkins with DDEV-Live

This guide will show you how to deploy a build from an existing Jenkins server to DDEV-Live.

**Why you might need this:**
* You want to demo work to clients so they can approve things in a user acceptance testing (UAT) environment.
* You want to run functional tests.

This how-to guide uses Drupal as an example. DDEV-Live supports many PHP applications and CMSs.

### Table of contents:
* [Prerequisites](#prerequisites)
* [Steps](#steps)
  * [Install the DDEV-Live CLI and jq](#1-install-the-ddev-live-cli-and-jq)
  * Configure Jenkins credential manager
  * Configure a new Jenkins job credential binding
  * Add a custom exec shell command
  * Run the build to deploy on DDEV-Live

### Prerequisites
* An account on DDEV-Live (?)
* A Jenkins server with access to install tools onto it, or you can use the neighboring Dockerfile

### Files you will need to add and configure
* config.xml
* Dockerfile
* wait_curl_healthy.sh
* wait_site_healthy.sh

#### User-provided values in commands
(Do we need this here for reference in step 4, or just in getting started? TODO: sync placeholder/examplee values and add to style guide)
* `<org>` is the DDEV provided value for your unique organization on DDEV-Live. Please see your "Welcome" email for details.
* `<site>` is what you want to call your project on DDEV-Live. It must consist of lower case alphanumeric characters or ''-'', start with an _alphabetic_ character, and end with an _alphanumeric_ character.
* `<github-org>` is your connected GitHub user or organization.
* `<repo-name>` is the connected repo you want to import.  

## Steps
### 1. Install the DDEV-Live CLI and jq
* Sign up for your DDEV-Live account
* Follow the [Getting Started Guide] to install the DDEV-Live GitHub App and CLI tool
* Install jq...

### 2. Configure your Jenkins credential manager to include your ddev-live-token
* steps

### 3. Configure a new Jenkins job credential binding to use the token
* steps

### 4. Add the following or similarly modified for your needs to a Execute Shell command
```
eval $(/usr/share/jenkins/ref/.linuxbrew/bin/brew shellenv)

SITENAME=staging-${GIT_BRANCH#*/}-$BUILD_NUMBER
ddev-live auth --token=$TOKEN --default-org=your-org

ddev-live create site drupal $SITENAME --github-repo=you/yourrepo --branch=$BRANCH_NAME
/usr/share/jenkins/ref/ddev-live-test/wait_site_healthy.sh $SITENAME

url=$(ddev-live describe site ${SITENAME} -o json | jq -r .previewUrl)
/usr/share/jenkins/ref/ddev-live-test/wait_curl_healthy.sh $url
```
### 5. Run the build and wait to see your new branch launched into DDEV-Live
(How to view the branch, what's available once it's built, such as rebuild?)

## Deleting the site when you are done
(How to delete a site from DDEV-Live, what this means for the site and your account)

### What next?
(What else might users ask at this point? what about permanent connections to jenkins? how to manage any changes throughout the components involved here? How this procss could apply with other services/tools?)

We’d love to help you be successful with DDEV-Live. Read the [FAQs](https://dash.ddev.com/docs/faqs/) and if you have any additional questions, email our [Support team](mailto:support@ddev.com).

What do you think? Send us your feedback about DDEV-Live using the [Feedback form](https://dash.ddev.com/feedback/).

Last updated Thu 18 February 2020 22:00 UTC
