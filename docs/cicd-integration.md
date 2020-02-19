# How to integrate Jenkins with DDEV-Live

This ~guide~ recipe(?) will show you how to deploy a build from an existing Jenkins server to DDEV-Live.

**Why you might need this:**
* You want to demo work to clients so they can approve things in a user acceptance testing (UAT) environment.
* You want to run functional tests.

This how-to guide uses Drupal as an example. DDEV-Live supports many PHP applications and CMSs.

### Table of contents:
* [Prerequisites](#prerequisites)
* [Steps](#steps)
  * [Install the DDEV-Live CLI and jq](#1-install-the-ddev-live-cli-and-jq)
  * [Configure Jenkins credential manager] (Will fill these in once headings agreed upon)
  * [Configure a new Jenkins job credential binding]
  * [Add a custom exec shell command]
  * [Run the build to deploy on DDEV-Live]

### Prerequisites
* An account on [DDEV-Live](https://dash.ddev.com/) (?)
* A Jenkins server with access to install tools onto it, or you can use the neighboring Dockerfile

### Files you will need to create and configure
* config.xml
* Dockerfile
* wait_curl_healthy.sh
* wait_site_healthy.sh

#### User-provided values in commands
(Do we need this here for reference in step 4, or just in getting started? Should we have tooltips for some ddev unique terms like org that hit the (to be added) Glossary? TODO: normalize placeholder/example values in this doc and add to style guide)
* `<org>` is the name you input for your unique organization on DDEV-Live.
* `<site>` is what you want to call your project on DDEV-Live. It must consist of lower case alphanumeric characters or ''-'', start with an _alphabetic_ character, and end with an _alphanumeric_ character.
* `<github-org>` is your connected GitHub user or organization.
* `<repo-name>` is the connected repo you want to import.  

## Steps
### 1. Install the DDEV-Live CLI and jq
* Sign up for your DDEV-Live account
* Follow the [Getting Started Guide] to install the DDEV-Live GitHub App and CLI tool if you haven't already.

### 2. Modify your Jenkins Dockerfile
* Add [jq](https://stedolan.github.io/jq/)(?) to the installs in your Jenkins Dockerfile
* Add `RUN git clone https://github.com/ghuser/projectname.git /usr/share/jenkins/ref/projectname`

### 3. Configure your Jenkins credential manager to include your ddev-live-token
* In the DDEV-Live dash, under settings, use the (what is this called? copy/paste icon) to copy your API token. 
* In the Jenkins dashboard- add ddev-live token to global credentials. Add secret text, ID “ddev-live-token” etc. Paste in the token and save.

### 4. Configure a new Jenkins job credential binding to use the token
* Add the token into the build environment by selecting "use secret text or files" in the bindings panel, input variable “TOKEN”, "specific credentials" select the ddev-live-token you input in the previous step from the dropdown. 

### 5. Add the following or similarly modified for your needs to an Execute Shell command
In the Build execute shell area we add the following. This is a build step, of "execute shell" type.

```
eval $(/usr/share/jenkins/ref/.linuxbrew/bin/brew shellenv)

SITENAME=staging-${GIT_BRANCH#*/}-$BUILD_NUMBER
ddev-live auth --token=$TOKEN --default-org=your-org

ddev-live create site drupal $SITENAME --github-repo=you/yourrepo --branch=$BRANCH_NAME
/usr/share/jenkins/ref/ddev-live-test/wait_site_healthy.sh $SITENAME

url=$(ddev-live describe site ${SITENAME} -o json | jq -r .previewUrl)
/usr/share/jenkins/ref/ddev-live-test/wait_curl_healthy.sh $url
```

**What is this doing?**
(and why does this section refuse to do line breaks)
* First build step is configuring brew, to get ddev-live install from homebrew. Have to tell it where to find the bin for ddev-live, however you want to do this.
* Next build step: set up a $SITENAME, = “whatever”
* Git branch just whatever branch you have. Build number if you want, or just use the branch.
* Next, auth to ddev live with the token with default org (your org)
* Next create site command from ddev-live, uses sitename from above, passing the github repo/branch
* To see if the site is healthy and responsive we also give you two scripts for some quicky monitoring (how do we want to include those for this guide? can we link to them somewhere, like an open repo on our github?)
* Then "url= (etc)" to test if preview url exists, passing that to curl healthy to see if site healthy.

Save the build.

### 6. Run the build and wait to see your new branch launched into DDEV-Live
* Push your project up to github.
* Trigger or manually run the build from Jenkins. 
* The script will configure the shell for homebrew, sitename config, ddev-live auth, site create. Get a spinny in the jenkins console output  as site launches. 
* When the site is ready ... (How to view the site, what's available once it's built, such as rebuild?)

## Deleting the site when you are done
(How to delete a site from DDEV-Live, what this means for the site and your account)

### What next?
(What else might users ask at this point? what about permanent connections to jenkins? how to manage any changes throughout the components involved here? How this procss could apply with other services/tools?)

We’d love to help you be successful with DDEV-Live. Read the [FAQs](https://dash.ddev.com/docs/faqs/) and if you have any additional questions, email our [Support team](mailto:support@ddev.com).

What do you think? Send us your feedback about DDEV-Live using the [Feedback form](https://dash.ddev.com/feedback/).

Last updated 19 February 2020 04:30 UTC
