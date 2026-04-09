# LinkedIn announcement (draft)

Copy the **LinkedIn post** section below into LinkedIn. Line breaks between paragraphs are intentional. The post body is kept under **2,000 characters** (Unicode length) so it fits LinkedIn's limit comfortably.

---

## LinkedIn post

The first build-focused post in my "Building Agents from Scratch" series is live: M1 — Foundation.

This write-up walks through building the minimum viable agent loop from scratch: a Slack connector, an orchestrator, and a hosted inference backend (using NVIDIA's Inference Hub). The setup has three components, explicit API boundaries between them, and built-in observability to debug what is happening.

Even at this early stage, the orchestrator runs inside an OpenShell sandbox, so I can validate policy enforcement and deployment isolation from day one. I include both a local bare-metal path and a fully sandboxed deployment, with step-by-step setup for each.

What the post covers in detail:
→ Slack connector with event normalization, a thinking indicator, and error-aware rate limiting
→ Orchestrator with prompt assembly, transcript repair, and an approval-gate scaffold
→ Inference backend with retry logic, error categorization, and provider swappability
→ OpenShell sandbox deployment with credential injection, network policies, and inference routing
→ 19 hard-won lessons from deploying a Python app inside an OpenShell sandbox (this section alone is worth reading if you're working with OpenShell)

M1 does not include any tools, memory, or delegation yet—just a sandboxed chatbot that proves the core loop works end-to-end. In M2, I'll either add a sandboxed coding agent and make the approval gate real, or focus on tool calling first for more immediate practical value.

Quick disclaimer: this post is quite long because it tries to cover a lot of material at once—an intro to agentic systems, an OpenShell tutorial/user guide, a setup guide, a detailed implementation walkthrough, a build log, and a collection of lessons learned.

Blog post: https://layerbylayer.ai/posts/2026_04_08_building_agents_from_scratch_m1/
Series intro: https://layerbylayer.ai/posts/2026_04_04_building_agents_from_scratch/
Open-source project: https://github.com/dpickem/nemoclaw_escapades

---

## Notes (not for LinkedIn)

- Swap or shorten URLs if your site uses a different canonical domain after deploy.
- You can attach the same `series_announcement_linkedin.png` teaser graphic from the series intro post.
