# LinkedIn announcement (draft)

Copy the **LinkedIn post** section below into LinkedIn. Line breaks between paragraphs are intentional. The post body is kept under **2,000 characters** (Unicode length) so it fits LinkedIn’s limit comfortably.

---

## LinkedIn post

Agentic systems are extremely popular right now—especially personal-assistant-style setups and workflow orchestrators. OpenClaw, Hermes, and to some extent Claude Code / Cowork-style workflows are some really compelling examples that have found broad (or rather viral) adoption.

They also have a large attack surface, and a number of mishaps are documented online (for example, Gmail messages getting batch-deleted). I would not dare install one of those stacks on enterprise hardware as-is—yet I am really itching to set up something like that at work, because the productivity upside is huge.

So if it is not an off-the-shelf install, what could we run that does not run afoul of Info-Sec rules?

NVIDIA announced NemoClaw and OpenShell at GTC this year. The policy system and policy engine look well suited to building a more constrained version of the OpenClaw stack—still ambitious, but shaped for an enterprise environment.

I am announcing a blog series that walks through building that kind of system: as capable as OpenClaw or Hermes for automating and streamlining real workflows at work, but with high-powered guardrails so I am not one bad tool call away from deleting sensitive data or ruining my reputation.

My goal is to decompose the system into individual components and describe each in a detailed post. Each milestone extends the running system in meaningful blocks. Over time the aim is a highly capable setup that mirrors a lot of what OpenClaw or Hermes can do, but exceeds them on safety and security because that is baked in from the start through OpenShell.

The full series intro blog post is available here: https://layerbylayer.ai/posts/2026_04_04_building_agents_from_scratch/
Open-source project (design + code as it lands): https://github.com/dpickem/nemoclaw_escapades

I will announce each follow-up post in the series here; they will also be available on my website: https://layerbylayer.ai/posts/
---

## Notes (not for LinkedIn)

- Swap or shorten URLs if your site uses a different canonical domain after deploy.
- The teaser graphic for this post lives beside this file as `series_announcement_linkedin.png` if you want to attach it to the LinkedIn post.
