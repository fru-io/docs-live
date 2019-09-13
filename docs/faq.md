# Frequently asked questions
## General questions
### How long is the Golden ticket period?
21 days. We’ll remind you before time runs out.
### What kind of site should I use during the Golden Ticket period?
You should use a test site. Your site will be live on our domain, which is a publicly accessible URL. During the Golden Ticket period, we recommend you use a test site that doesn’t contain sensitive information.
### What kind of file/tarball do I need to prepare?
You will need an export in archive format of your database, and unarchived file directories to upload for your project, if applicable.
### How can I create a site?
The [Getting Started guide](https://dash.ddev.com/docs/getting-started/) runs through a tutorial on how to create a Drupal site.
### How do I work with Composer on the platform?
Composer does not run on a Drupal site by default. To run `composer install` on site creation, include the flag `--run-composer-install`. Additionally if arguments are required for Composer, pass them in using the `--composer-args <args>` flag. 
### What does it mean when a site is ready?
After the `create` command, a site is ready when the background processes (like database and file system provisioning) have completed successfully, and DDEV-Live is able to successfully serve the site. This can take several minutes.
We’re working on improving the output of the `create` command. Please let us know if you have [feedback](https://dash.ddev.com/feedback/) to share.
### How do I know when a site is ready?
Use the `get` command to see if a site is ready. For example, `ddev-live get drupal-site <org>/<site>`. The output will display several sections regarding status and health. These sections are not populated until the system reports on them, and the status messages change as the system provisions the site.
It may take some time before your site comes online.  
When your site is ready, the `get` command output includes the preview URL for your site so you can confirm that it is displaying as expected.
### Is there a site creation timeout?
Yes, the CLI will hang after 60 seconds by default, while waiting for the site creation to complete. This means the command is still executing on the platform and you should wait a while then check the status again. Use  `--timeout <int>` to set a different timeout interval.
### What happens when I push to a GitHub repo connected to DDEV-Live?
When you push to a connected GitHub repo, DDEV-Live automatically updates your site.
### How can I make a backup of my database or files?
DDEV-Live includes commands to create a `backup` and `restore` for either a site’s `db` or `files`. You need to specify the organization and site name. For example, `ddev-live create db-backup org1/demo2` and `ddev-live create files-restore org2/demo3`.
### Do I always have to specify the organization?
No, you can set a default organization with `ddev-live config default-org <org>`.  
When a default organization is set, you can:
- Reference a resource by name alone: `ddev-live get site my-site`
- List resources without providing the `--org` flag: `ddev-live get sites`.

Clear a set default with `ddev-live config default-org --reset`.

### When will DDEV-Live be ready for production sites?
Depending on your requirements, we’re ready for you now. Get in touch with us at support@ddev.com to discuss the opportunity.
### What kind of uptime can I expect?
During the Golden Ticket period, you can expect sites to be generally available. View the uptime and status of the DDEV-Live hosting platform on our [status page](https://ddevgoldentickets.statuspage.io/#). We’re not quite ready yet to advertise an SLA, though we do expect it to be competitive.
### Will you support other CMS solutions or other Git providers?
The Golden Ticket period supports Drupal sites. DDEV-Live will generally support other PHP applications and CMSs such as TYPO3. Support for WordPress, Bitbucket and GitLab is planned for the future.
## Privacy and security
### What is the data privacy policy?
DDEV-Live is covered by the DDEV [Privacy Policy](https://www.ddev.com/privacy-policy/). We will be collecting usage information from the platform during the Golden Ticket period. So the more things you try, the better.
### Is my site publicly accessible?
Your site will be live on our domain, which is a publicly accessible URL. During the Golden Ticket period, we recommend you use a test site that doesn’t contain sensitive information.
### How long will you store my data?
All data will be deleted after the Golden Ticket period. Assume all data can be deleted at any time.
## Support
We want to help you be successful with DDEV-Live. If you have a question that is not answered here, please email our [Support](mailto:support@ddev.com) team.

You can view the [uptime and status](https://ddevgoldentickets.statuspage.io/#) of the DDEV-Live hosting platform, and subscribe to updates.

During the Golden Ticket period, we want to hear from you. Please send us your feedback using the [Feedback form](https://dash.ddev.com/feedback/). We aim to improve  DDEV-Live to meet your needs, so we encourage you to really exercise the platform and try things out.
