---
title: Stop teaching Git to the new generation (move to Jujutsu instead)
tags: tech
---
Most content in my tech bubble these days is about how AI is shifting software development. The "new
age", the major "new way" to build. But I believe a different and quieter shift has happened and
that is well worth writing about. One that has made my daily life better for the past months.

I've come to a conclusion that might sound like heresy: **Git's time as our primary interface is
nearing its end.** We are at a stage where new projects and new learning material should focus
exclusively on the next tool: [Jujutsu](https://github.com/jj-vcs/jj), aka `jj`.

My pitch for is this: Git won the masses due its network effect, and the vast
majority of projects rely on it for day-to-day operations. **Let's learn from that
journey, keep the good parts (efficient storage model and broad adoption), but switch to a
different user frontend that focuses on making our lives easier and less error-prone**.

## My VCS experience

I am a bit of a
version control system nerd. I'm old enough that my first projects used
[CVS](https://en.wikipedia.org/wiki/Concurrent_Versions_System). I saw the gradual shift to
[SVN](https://en.wikipedia.org/wiki/Apache_Subversion). University was a chaotic mix 
of SVN, CVS, and a newcomer named Git.

While looking for Google Summer of Code project for my second to last year, I stumbled upon a
friendly community, the [Mercurial](https://en.wikipedia.org/wiki/Mercurial) folks, and stuck around
for a while. The tool felt intuitive, foolproof, and honestly -- kind. I spent that Summer hunting
for bugs in the Mercurial codebase, debugging `inotify` interactions, hoping to make the
experience smoother for everyone.

My first job was at a shop working with Subversion. For my second job, I interviewed at Atlassian,
because they were a fierce supporter of the Mercurial ecosystem. I ended up joining a Mercurial
colleague at Google instead. And I've beent there ever since. (Funny how small VCS choices
impacted so much of my life's trajectory).

At Google, I ran into Perforce, then
[Piper](https://en.wikipedia.org/wiki/Piper_(source_control_system)). There's `fig`, a Mercurial
based CLI for some limited DVCS like operations. And recently, I've switched
exclusively to `jj`, for all of my needs, at work and for personal projects.

## Can a VCS be intuitive?

The Mercurial vision was that the Version Control experience should be intuitive and foolproof. A
tool which works and does no harm. As a 20-something software developer, this felt like a very
appealing philosophy.

For a variety of reasons, Git won over the VCS market, and is now a quasi monopoly. Like all of you,
I have to use Git often. Like most of you, I acknowledge the limitations of Mercurial and Python
(speed, mostly). And yet this [Hacker News comment](https://news.ycombinator.com/item?id=30313422)
echoes still echoes well how I feel (emphasis mine):

> I now use git but always liked fig/mercurial better and **wish it had won the version control
> space**. When people ask me what I liked about mercurial, I tell them that I could rebase, cherry
> pick, branch and do whatever else I could think of without needing to Google it or going to
> stackoverflow, it was just intuitive. I can’t seem to grok git that way. Any time I need to do
> anything more than branch, stage, commit, push, I have to \[look it up\].

I've lost weeks of my life looking up how to do "simple" things in Git, or trying to recover data
after passing the wrong argument to `git reset` (soft reset? hard reset? _Urgh_.). My biggest gripe
is that the tool is does not attempt to curb its own power: it hands you a loaded footgun and wishes
you luck.

I honestly think we developers suffer from a mild case of Stockholm Syndrome. We’ve convinced
ourselves that Git is a "hackerz l33t tool" and find it hard to admit that it has glaring UX
pitfalls.

When I think of the next generation of software developers, I know that they will need high
proficiency with a DVCS, and I know that they'll be exposed to very many Git repositories. That being
said, these questions make me uncomfortable:

> Do I want to expose a beginner to the sharp edges of `git`? Am I encouraging negative systemic
> patterns without self-reflection? Could we break free from this historical habit?

To me, it's clear: if we can save a generation from the git pains and only keep the DVCS "goodness",
we should do it.

## Why the jujutsu approach works

The memes from [this blog](https://blog.otterstack.com/posts/202510-jujutsu/) are pretty good, you
might want to skim through it.

Technology switches are notoriously hard. It would be nearly impossible to shift thousands of
companies and developers away from their Git repositories and ecosystems (GitHub, GitLab, etc)
overnight.

This is exactly why I believe `jj` has a real shot at _taking over the world_: it doesn't ask you to
leave your familiar Git ecosystem; it just gives you a better way to interact with it.

I used to have to use several tools depending on the context (`git`, Mercurial/Fig or Piper). But
for the last five months, I've been exclusively using Jujutsu for everything, work, Github -- all.
Using a single tool for all my development worklows has been, frnakly, quite liberating.

Overall, `jj` feels like it finally offers the best of all worlds. Responsiveness and performance
are excellent, comparable to Git, which addresses the old speed complaints people had about
Mercurial. Unlike Git, though, the learning curve was refreshingly brief: I feel fully onboarded,
and more importantly, I never like I'm about to accidentally "nuke" my repository or working copy.

I could gradually move my Git-based workflows without really thinking about it: the scripts which
use `git` as a tool or as a library (e.g. Github actions) didn't need any changes. I just had to
pick a good VSCode extension for JJ and could get started without much friction (I like
[jj-view](https://github.com/brychanrobot/jj-view)).

One of my older repositories was using Git submodules instead of the modern npm-like way of pulling in
dependencies. Submodules are famously not supported in `jj`. Git fans often point this out as a
dealbreaker, but honestly? I'm thankful for it. It forced me to migrate to a
modern approach, which now allows for automatic upgrades of dependencies via Github actions.
Sometimes, losing a feature is actual a blessing in disguise.

## Wrapping up: my recommendations

 * Do give `jj` a try. It's free, and quite addictive: you probably won't look back.
 * I believe that the `git` CLI era is over. Jujutsu is production ready for over 90% of use cases.
 * We should be teaching `jj` to the next generation of developers. Schools and company onboarding
   materials should shift their focus to recommend Jujutsu. Let's stop exposing new developers to
   Git's sharp edges.
 * I strongly think that new companies need to set up with `jj` in mind from day one.
 * Existing companies should encourage a gradual migration to `jj` for improved productivity.

_This post was authored with `jj`'s help, and Gemini helped me fix about ~10% of its content._
