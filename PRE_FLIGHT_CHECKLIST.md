# Post Pre-Flight Checklist

Use this checklist before publishing a new post.

## Editorial Pass

- Check for spelling and grammatical errors.
- Check for odd sentence constructions.
- Check for repeated words, filler phrases, and awkward transitions.
- Check for a lack of flow between paragraphs.
- Check that each section has a clear purpose and does not drift.
- Check for illogical arguments, unsupported claims, or conclusions that do not follow from the evidence.
- Check that strong opinions are framed as opinions unless they are backed by clear evidence.
- Check that the introduction sets up the post and the conclusion resolves it.
- Check that headings accurately describe the sections they introduce.
- Check that lists are parallel, concise, and not doing work that prose would do better.

## Technical Accuracy

- Verify names, titles, companies, tools, dates, and locations.
- Verify quoted numbers, benchmarks, timelines, and claims.
- Check that technical terms are used consistently.
- Check that links point to the intended source.
- Check that code snippets, commands, and examples still work or are clearly illustrative.

## Structure And Flow

- Read the post top-to-bottom once without editing to check the overall arc.
- Check that sections appear in a logical order.
- Check that transitions explain why the next section follows from the previous one.
- Remove duplicated points unless repetition is intentional.
- Make sure the key takeaway is visible without reading every detail.

## Media And Formatting

- Check that the hero image renders correctly.
- Check that all local images exist and have useful alt text.
- Check that image carousels render horizontally and have correct groups.
- Check that tables are readable on narrow screens.
- Check that Markdown, Quarto callouts, fenced divs, and code blocks are properly closed.
- Check that headings use the expected hierarchy.

## Metadata And Publishing

- Check frontmatter: title, author, date, categories, image, lightbox, CSS, and scripts.
- Check that the slug/date folder matches the intended publish date.
- Check that internal links and anchors work.
- Check that external links are not private, expired, or accidentally pointing to drafts.
- Check that no secrets, private credentials, internal-only links, or sensitive screenshots are included.
- Check that draft TODOs, placeholders, and scratch notes have been removed.

## Final Validation

- Search for `TODO`, `FIXME`, `TBD`, and placeholder text.
- Run the site/post render command.
- Review the rendered page in a browser.
- Check mobile layout.
- Check browser console errors if the post uses custom JavaScript.
- Run spellcheck or a writing assistant pass if available.
- Review the git diff and make sure only intentional files changed.
