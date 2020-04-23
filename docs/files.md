# Files

## Listing Files

`ddev-live list` can list different types of objects including [backups](https://docs.ddev.com/backups/), [databases](https://docs.ddev.com/databases/), [execs](https://docs.ddev.com/execs/), [files](https://docs.ddev.com/files/), [restores](https://docs.ddev.com/restores/), and [sites](https://docs.ddev.com/sites/).

The following command returns the file assets for the `mysite` site. In this example, there is one file named foo.jpg in your files directory.
```
➜  ddev-live list files mysite
FILE ASSETS
 PATH
 foo.jpg
```

## Pushing Files
`ddev-live push` can move [files](https://docs.ddev.com/files/) and [databases](https://docs.ddev.com/databases/) from your local environment to a [site](https://docs.ddev.com/sites/).

The following comman pushes a file named foo.jpg from local to live. 
```
➜  ddev-live list files mysite
➜  ddev-live push files mysite foo.jpg
Uploaded: foo.jpg
      To: backups/on-demand/foo.jpg
```

## Pulling Files
`ddev-live pull` can move [files](https://docs.ddev.com/files/) and [databases](https://docs.ddev.com/databases/) from a [site](https://docs.ddev.com/sites/) to your local environment.

```
➜  ddev-live pull files mysite foo.jpg
Asset(s) downloaded.
```
It is possible to pull a full [files backup](https://docs.ddev.com/backups/).
