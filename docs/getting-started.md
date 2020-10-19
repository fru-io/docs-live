---
title: Get started with DDEV-Live
description: Set up your account and connect to the DDEV hosting platform
---
# Get started with DDEV-Live

This tutorial will step you through setting up DDEV-Live as a new user - from initial [account](account-types.md) [authentication](authentication.md) to installing the DDEV-Live CLI.

### You will need
- A [Git provider](https://docs.ddev.com/providers/)
- A [DDEV-Live](https://dash.ddev.com) account

## Install the DDEV-Live [GitHub](github.md) app
Grant DDEV-Live access to your selected repositories.
1. In your browser, navigate to [https://dash.ddev.com](https://dash.ddev.com).
2. Log in to your existing account or create a new account. The DDEV-Live UI displays.
3. From the left sidebar, select settings>integration. Under GitHub integration, click the **Install Github App** link. A [GitHub](github.md) configuration page displays (you may need to log in to GitHub).
4. Choose the personal or organization account where you want to install the app, then select the repositories you want DDEV-Live to access and click Install. *You or the organization must own the repositories*.

You can change these settings and add or remove repositories later in [settings/integration](https://dash.ddev.com/settings/integration).

## Install the DDEV-Live CLI
#### MacOS & Linux
Install the DDEV-Live CLI with [Homebrew](https://brew.sh):

```
$ brew tap drud/ddev-live
$ brew install drud/ddev-live/ddev-live
```

#### Alternative macOS and Linux install
The below links will download a file named ddev-live.zip

[Download the DDEV-Live CLI for macOS (darwin)](https://downloads.ddev.com/ddev-live-cli/latest/darwin/ddev-live.zip).

[Download the DDEV-Live CLI for Linux](https://downloads.ddev.com/ddev-live-cli/latest/linux/ddev-live.zip).

1. Extract ddev-live.zip. For example: `unzip ddev-live.zip`.
2. Move the resulting ddev-live binary to a directory that is in your $PATH variable. For example: `mv ~/Downloads/ddev-live /usr/local/bin`. You may need to add to your `$PATH` in your .bash_profile or equivalent.

#### Windows
This will download a file named ddev-live.zip.
[Download the DDEV-Live CLI for Windows](https://downloads.ddev.com/ddev-live-cli/latest/windows/ddev-live.zip).

1. Extract ddev-live.zip to a directory that is in your %PATH% variable. For example, extract to: `C:\Program Files`. You may need to edit and add to the Path environment variable in Advanced System Properties.

### Verify installation and authenticate
[Authentication](authentication.md) connects the DDEV-Live platform to your install of the DDEV-Live CLI.

1. In your terminal window, type `ddev-live`. Successful installation will return usage information. Run `ddev-live [command] -h` at any time for details on commands.
2. Run `ddev-live auth`. A browser window opens the DDEV-Live dashboard displaying a confirmation message.
  The CLI displays `Authentication complete!`. If you are primarily working with one [organization](organizations.md) you may want to run ddev-live auth --default-org <org> to refer to [sites](sites.md) only using <site> instead of <org>/<site> and eliminate needing to use the --org <org> flag for subsequent commands.

## Example
Installing ddev-live with Homebrew:<script id="asciicast-358907" src="https://asciinema.org/a/358907.js" async></script>

