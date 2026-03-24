---
title: "AI: The confidence trap"
tags: ai
---

I read an opinion piece recently (fine, it was a TikTok) about Nasdaq potentially changing rules
ahead of the SpaceX IPO. The claim was that this would cause a "force buy" for QQQ index managers –
effectively forcing passive investors to buy in at any price. This would likely allow non-index
holders to predict index manager buys, while inflating the exit value for SpaceX employees and VCs.

I decided to do what I suspect most people will do in 2026 – I asked an AI agent to stress-test the
idea. What followed was a fascinating look at how AI logic can slowly come apart at the seams during
a long conversation.

## The Competent Start

At first, we had a very solid discussion. The model confirmed the possible index rush and explained
the underlying mechanics clearly. It seemed well-sourced, and I couldn't spot any immediate errors.
Frankly, that initial chat helped me deepen my understanding of the controversy and was very
valuable.

## The "Big Number" Trap

The shift started when I fed it a simulated portfolio. I asked the model to simulate several
different market conditions over 15 years. Across various scenarios, it became clear that some
parameters had a minimal impact – a single-digit percentage.

But then it got stuck. The model couldn't get past the fact that 1% of a $5M portfolio is $50,000.
It anchored so hard on 150k changes that it started to lose it. It started insisting on various
urgent rebalances to control most parameters, because the numbers *felt* big

## The Decay of Precision

The longer the conversation went, the less precise it became. I don't think these models are really
evaluated or great for lengthy interactions yet. It started getting stuck on earlier bits of the
chat and losing its ability to make sense of new information.

By the time we discussed currency risks (CHF/USD), it had completely lost the plot. To "prove" that
currency hedging was cheap, it hallucinated an ISIN for a "CHF-hedged S&P 500" ETF. (In reality,
the ISIN pointed to an unrelated – but cheap – UBS green energy fund).

The model then used that green fund’s ultra-low TER (0.06%) as the "cost" of currency hedging, while
ignoring both that a real hedged ETFs have much higher TER – and that TER costs are anyhow dwarfed
by the actual currency hedging penalties (maybe 3-4% penalty? I don’t claim to be an expert)... Of
course if you could currency-hedge at \< 0.1% total cost everyone would take that option, duh … :-/

(I'm eliding many other strange mistakes and nonsensical interactions for brevity).

## The "Expert Posture" Problem

Now, I expected some disagreement. Discussing investment strategies, even with an educated human,
leads to diverse outcomes. It's highly personal, and predicting the future is hard. I didn't expect
the agent to have a single "correct" answer.

What really struck me was how *convincing* the model was. Even when its assumptions were false or
its data was fabricated, it spoke with massive authority and certainty.

Positioning itself as a confident expert, it tried really hard to have me change my investment
strategy. And several times I had to pause and question myself: am I wrong? Did the AI find
something new I had ignored so far? **Am I the idiot?**

As the human in the loop, I found it surprisingly difficult to force the model to see its own
mistakes once it had decided on a "helpful" (but wrong) path. Even calling out specific mistakes did
not prevent them from re-appearing later in the conversation.

## Looking Ahead

This leaves me with an amused smile and a bit of a concern for the year ahead. How many long-term
mistakes – financial, technical, or strategic – will be AI-facilitated in 2026? We are entering an
era where these agents claim to know outcomes with high certainty, and they will try very hard to
"help" you right over a cliff.

_Authority is not the same thing as accuracy_.
