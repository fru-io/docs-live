# Administration
The DDEV-Live platform is designed to work with organizations. As an administrator, you can administer the users that have the ability to manage deployments for an organization. Administration is managed through the `ddev-live admin` set of commands.

## Listing users
Listing users for the organization you are authenticated against is accomplised with `ddev-live admin list`.

```
➜  ddev-live admin list
ADMINS
 NAME                TYPE
 ddev-demo@ddev.com  Admin
 bar@example.com     Admin

DEVELOPERS
 NAME             TYPE
 foo@example.com  Developer
```

## Adding users
You can add an administrator or a devloper to an organization. An administrator has the ability to add and remove other administrators in addition to managing deployments. A developer can use all functionality provided by the ddev-live client other than adding and removing administrators. The users email address should be the same as their GitHub email address.

Add a developer with `ddev-live admin add developer`.

```
➜  ddev-live admin add developer foo@example.com
Added developer foo@example.com to organization ddev-demo
```

Add a developer with `ddev-live admin add administrator`.

```
➜  ddev-live admin add admin bar@example.com
Added user bar@example.com to organization ddev-demo
```
## Deleting users

Delete a developer with `ddev-live admin delete developer`.

```
➜  ddev-live admin delete developer foo@example.com
Are you sure you want to delete developer ddev-demo/foo@example.com? (Y/n) y
Deleted developer foo@example.com from organization ddev-demo
```

Delete a developer with `ddev-live admin delete administrator`.

```
➜  ddev-live admin delete admin bar@example.com
Are you sure you want to delete admin ddev-demo/bar@example.com? (Y/n) y
Deleted admin bar@example.com from organization ddev-demo
```
