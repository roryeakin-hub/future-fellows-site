# CLAUDE.md

Operating notes for Claude working in this repo. Read `README.md` first — it
holds the site structure and the copy conventions. This file covers what the
README doesn't: how to ship a change safely, and the constraints that are easy
to violate because they aren't visible in the source.

Deliberately does not repeat the README. Two copies of a rule drift apart, and
the drifted copy is worse than no copy.

---

## What this is

Static marketing site for Future Fellows Inc., live at joinfellows.org. Plain
HTML/CSS/JS, no build step, no framework, no dependencies. Open any `.html`
directly in a browser to preview.

- GitHub: `roryeakin-hub/future-fellows-site`, default branch `main`
- Vercel project: `future-fellows-site`, team `roryeakin-7700s-projects`
  (team ID `team_ExtJSDckjhTrE1aVM01ABleD`)
- DNS: Squarespace

---

## Shipping a change

**Branch → preview → merge. Never commit straight to `main`.**

1. Cut a branch.
2. Push it. Vercel builds every branch automatically and returns a preview URL.
   Branch builds come back with `target: null`; only `main` builds with
   `target: "production"`.
3. Rory reviews the preview.
4. Merge to `main`. That push is what deploys to joinfellows.org.

**Never deploy files directly to Vercel** (`deploy_to_vercel` or the CLI).
It works, and it is a trap: this project is git-connected, so a direct deploy
puts something into production that exists nowhere in the repo. The next push
to `main` silently reverts it, and the repo quietly stops being the source of
truth for what's live.

Assets are cached aggressively. After a merge, hard-refresh before concluding
something didn't work — `case-studies-data.js` in particular.

---

## Content model

Case studies and team members are plain JS arrays in `case-studies-data.js` and
`team-data.js`. Each file opens with a **commented-out template entry**. Adding
someone means copying that block and filling it in.

Watch for this: a naive `grep` for `id:` or `name:` will match the commented
template and make it look like placeholder data is live. It isn't. Parse the
file rather than grepping it:

```bash
node -e "const s=require('fs').readFileSync('case-studies-data.js','utf8');
const C=new Function(s+'; return CASE_STUDIES;')();
C.forEach(e=>console.log(e.id, e.source, e.short_description.length));"
```

### `source` drives the card badge

`case-studies.html` renders a badge from `entry.source`:

- `"future_fellows"` → "Future Fellows placement" badge
- `"external"` → no badge, no element emitted

This distinction is load-bearing. `future_fellows` means Future Fellows made the
match. `external` means someone whose work we admire and had no hand in. Getting
this backwards claims credit that wasn't earned — the single most damaging error
available on this page. When in doubt, `external`.

---

## The card-back render ceiling: ~320 characters

**The most frequently violated constraint in this repo.**

The card back is a fixed 3:4 box. Past roughly twelve lines the copy doesn't
shrink or reflow — `overflow-y: auto` kicks in and the text is cut off
mid-sentence, behind a scrollbar, on a card the reader must already have
flipped. Nobody scrolls that. Anything past the ceiling is effectively
unpublished.

This has bitten twice. Ruhan's `short_description` shipped at 791 characters and
the clip landed mid-phrase, hiding the Reach Capital placement — the strongest
proof point on the site. Dylan's draft arrived at 620.

Write `short_description` to **~300 characters.** Treat 320 as a wall.

Character count is a proxy, not the rule: where words happen to wrap decides it,
so a 333-character string can clip while a 318-character one doesn't. **Verify
by rendering.** Open the page, flip the card, check `scrollHeight >
clientHeight` on `.cs-short` across viewport widths (360px → 1600px). Don't
trust the count alone.

The long version isn't lost — `long_description` feeds the Read More popout,
which has no practical limit. Card back = the one thing worth remembering.
Read More = the whole story.

Related, already fixed: the three-column media query fires at `min-width: 1000px`.
It was 900px, which forced three columns into a space too narrow and pushed
cards below the 280px floor, clipping card backs around 900–1000px. Don't move
it back.

---

## Photos

Portrait, **600×700, JPEG quality ~88** (lands around 60–70KB). That's 2x the
rendered area, so it stays sharp on retina. Named `<id>.jpg` in `/photos`.

Source images are usually the wrong shape. Crop to 6:7 with a top bias
(~35%) so the crop comes off the body rather than the head, then resample.
Landscape or undersized photos get upscaled and cropped by `object-fit: cover`
and read soft next to the others. Ruhan's photo is still below spec and needs
re-sourcing.

---

## Claims about real people

Every entry is about a real person, some of them minors. Two standards:

**Consent before publish**, covering name, photograph, and the story as written.
Rory obtains approval by email and saves the record in Drive. Consent records
live **outside this repo** — never a field on the entry, never a file here.

**A claim about a named company is only as good as its source.** The subject
confirming their own history is strong evidence. A screening-call transcript is
not — those are auto-transcribed with specifics flagged for confirmation.

Worked example: Ruhan's copy claimed AthletIQ was "backed by Microsoft and
Amazon." For a high-school sports app, startup-program credits are the likelier
reality, and "backed by" reads as investment. Removed in favour of "signed
multiple deals with Division I and III schools" — a stronger claim anyway,
because paying customers beat cloud credits. Ask whether a skeptical employer
could puncture the sentence. This page's whole job is verifiable proof.

Where a subject has a relationship with Future Fellows a reader would want to
know about, use the optional `disclosure` field. It renders at the foot of the
Read More popout.

---

## Working with Rory

Precise and minimal. Fewer words, no padding, no hedging. Makes surgical edits
rather than wholesale rewrites — which means a flagged issue can survive several
rounds and may need re-raising.

Wants to be told when he's wrong, and responds well to mechanism-based arguments
over assertion. Don't soften a real objection into a suggestion. Equally: when
he answers an objection with better evidence, concede it cleanly and move on
rather than relitigating.

State assumptions and verify them before acting on them. Memory of this project
drifts and has been confidently wrong; check the repo rather than recalling it.

---

## Known gaps

- Ruhan's photo is below the 600×700 spec.
- A third case study (Tarun Mahesh) is drafted in the Drive "Case Studies" doc
  but not built. Its draft has a date inconsistency — an IEEE paper "in November
  of his freshman year" and a Cygnus internship "in the summer of his freshman
  year" — to resolve before publishing.
- Drafts arrive from the Drive doc at roughly 2x the card-back ceiling every
  time. Trim on the way in.
