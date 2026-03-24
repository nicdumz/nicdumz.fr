---
tags: website tech webhost webfaction digitalocean
title: Webfaction was great, Digital Ocean seems better
---
# Webfaction

A few years ago, [Webfaction](https://webfaction.com) had been offering
something somewhat unique on the market. Hosting by developers, for developers,
for less than 10 USD a month.  For that price I could get SSH access to a shared
machine, deploy almost whatever I wanted and get it served by nginx, fast. This
was unique: at that time you either had to pay for pricier dedicated machines to
get SSH access, or downgrade to simple already-configured bricks that had very
little flexibility.

I particularly enjoyed the idea that I could push-over-SSH my content via my
version control system, and get it deployed via a hook.

Adopting Webfaction was a pretty great experience. Ticket support a few years
ago was responsive and helpful. A much better experience than what I had hoped
for.

# First they came for Let's Encrypt

And then Let's Encrypt happened. Free SSL certificates, I thought, great!

You see, I'm not great at it yet, but I do care about security, and in that
great idea. I jumped in, and moved this modest website to https. respect an
opportunity to participate and help spread SSL further seemed like a

This is where trouble started. Webfaction has no first-party support for SSL
certificates. You're not root, they do not offer direct access to nginx
configuration files. Which means that the only way to deploy a certificate is to
bother a human via a ticket. And since Let's Encrypt certificates expire every
responsive enough, and I had a script automating renewal and ticket email. But
90 days, it means bothering a human every ~2 months. It's fine, support is for a
coder, it does give you a bad conscience.

After a while (I suppose because support started receiving way too many
tickets), they implemented a way via their webadmin dashboard, to upload your
own certificates. So instead of my script bothering a human every 2 months, _I_
had to upload, by hand, via a web form, new certificates every 2 months. Not
really an improvement.

Webfaction always claimed that they had support coming for full Let's Encrypt
automation, but a year after the CA launch, nothing had landed.

# Then they came for gzip

[BREACH](http://www.breachattack.com) happened.

**_tl;dr:_** this is a compression side-channel attack. For HTTPS websites that
(a) do use compression, (b) include query data in the response, _and_ (c) serve
some kind of secret, bad guys might be able to guess what the secret is, by
repeatedly issuing requests, with various payloads, and observing how the
compressed (encrypted) response changes.

It's a serious class of attack. Any website serving secrets should care and
implement counter-measures. But if you're serious about security (and you should
be, if you're serving secrets over the web, right?), I do hope that way before
the publication of this class of attacks, you were already implementing some, if
not, all, of the following countermeasures:

  * Try really hard to avoid responses that do include query data, or responses
        that depend deterministically on user input. Because any website
        allowing such thing probably has way too many XSS vulnerabilities
        lurking. Hello `?username=alert(1);`.
  * Defend against XSRF issues, using CSRF tokens. For instance, on login pages,
        it's common for servers to return a single-use random CSRF token/nonce
        that the client must submit along their request, to prevent
        repeatability.
  * Randomize response length and content.
  * Rate-limiting requests.

All of those basic security measures prevent repeatability, and randomize
responses, which, de facto, prevent exploiting BREACH class of attacks.

Unfortunately, Webfaction had a very different response to BREACH, possibly
because they are not security experts. Or more likely because _customers that
were at-least-as-ignorant-of-security asked for that specific change:_ **they
disabled gzip compression for all their SSL websites.**

That's quite a pity. Sure, it's a safe, large hammer to use which appears to
immediately hide away all problems. But websites written with poor security
practices are still vulnerable websites, very likely prone to XSS or CSRF
attacks. Disabling gzip as a way to save them from BREACH is a poor decision,
not improving web security as a whole.

Webfaction is working on nginx config fragment support, to allow users to e.g.
enable compression per-website. But as of writing, there's no ETA for that
feature, and their support denied manual overrides to configs. No way to
re-enable gzip compression on your website.

# Time to speak out?

Do I really care that much about running a command and submitting a form every 2
months to renew a certificate? Do I even need compression that bad on this
static website? No, and no. Definitely not that critical.

But I reached a clear, fundamental disagreement with the way this host is
running their services. I care enough about SSL to require first-party,
automated support for certificate changes. And the way to secure websites, is
to, _duh_ actually fix the root cause, not disable the _perceived_ cause of a
vulnerability. Sending more bytes over the wire by disabling compression does
not protect websites from basic XSS/CSRF issues.

And why won't you just let me customize my nginx configuration, urgh.

# Digital Ocean

I moved out. Looking around, [Digital Ocean](https://www.digitalocean.com/)
seemed like a great option. 5 USD a month, and in a few seconds I could create
an instance running a clean OS. SH access, root. I get to run whatever I want.
_Switch gzip on, and off, and back on, as much as I want._

In a couple of hours, on a lazy Sunday, I migrated my data from Webfaction to
Digital Ocean. Configuring nginx and auto-renewal for Let's Encrypt was easier
than Hello World in Haskell, thanks to their community-maintained guides that
even sysadmin dummies like me can follow.

Looking back, it's even somewhat strange. How did I survive not having full
access to the machine before?

Hello **Digital Ocean**, and thanks: I, for one, embrace change.
