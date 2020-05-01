# Files

## Listing Files

`ddev-live list` can list different types of objects including [backups](https://docs.ddev.com/backups/), [databases](https://docs.ddev.com/databases/), [execs](https://docs.ddev.com/execs/), [files](https://docs.ddev.com/files/), [restores](https://docs.ddev.com/restores/), and [sites](https://docs.ddev.com/sites/).

The following command returns the file assets for the `mysite` [site](sites.md). In this example, there is one file named foo.jpg in your files directory.
```
➜  ddev-live list files mysite
FILE ASSETS
 PATH
 foo.jpg
```

## File Backups

File [backups](https://docs.ddev.com/backups) are created on demand and are not run on a schedule. Once a [backup](https://docs.ddev.com/backups) has been generated it can be [restored](https://docs.ddev.com/restores/) to a [site](https://docs.ddev.com/sites/).

`ddev-live backup` initiates a [job](https://docs.ddev.com/jobs) to create a [backup](https://docs.ddev.com/backups) of files. The output will contain a [job](jobs.md) name you can use to get more information.

```
➜  ddev-live backup files mysite
Initiated files backup: ddev-demo/mysite-d6m5h
```
`ddev-live describe` will give you the [job's](https://docs.ddev.com/jobs) status.
```
➜  ddev-live describe backup file ddev-demo/mysite-d6m5h
Name:      mysite-d6m5h
Org:       ddev-demo
Created:   29s ago (2020-04-23 17:33:41 -0400 EDT)
FileStore: mysite
Type:      export
Status:    Completed
```

## File Restores

`ddev-live restore files` initiates a [job](https://docs.ddev.com/jobs) to create a [backup](https://docs.ddev.com/backups) of files. The output will contain a [job](jobs.md) name you can use to get more information.

```
➜  ddev-live restore files mysite
Initiated files restore ddev-demo/mysite-wtm5z

```
`ddev-live describe` will give you the [job's](https://docs.ddev.com/jobs) status.
```
➜  ddev-live describe restore files ddev-demo/mysite-wtm5z
Name:      mysite-wtm5z
Org:       ddev-demo
Created:   20s ago (2020-04-23 18:39:38 -0400 EDT)
FileStore: mysite
Type:      import
Status:    Completed
```

## Pushing Files
`ddev-live push` can move [files](https://docs.ddev.com/files/) and [databases](https://docs.ddev.com/databases/) from your local environment to a [site](https://docs.ddev.com/sites/).

The following command pushes a file named foo.jpg from local to live. 
```
➜  ddev-live push files mysite foo.jpg
Uploaded: foo.jpg
      To: backups/on-demand/foo.jpg
```

## Pulling Files
`ddev-live pull` can move [files](https://docs.ddev.com/files/) and [databases](https://docs.ddev.com/databases/) from a [site](https://docs.ddev.com/sites/) to your local environment.

The following command downloads a file named `foo.jpg` from the `mysite` [site](sites.md) to the current local working directory.
```
➜  ddev-live pull files mysite foo.jpg
Asset(s) downloaded.
```
The following command downloads all files from the `mysite` site to the local `/home/ddev-demo/tmp` directory.

```
➜  ddev-live pull files mysite --dest ~/tmp
trimmed: foo.jpg
localDestPath /home/ddev-demo/tmp/foo.jpg
Downloaded foo.jpg (1/2)
trimmed: bar.jpg
localDestPath /home/ddev-demo/tmp/bar.jpg
Downloaded bar.jpg (2/2)
Asset(s) downloaded.
```