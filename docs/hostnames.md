---
title: Hostnames
description: Add, describe, and delete hostnames and configure DNS for DDEV
---
# Hostnames

Each new [site](sites.md) you launch on DDEV-Live is given a default url. The url follows the format of `https://preview-myorg-mysite.sites.ddev.live` where myorg and mysite are replaced with your [organization](organizations.md) name and the site name you used when creating the [site](sites.md). The preview url is always visible in [SITE INFO](https://docs.ddev.com/sites/) from `ddev-live describe site` and as the [PREVIEWURL](https://docs.ddev.com/sites/) from `ddev-live list sites`.

You can assign additional hostnames to a [site](sites.md) with the `ddev-live config hostname` command. Once the DNS resolves for new hostnames we will make a request to Let's Encrypt for a [ssl](tls.md) certificate on your behalf. Host information is stored in HOSTS from `ddev-describe site`.

## Add a Hostname
The following command adds a hostname of `example.com` to a site named `mysite` in the `ddev-demo` [organization](organizations.md).

```
$ ddev-live config hostname add mysite example.com
Added hostname example.com to site ddev-demo/mysite
```

## Describe a Hostname
You can use `ddev-live describe site` to view the hostname details for a given [site](sites.md). The following examples use a [site](sites.md) named `mysite` which has been configured to recognize the `example.com` domain.

```
$ ddev-live describe site mysite
```
Look for the HOSTNAMES section in the output.
```
HOSTNAMES
 - Hostname:                  example.com
   Redirect:
   TLSDisable:                false
   TLSDisableRedirect:        false
   RecommendedDNSRecordType:
   RecommendedDNSRecordValue:
```
Read the [TLS documentation](https://docs.ddev.com/sites/) for further details on configuring TLSDisable and TLSDisableRedirect.

## Updating DNS
In order for your hostname to resolve you will need to update an A record for apex domains and a CNAME for sub domains like www. Your A records should use the ip address `34.67.213.20` if a CNAME is not available. All other records should use a CNAME of `ingress1.ddev.live`. Please consult your DNS providers documentation for additional instructions.

## Delete a Hostname
The following command deletes a hostname of `example.com` from a site named `mysite` in the `ddev-demo` [organization](organizations.md).

```
$ ddev-live config hostname delete mysite example.com
Deleted hostname example.com from site ddev-demo/mysite
```
