# Voice & Writing Style Guide — Daniel Pickem

> Extracted from thirteen published posts on main (May–December 2025):
> six blog posts and seven Jupyter notebook tutorials (the "LLMs From Scratch"
> series). Use this file as a reference when writing or co-writing new posts to
> preserve the authentic voice of the blog.

---

## 1. Overall Tone

- **Conversational and personal.** Every post is written squarely in first person.
  The reader feels like they are sitting across the table from the author.
- **Enthusiastic but measured.** Excitement about technology comes through clearly,
  but it is always tempered by honest caveats, limitations, and trade-offs.
- **Opinionated yet humble.** Strong opinions are stated directly ("To be quite
  frank here, my opinion of agents was that they are overrated") but are always
  qualified or updated when new evidence warrants it ("…is changing my mind a
  bit").
- **Reflective.** Posts regularly step back to consider broader implications —
  learning, skill atrophy, ethical concerns, the pace of change.

---

## 2. Sentence Construction

### Long, clause-rich sentences
The default sentence style chains together multiple ideas using commas, em-dashes,
and parenthetical asides. A single sentence often contains two or three of these
connectors:

> "The above paper was interesting for many reasons not the least of which was a
> sentimental one."

> "While I really enjoyed the flexibility and ease of use of WordPress, it's
> always been cumbersome to actually host the website."

### Parenthetical tangents
Parentheses frequently inject secondary context mid-sentence — dates, tool names,
caveats, or self-aware asides:

> "…which was the style at the time (this is 2012 onwards but pre-ChatGPT)."

> "…to the point where I have been warned about my excessive token usage."

### Em-dash interjections
Em-dashes are used liberally, both as paired interjections and as sentence
pivots:

> "From transformers to diffusion models, from reinforcement learning to neural
> radiance fields - there's an overwhelming amount of innovation happening."

> "…a remotely accessible swarm robotics testbed. My swarm robotics days are
> somewhat behind me - or maybe just on pause until swarm robotics has more
> practical applications."

### Short, punchy follow-ups
After a long explanatory sentence, a brief declarative often lands the point:

> "That, and I needed an excuse for learning the latest sandboxing technology :)"

> "This blog post is already a useful tutorial as I just had to look up how to
> deploy the updated website to Netlify!"

---

## 3. Characteristic Phrases & Transitions

### Recurring connectors
| Phrase | Typical usage |
|--------|---------------|
| "In my opinion" / "In particular" | Introducing a personal take or zooming in |
| "Overall" | Wrapping up a section with a verdict |
| "More specifically" | Narrowing scope after a broad statement |
| "What's more" | Adding a secondary benefit or surprise |
| "Last but not least" | Final item in a list, often the author's favourite |
| "Not the least of which" | Highlighting the most interesting reason |
| "However" / "That said" | Pivoting to a counterpoint or caveat |
| "To be quite frank (here)" | Signalling an unusually direct opinion |
| "I want to point out / emphasize" | Drawing attention to something easily missed |

### Signature deferrals
Topics outside the current post's scope are teed up for future posts:

- "but that's a topic for another post"
- "but that's not the point of this post"
- "but more on [topic] in another post"
- "stay tuned for those in follow-up blog posts"

### Recommendation language
- "I can highly recommend"
- "which is worth subscribing to / trying out"
- "what an awesome read this was"
- "I enjoyed this demo quite a bit"
- "Definitely something I am excited to try out"

### Hedging & honesty
- "I did not exactly know what to expect"
- "I've been somewhat skeptical"
- "Cursor also included some hallucinations, so don't take everything at face
  value without verifying"
- "This is perhaps the most questionable use-case"
- "the hire/no-hire recommendation explicitly has to come from the interviewer
  and not the LLM"

---

## 4. Vocabulary Tendencies

### Favoured words
- "powerful", "compelling", "comprehensive", "reusable"
- "non-trivial", "non-optional"
- "step function" (as in a discrete jump in capability/productivity)
- "unlock(ing)" — used when a tool enables a new class of tasks
- "breathing / breathtaking pace"
- "fascinating"
- "the flip-side of the coin"
- "trivial" (for things that are easy) vs. "non-trivial" (for things that aren't)

### Domain-bridging language
The author frequently explains industry tools for a general audience in inline
asides:

> "(Slack is a messaging platform used at NVIDIA but also more widely used in
> the industry)"

> "(Gerrit is used as a code review system in our project)"

---

## 5. Post Structure & Flow

### Opening pattern
Every post begins with **personal context** — how the author encountered the
topic, why it matters to them, or a brief origin story. The reader is grounded
in the author's perspective before any technical content appears.

Examples:
- "For the longest time I have been hosting some version of my website using
  WordPress…"
- "I recently finished reading (or rather working through) my technical book of
  the month…"
- "A few weeks ago I came across a paper titled…"
- "After a full day of talks, demos, and AMAs I just wanted to provide…"
- "Using AI assistants for software engineering has practically become
  non-optional for tech workers."

### Section headers
- Clear H1/H2/H3 hierarchy, usually descriptive noun phrases
  ("The Motivating Use-Case", "Key insights", "Future Enhancements")
- Emoji are used sparingly and only in section headers of long reference-style
  posts (e.g. "🐛 Bug Triage & Feature Development", "📋 Project Management")

### Body pattern
1. **Context & motivation** — why this matters, personal connection
2. **Explanation or walkthrough** — the meat of the post, often with bullet
   lists, tables, images, or embedded media
3. **Key insights / Lessons learned** — a clearly labelled takeaway section,
   usually as a bullet list prefixed with "Key insights:" or "Key learnings:"
4. **Future work / teaser** — forward-looking statements about what comes next

### Lists & structured content
- **Numbered lists** for sequential steps or ranked items
- **Bullet lists** for unordered sets of observations or features
- **Bold lead-in** on list items followed by a colon and explanation:
  > "**Document my learning process** - Writing helps me solidify my understanding"
- **Tables** for comparisons, tag definitions, signal/red-flag matrices

### Images & media
- Images are captioned via Markdown alt text
- Embedded Google Slides via `<iframe>` for slide decks
- External images referenced by URL when appropriate (book covers, screenshots)

### Closing pattern
Almost every post ends with a **signature sign-off**:

- *"Stay curious,"* (italicised) followed by "Daniel" on a new line — the
  canonical form
- Occasional variation: "Stay curious!" (with exclamation mark)
- The MCP post departs with: "keep learning!" followed by "Daniel"

The sign-off is preceded by either a brief reflective paragraph or a
forward-looking teaser.

---

## 6. Recurring Structural Motifs

### The "virtuous aside"
The author credits other people and their work generously — linking to blogs,
GitHub profiles, books, newsletters, and YouTube channels by name. Attribution
is specific:

> "…inspired by a few of the ML blogging greats: Sebastian Raschka's blog,
> Andrej Karpathy's blog, Lilian Weng's blog, and many more."

### The "ethical caveat"
When a workflow raises privacy or fairness concerns, the author pauses to
acknowledge them explicitly:

> "Not everybody is comfortable with the idea of being tracked like this…"

> "When in doubt, ask for explicit consent from the affected person before using
> this workflow."

### The "honest limitation"
Posts consistently admit what does *not* work or where the author's approach
falls short:

> "One use-case I haven't managed to automate…"

> "This is perhaps the most questionable use-case of this workflow."

### The "bridge to daily work"
Technical concepts are routinely grounded in the author's professional reality
at NVIDIA — autonomous vehicles, evaluation systems, interviewing, on-call
rotations.

---

## 7. Tutorial / Notebook Voice (LLMs From Scratch Series)

The seven Jupyter notebook posts carry a distinct but related voice. They follow
Sebastian Raschka's book chapter by chapter, so they are more instructional than
the essay-style blog posts — yet the author's personality still comes through.

### Framing as a fellow learner
Every notebook opens with an **Acknowledgment** section crediting Raschka's work
and explicitly frames the content as "my personal implementation and notes while
working through the book's content." This reinforces the blog's overall posture
of learning in public, not lecturing.

### Incremental "build-up" structure
Concepts are constructed step by step, layering complexity:

- Tokenizers: V1 (basic) → V2 (special tokens) → V3 (BPE via tiktoken)
- Attention: simplified → trainable (scaled dot-product) → causal → multi-head
  (naive) → multi-head (parallel)
- Models: DummyGPTModel → full GPTModel → loaded pretrained weights

Each version is introduced with a short motivation for why the previous version
is insufficient.

### Heavy use of `NOTE:` comments in code
Inline code comments are prefixed with `# NOTE:` to flag non-obvious
implementation details, PyTorch-specific behaviour, or caveats:

> `# NOTE: Applying dropout scales the outputs by a factor of 1/(1-p) during
> training.`

> `# NOTE: Buffers are not trained and are not subject to gradient descent.`

These `NOTE:` comments are the primary vehicle for the author's voice inside
code cells — they explain the *why*, not just the *what*.

### `TODO:` markers for future work
Open questions and intended improvements are marked with `# TODO:`:

> `# TODO: It seems wasteful to generate output tokens for each input token when
> we are really only interested in the last output token.`

### Tensor shape annotations
Shapes are tracked meticulously through every operation, using the `[B, T, D]`
/ `[B, H, T, D_h]` notation:

> `# NOTE: The customary notation for these dimensions is [B, T, D] where:
> B = batch size, T = sequence length, D = model dimension`

Shape comments appear both before operations and as inline trailing comments.

### Mathematical rigour in markdown cells
Markdown cells use LaTeX for equations ($\alpha_{ij}$, $\omega_{ij}$,
$e^{-\infty} \rightarrow 0$), include formal definitions (cross-entropy,
perplexity, KL divergence), and link to Wikipedia / Substack / the book for
deeper dives.

### Diagrams and figures from the book
Virtually every section is paired with one or more images from Manning's live
book platform (`drek4537l1klr.cloudfront.net/raschka/Figures/...`), with the
image placed *before* the code so the reader sees the visual context first.

### Boilerplate and resources
Each notebook ends with consistent metadata:
- An **Acknowledgment** section
- A **Resources** section linking to Raschka's GitHub, the book page, and the
  specific chapter

### Interleaving explanation and code
The pattern is: markdown cell with context/diagrams → code cell implementing
the concept → markdown cell interpreting the output or motivating the next step.
The author rarely places two code cells in a row without intervening explanation.

### Cross-notebook imports
Later notebooks import classes and functions from earlier ones (e.g.
`from chapter_04_gpt_from_scratch import GPTModel`), building a coherent
codebase across the series.

### Attribution of external explanations
When quoting or paraphrasing other sources, the author explicitly names them:

> "ChatGPT provides a similar intuitive explanation."

> "Borrowed from Manning's Live Books"

---

## 8. What the Voice Is NOT

- **Not academic or stiff.** Contractions are used freely ("it's", "I've",
  "don't", "that's"). Even the tutorial notebooks use conversational phrasing
  in their markdown cells.
- **Not clickbait or hype-driven.** Superlatives are rare; when they appear
  they are backed by specifics.
- **Not impersonal.** The word "I" appears dozens of times per post. Passive
  voice is uncommon. The notebooks say "my personal implementation" — not
  "the implementation."
- **Not lecture-style.** The author frames himself as a fellow learner, not an
  authority dispensing wisdom. The tutorial notebooks reinforce this: they
  credit the source author throughout and are explicitly positioned as personal
  study notes.
- **Not copy-paste from the source material.** Even in the tutorial notebooks
  that follow a book, the author adds original `NOTE:` commentary, expanded
  explanations (e.g. the cross-entropy / perplexity / KL divergence deep
  dive), and improved code (type annotations, dataclasses, structure).

---

## 9. Quick-Reference Checklist for New Posts

### Essay-style posts
- [ ] Open with a personal hook — how you encountered the topic
- [ ] Use first person throughout; address the reader occasionally ("you")
- [ ] Include at least one honest caveat or limitation
- [ ] Credit sources, people, and tools by name with links
- [ ] Use bold lead-ins on bullet list items
- [ ] Add a "Key insights" or "Lessons learned" section
- [ ] Tease future posts where appropriate
- [ ] Close with *"Stay curious,"* + newline + *Daniel*

### Tutorial / notebook posts
- [ ] Include an Acknowledgment section crediting the source material
- [ ] Include a Resources section with links
- [ ] Build concepts incrementally (simple version → improved version)
- [ ] Pair every concept with a diagram or figure *before* the code
- [ ] Use `# NOTE:` comments for non-obvious implementation details
- [ ] Track tensor shapes explicitly in code comments
- [ ] Add expanded explanations or deep dives beyond the source material
- [ ] Use type annotations and clean code structure
