---
title: GCP then Github Pages
tags: website tech
---

Earlier this year I spent a fair amount of time trying to setup a Kubernetes
cluster on GCP, for fun.

I wanted to learn and undersand better Docker / Kubernetes. I also thought it
could be a good idea to serve a private subdomain behind
[IAP](https://cloud.google.com/iap), restricting access to only people meant to
access that content.

It definitely kept me busy for a while, and I learned a lot. I feel a little
less rusty in terms of modern Webdev. As a result, for a few months `nicdumz.fr`
had been serving from GCP, instead of Digital Ocean. GKE for a static website is
absolutely overkill, but then again I had another actual private website around
on that cluster, so I thought why not.

What I had not anticipated was the high price of the setup, which ended up
costing a little over $100 USD a month, way more than what I want to spent for
an educational only, mostly abandoned few websites.

So I took a step back. Shut down all of those fancy things. Instead, as
http://github.io/ pages is perfectly able to serve static / generated pages for
free, I've moved there. Had to migrate from Blogofile to Jekyll, but that only
took a rainy morning. Bye bye hosting costs :-)
