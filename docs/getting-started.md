# Get started with DDEV-Live

This tutorial will step you through setting up DDEV-Live as a new user - from initial account authentication to installing the DDEV-Live CLI.

### You will need
* GitHub account

## Install the DDEV-Live GitHub app
Grant DDEV-Live access to your selected repositories.
1. In your browser, navigate to [https://dash.ddev.com](https://dash.ddev.com).
2. If prompted, click the **Login With Github** button and log in to GitHub if needed. The DDEV-Live UI displays. 
3. In the **Important Links** section on the dash homepage, click the **Install Github App** link. A GitHub configuration page displays.
4. Choose the personal or organization account where you want to install the app, then select the repositories you want DDEV-Live to access and click Install. *You or the organization must own the repositories*.

You can change these settings and add or remove repositories later in [Settings](https://dash.ddev.com/settings/).

## Install the DDEV-Live CLI
You can install the DDEV-Live CLI with [Homebrew](https://brew.sh)

```
$ brew tap drud/ddev-live
$ brew install drud/ddev-live/ddev-live
```

#### Alternative Mac and Linux install
From the [DDEV-Live dashboard](https://dash.ddev.com), click the **Authenticate via CLI** link for your operating system to download the DDEV-Live CLI. This will download a file named ddev-live.zip.

1. Extract ddev-live.zip. For example: `unzip ddev-live.zip`.
2. Move the resulting ddev-live binary to a directory that is in your $PATH variable. For example:`mv ~/Downloads/ddev-live /usr/local/bin`. You may need to add to your $PATH in your .bash_profile or equivalent.

#### Windows
From the [DDEV-Live dashboard](https://dash.ddev.com), click the **Authenticate via CLI** link for Windows to download the DDEV-Live CLI. This will download a file named ddev-live.zip.

1. Extract ddev-live.zip to a directory that is in your %PATH% variable. For example, extract to: `C:\Program Files`. You may need to edit and add to the Path environment variable in Advanced System Properties.

### Verify installation and authenticate
Authentication connects the DDEV-Live platform to the DDEV-Live CLI.
1. In your terminal window, type `ddev-live`. Successful installation will return usage information. Run `ddev-live [command] -h` at any time for details on commands.
2. Run `ddev-live auth`. A browser window opens the DDEV-Live dashboard displaying a confirmation message.
  The CLI displays `Authentication complete!`. If you are primarily working with one organization you may want to run ddev-live auth --default-org <org> to refer to sites only using <site> instead of <org>/<site> and eliminate needing to use the --org <org> flag for subsequent commands.
