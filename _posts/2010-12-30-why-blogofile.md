---
categories: Python
tags: blogofile website tech
title: Why Blogofile?
---

I recently started following Planet Python, and two posts by Mike Pirnat caught
my attention: I have to admit that if after the [first
post](http://mike.pirnat.com/2010/12/18/why-i-switched-to-blogofile) I did not
really try to learn too much about _Blogofile_, -- _&#8220;Yet another blog
engine&#8221;, he thought_ -- the [second
post](http://mike.pirnat.com/2010/12/21/how-i-deploy-my-blogofile-blog-on-webfaction/),
however, got me more interested: pushing a changeset to publish a new blog post,
_that_ looked exciting and I decided to learn more. That led to this blog.

I've been meaning to start a technical blog for _some_ time now, but I never
quite found a setup that would look appealing enough for me to _do_ it.
Blogofile got me started: let's find out why.

# Not a $wordpress

I guess that we all fall for free stuff or simplicity, but I'm still fairly
amazed by the number of _developer_ blogs that are hosted on Blogger or
Wordpress.com: my experiments with those services have not been so great, and
most of all, posting any kind of code seemed, at the time, _difficult_. But,
fair enough, setup is simple, and every penny you save is a penny you can spend
on troll food.

Using a blog platform was not an option for me: I want control over the content
I serve, and, ideally, a blog would only be a starting point.

But then, for those that _do_ spend time setting up a blog themselves, why would
you pick $wordpress? ($wordpress being a placeholder for any CMS serving content
dynamically). And this applies to me as well: why did I only consider _dynamic_
applications so far? Afterall, we're _geeks_, we're good coders! We write blogs
about code generation or compilation, Vim good practices, about details of load
balancing or cache invalidations, but we would not be able to come up with a few
lines of Python to generate HTML from a set of files formatted with ReST or
markdown? Ridiculous! No, the reality is that most of us have hard-coded the
`blog == dynamic` equivalence in our minds, and that it's hard to work around
it.

# Static goodness

What's dynamic in a blog? Article content, and comments. Do we need a database
for this? I say that comments can be handled by Disqus: you can argue with that,
I'm pretty sure that the FSF will someday pick up a fight against such
platforms, but the service is good enough for me, and I can risk losing this
data. For articles, you are in control, and from my viewpoint, we can afford to
regenerate pages each time we write a post.

_A blog is not this dynamic._

## Fireballs

We're getting fairly good at serving dynamic content. But still see a lot of
blogs that get [fireballed](http://daringfireball.net) or go down after a couple
hundred visits from a news aggregator: setting up a dynamic stack is quite easy;
mastering this _art_ is something else. Static content, on the other hand, is
easier: Nginx with proper Cache-Control is a good start.

## Security

My first hacks as a kid were done on PHP. I used PHP to send and receive Caesar
cyphered blobs to my friends; I was creating pages issuing 50 or so unindexed
requests to MySQL... _I was young_.

I then forgot about this sandbox. And when a nostalgic myself visited it years
later... My browser blocked my request, warning me that I was accessing a
malicious website. Hacked, of course :)

Static content means less things to sanitize, less permission issues. Happy me.

# User control

I'm the kind of person that has troubles writing a lot of text without my
favorite editor. Here, I wrote this post in Vim. I hit `:make`, the site is
regenerated. I have a &#8220;high-end&#8221; _SimpleHTTPServer_ running in
background, and I can preview everything offline, without a complex setup. I
also know that everything I view offline will be rendered as-is online: no
backend can play tricks on us.

I version everything in a [Mercurial
repository](https://bitbucket.org/nicdumz/website) (_edit from the future_:
moved to [Git and GitHub](https://github.com/nicdumz/nicdumz.fr)).

_&#8220;Backups&#8221;_ are achieved with a simple `hg clone`.

_&#8220;Deployments&#8221;_? `hg push` and a changegroup hook.

The core blogofile sources are a mere 1200 lines of Python.

The blog controller is an additional 500 lines.

That's really easy to analyze or patch, if you think that will ever need this.

_I have yet to find something I really dislike about blogofile._
