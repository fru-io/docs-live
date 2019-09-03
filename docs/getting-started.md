﻿
# Get Started with DDEV-Live

This tutorial will step you through setting up DDEV-Live as an early access user - from initial account creation to publishing a website on a pre-production URL.

Steps in the process:
*   Install the DDEV-Live GitHub App
*   Install the DDEV-Live CLI
*   Authenticate
*   Add a site from your GitHub repo
*   Work with your site on DDEV-Live

**Estimated running time:** 20 minutes

## Prerequisites
*   A GitHub account
*   A GitHub repo containing a website to use for this tutorial

**Minimum system requirements**
- macOS Sierra
- Windows 10
- Linux

## Step 1 - Install the DDEV-Live GitHub app
Grant DDEV-Live access to your selected public repositories.
1. In your browser, navigate to [https://dash.ddev.com](https://dash.ddev.com).
2. If prompted, click the **Login With Github** button. The DDEV-Live UI displays.
3. In the **Important Links** section, click the **Install Github App** link. A GitHub configuration page displays.
4. Choose the personal account or organization where you want to install the app, then select the repositories you want DDEV-Live to access. *You or the organization must own the repos*.  

You can change these settings or add and remove repositories later in [Settings](https://dash.ddev.com/settings/).

## Step 2 - Install the DDEV-Live CLI
From the DDEV-Live dashboard, click the **Authenticate via CLI** link to download the DDEV-Live CLI for your operating system. This will download a file named ddev-live.zip.

#### Mac and Linux
1. Extract ddev-live.zip to a system $PATH location.
2. Open a Terminal window.
3. Type `ddev-live`.

#### Windows
1. In Windows Explorer, extract ddev-live.zip to your preferred location.
2. Run the Command Prompt as an administrator.
3. Type `cd <filepath>` and specify the location where you extracted ddev-live.exe.
4. Type `start ddev-live.exe`.

### Verify the installation
Type `ddev-live --version`. Successful installation will return the version of DDEV-Live, for example `ddev-live version v1dev20190823`.

Get help at any time with `ddev-live --help` to access more information.
## Step 3 - Authenticate
Authentication verifies your access to the DDEV-Live platform from your GitHub account.  
Type `ddev-live auth`. A browser window opens the DDEV-Live dashboard displaying a confirmation message.  
The CLI displays `Authentication complete!`

## Step 4 - Add a site from your GitHub repo
View site configuration flags with `ddev-live create drupal-site --help`.

1. Type `ddev-live create drupal-site <orgname>/<site> --github-repo <githubuser>/<reponame>`
* `orgname` is provided to you by DDEV in your golden ticket email.
* `site` is the name you want to call this site on DDEV-Live. It must consist of lower case alphanumeric characters or ''-'', start with an alphabetic character, and end with an alphanumeric character.|
* `githubuser` is your GitHub username or organization.
* `reponame` is the GitHub repo you want to connect to DDEV-Live. Default branch is master.|
The CLI will display feedback while your site is being initialized. It may take a few minutes for your site image to be built.  
When your site has been successfully created, the CLI displays `Created Drupal site: orgname/sitename`
2. Type `ddev-live get drupal-site <org>/<site>`  
The output will display several sections including status and health. These sections are not populated until the system reports on them, and the status messages change as the system provisions the site. It may take a some time before your site comes online.  

   The `status > webStatus > urls` section of the output will display the preview url for your site.  

   Include the output of this command when contacting support or sending feedback.

3. Navigate to your URL in a browser to confirm the site is displaying as expected.

## Step 5 - Working with your site on DDEV-Live
The DDEV-Live GitHub app watches the specified branch of your repo. When you push updates to the repo, DDEV-Live will redeploy the site.
* You can view a list of all the sites within a specified organization with `ddev-live get drupal-site --org <org>`
* View the state of a specific site with `ddev-live get drupal-site <org>/<site>`
* Use the `update` sub-command to modify a site. It provides most of the same configuration options as `create`.

### Next steps
Having problems? We’d love to help you be successful with DDEV-Live. Read the FAQs and if you're still having trouble, email our [Support team](mailto:support@drud.com).

Have we missed something? Send us your feedback about DDEV-Live using the [Feedback form](https://dash.ddev.com/feedback/).

Find out more about [DDEV-Local](https://www.drud.com/ddev-local/).