
# Get Started with DDEV-Live

This tutorial will step you through setting up DDEV-Live as an early access user - from initial account creation to publishing a website on a pre-production URL.

Steps in the process:
*   Install the DDEV-Live GitHub App
*   Install the DDEV-Live CLI
*   Authenticate
*   Add a site from your GitHub repo
*   View and configure site settings

**Estimated running time:** 20 minutes

## Prerequisites
*   A GitHub account
*   A GitHub repo containing a test website to use for this tutorial
#### Minimum system requirements
*    [Docker](https://www.docker.com/community-edition)  version 18.06 or higher
*    docker-compose 1.21.0 or higher
- Operating system:
-- macOS Sierra 10.12 or higher
-- Linux distribution that can run Docker-ce
-- Windows 10 Pro or Enterprise with  [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
--   Windows 10 Home (or other Windows version) with  [Docker Toolbox](https://docs.docker.com/toolbox/toolbox_install_windows/) 

## Step 1 - Install the DDEV-Live GitHub app

Grant DDEV-Live access to your selected public repositories.
1. In your browser, navigate to [https://dash.ddev.com](https://dash.ddev.com).
2. Click the link to install the DDEV-Live GitHub app. This will take you to a configuration page in GitHub.
3. Choose the personal account or organization where you want to install the app, then select which public repositories you want DDEV-Live to access. You will be redirected back to the DDEV-Live UI and the checkbox for the GitHub app will be automatically checked.

🛈 You can change these settings or update your Access Token later in the [DDEV-Live dashboard](https://dash.ddev.com/settings/).



## Step 2 - Install the DDEV-Live CLI

From the DDEV-Live dashboard, click the **Authenticate via CLI** link to download the DDEV-Live CLI for your operating system. This will download a file named ddev-live.zip.


#### Mac

1. In Finder, extract ddev-live.zip to your preferred location, for example, /usr/local/bin.
2. Open a Terminal window.
3. Type `cd ~/<filepath> `and specify the location where you extracted ddev-live.exe.
4. Type `open -a ddev-live`.

#### Linux

1. In File Manager, extract ddev-live.zip to your preferred location, for example, usr/bin (this may require sudo).
2. Open a Terminal window.
3. Type `cd <filepath>` and specify the location where you extracted ddev-live.exe.
4. Type `./ddev-live`.


#### Windows
1. In Windows Explorer, extract ddev-live.zip to your preferred location.
2. Run the Command Prompt as an administrator.
3. Type `cd <filepath>` and specify the location where you extracted ddev-live.exe.
4. Type `start ddev-live.exe`.

### Verify the installation

Type `ddev-live`. Successful installation will return information on usage and available commands, beginning with the text:  `A command-line client for the DDEV Live hosting platform.`

🛈 You can type `ddev-live --help` at any time for more information. 

## Step 3 - Authenticate

Authentication verifies your access to the DDEV-Live platform from your GitHub account. This creates local files which store tokens to access the system. 
1. Type `ddev-live auth`. 
A browser window opens the DDEV-Live dashboard displaying a confirmation message. The CLI displays `Authentication complete!`

## Step 4 - Add a site from your GitHub repo


1. Type `ddev-live create drupal-site <orgname>/<site> --github-repo [githubuser]/[reponame]` 

|Command|Description |
|:--|:--|
|orgname|provided by DDEV in your golden ticket email.|
|site|The name you want to call this site on DDEV-Live. Must consist of lower case alphanumeric characters or ''-'', start with an alphabetic character, and end with an alphanumeric character.|
|githubuser|Your GitHub username.|
|reponame|The public GitHub repo you want to connect to DDEV-Live. Default branch is master.|
|n|Drupal version number (for example, 7 or 8)|
|[--run-composer-install]|Run Composer on site import. If your project does not need to run Compose, exclude this flag.|


2. The CLI will display feedback while your site is initialized. When your site has been successfully created, the CLI displays `Created Drupal site: sitename`
3. Type `ddev-live get drupal-site <org>/<site>` 
The `status > webStatus > urls` section of the output will display the preview url for your site. 
 
   The output of `ddev-live get drupal-site <org>/<site>` will also show the current health of your project, and is helpful to include when contacting support or sending feedback.


4. Navigate to your URL in a browser to confirm your site is displaying as expected. 

🛈 Type `ddev-live create drupal-site --help` for additional flags that can be used to set configuration like drupal version, webroot-path, and composer arguments.


## Step 5 - Working with your site on DDEV-Live

The DDEV-Live GitHub app watches the specified branch of your repo. When you push updates to the repo, DDEV-Live will redeploy the site.

Here are a few commonly used commands:

|| |
|--|--|
| View a list of all sites within the specified organization. |`ddev-live get drupal-site --org <org>`  |	
|  View the state of a specific site.  | `ddev-live get drupal-site <org>/<site>` |



### Next steps

Having problems? We’d love to help you be successful with DDEV-Live. Email our [Support team](mailto:support@drud.com).

Have we missed something? Send us your feedback about DDEV-Live using the [Feedback form](https://dash.ddev.com/feedback/).

Find out more about [DDEV-Local](https://www.drud.com/ddev-local/). 


