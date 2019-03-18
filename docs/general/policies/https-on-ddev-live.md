---
title: HTTPS on DDEV-Live
description:
freshdesk:
  title: HTTPS on DDEV-Live # title	string	Title of the solution article
  id: 36000069971 # id	number	Unique ID of the solution article
  description: # description	string	Description of the solution article
  description_text: # description_text	string	Description of the solution article in plain text
  type: 1 # type	number	The type of the solution article
  category_id: 36000020154 # category_id	number	ID of the category to which the solution article belongs
  folder_id: 36000030822 # folder_id	number	ID of the folder to which the solution article belongs
  agent_id: 36000369419 # agent_id	number	ID of the agent who created the solution article
  status: 2 # status	number	Status of the solution article
  tags: [] # tags	array of strings	Tags that have been associated with the solution article
---

DDEV-Live provides free TLS certificates for every site launched on the platform through [Let's Encrypt]("https://letsencrypt.org"). Unless you specifically request that a given site _not_ be served over HTTPS, we will enable HTTPS and provision a certificate automatically. Please note: at this time we do _not_ serve a redirect from HTTP to HTTPS, so your application code will need to handle that.

In order to provision a certificate for a particular hostname, DNS for that hostname must be pointed at the ddev-live platform.

## Limitations

The main limitations to be aware of are detailed on the [Let's Encrypt Rate Limits]("https://letsencrypt.org/docs/rate-limits/") page. These rate limits affect how quickly large numbers of sites can be moved onto the platform.

The amount of time that it takes from the point where DNS has been switched to the point where a certificate has been issued can vary from 30 seconds up to 30 minutes, depending on how many others sites are requesting certificates at that exact moment in time. This is a fully automated process that will begin as soon as DNS has propagated. In the interim, the site will be served with a dummy certificate that will cause an error to be shown in most browsers if a user attempts to access the site via HTTPS.

## Wildcard certificates

At present, we do not have support for wildcard certificates.

---

## Non-Let's Encrypt certificates

For clients with a dedicated Technical Account Manager, we currently offer limited support for bringing your own certificate to the DDEV-Live platform. If this is a requirement for your deployment, please reach out to your TAM for more details.

As a general guideline, we require a minimum term of three years. Additionally, we do not monitor or renew certificates that you have provided to us, so we ask that you notify us 90 days before the certificate expires and provide us with an updated certificate as soon as you're able to get one from your certificate issuer.
