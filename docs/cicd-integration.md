# Tutorial: How to integrate Jenkins with DDEV-Live

This tutorial will illustrate how to perform a one-time setup to configure [Jenkins](https://jenkins.io/) in order to run regular automatic deployments into DDEV-Live. With this setup, you can connect an existing CI/CD process into DDEV-Live.

**Why you might need this:**
* You want to demo work to clients so they can approve things in a user acceptance testing (UAT) environment.
* You want to run functional tests.

This tutorial uses Drupal as an example. DDEV-Live supports many PHP applications and CMSs.

### Table of contents:
* [Prerequisites](#prerequisites)
* [Steps](#steps)
  * [Install the DDEV-Live CLI and jq into Jenkins](#1-install-the-ddev-live-cli-and-jq-into-jenkins)
  * [Add DDEV-Live monitoring scripts](#2-add-ddev-live-monitoring-scripts-to-your-build)
  * [Configure Jenkins credential manager](#3-configure-your-jenkins-credential-manager-with-your-ddev-live-token)
  * [Configure a new Jenkins job credential binding](#4-configure-a-new-jenkins-job-credential-binding-to-use-the-token)
  * [Create a built step to execute a shell script](#5-create-a-build-step-to-execute-a-shell-script)
  * [Run the build to deploy on DDEV-Live](#6-run-the-build-to-see-your-branch-launched-into-ddev-live)

### Prerequisites
* A fully configured account on [DDEV-Live](https://dash.ddev.com/)
* A Jenkins server and user with access and permissions to install new executables

### Files you will need to create or configure. Please see the [tutorial repository](https://github.com/drud/devrel/tree/master/jenkins-ddev-live) for example files.
* config.xml
* Jenkins Dockerfile
* wait_curl_healthy.sh
* wait_site_healthy.sh

## Steps
### 1. Install the DDEV-Live CLI and jq into Jenkins
* [Install the DDEV-Live CLI binary](https://dash.ddev.com/docs/getting-started/#install-the-ddev-live-cli) and [jq](https://stedolan.github.io/jq/) into Jenkins. Follow your usual procedure to install an executable. Our [example Jenkins Dockerfil is here](https://github.com/drud/devrel/blob/master/jenkins-ddev-live/Dockerfile).

### 2. Add DDEV-Live monitoring scripts to your build
* If you like, reference our [monitoring scripts](https://github.com/drud/devrel/tree/master/jenkins-ddev-live) (called in step 5 below) by adding the following to your Jenkins Dockerfile: 
`RUN git clone https://github.com/drud/devrel.git /usr/share/jenkins/ref/devrel`

### 3. Configure your Jenkins credential manager with your DDEV-Live Token
* In the DDEV-Live dash, under settings, click the copy icon at the right of the DDEV API Token field to copy your API token. 
* In the Jenkins dashboard under Jenkins > credentials > system > global credentials, click "add credentials." Select "Kind: secret text," "Scope: global," ID and description: “ddev-live-token,” for example. Paste the token into the secret field and click ok.

### 4. Configure a new Jenkins job credential binding to use the token
* Create a Jenkins job. Specify the GitHub project repository you want to work with for this tutorial under Source Code Management. If you have specific branches patterns you want to deploy, they should be configured here as well. For example, users of Git flow may want to only use feature/* branches.
* In the Build Environment panel, check "use secret text or files."
* In the Bindings panel, input variable “TOKEN”, select "specific credentials," and from the dropdown select the ddev-live-token credential you created in the previous step. 

### 5. Create a build step to execute a shell script
Add a build step of "execute shell" type. Below is an example script. This will likely need to be modified for your needs and use cases. Please refer [here](https://docs.ddev.com/getting-started/#add-a-site-from-your-connected-github-account) for details on the values of the `ddev-live create site` command.

```
eval $(/usr/share/jenkins/ref/.linuxbrew/bin/brew shellenv)

SITENAME=staging-${GIT_BRANCH#*/}-$BUILD_NUMBER
ddev-live auth --token=$TOKEN --default-org=your-org

ddev-live create site drupal $SITENAME --github-repo=you/your-repo --branch=${GIT_BRANCH#*/}
/usr/share/jenkins/ref/devrel/jenkins-ddev-live/wait_site_healthy.sh $SITENAME

url=$(ddev-live describe site ${SITENAME} -o json | jq -r .previewUrl)
/usr/share/jenkins/ref/devrel/jenkins-ddev-live/wait_curl_healthy.sh $url
```

**What is this doing?**
* The first line is directing Jenkins to the DDEV-Live binary. Here we are using Linuxbrew, but please install the DDEV-Live CLI binary as you see fit. 
* Next, we set up a SITENAME for DDEV-Live to use. We used "staging" for this tutorial. GIT_BRANCH will be your branch of choice, and BUILD_NUMBER for reference.
* Then we authenticate to DDEV-Live with the DDEV-Live API Token and setting the default org. This will be your DDEV-Live org name.
* Next we run the `ddev-live create site [type]`, using sitename from above, passing the github repo/branch you are working with for the tutorial. Modify this command according to your project's needs and CMS type. See `ddev-live create site --help` for more. 
* To see if the site is healthy and responsive we also give you [two scripts] for some monitoring. The first, `wait_site_healthy.sh` indicates when the site build is ready.
* Then use the `ddev-live describe` command to retrieve the preview URL when it exists, and pass the URL to `wait_curl_healthy.sh` to see if the site itself is healthy and returns a 200 repsonse. 

Save the build.

### 6. Run the build to see your branch launched into DDEV-Live
* Depending on how you've configured the Jenkins job, you can either wait for a branch to automatically build or you can click "build" manually now.
* Once the job is finished you should see the URL in the Console output of the build job.

## Deleting the site when you are done
Run `ddev-live delete site --help` for details on removing the build from DDEV-Live when you are finished. 

### What next?
We’d love to help you be successful with DDEV-Live. Read the [FAQs](https://dash.ddev.com/docs/faqs/) and if you have any additional questions, email our [Support team](mailto:support@ddev.com).

What do you think? Send us your feedback about DDEV-Live using the [Feedback form](https://dash.ddev.com/feedback/).
