# Future Fellows — joinfellows.org

Marketing site for Future Fellows Inc., a California public benefit corporation
connecting high-potential young people (16–22) with employers through paid,
scoped project work.

## Structure

Static HTML/CSS, no build step, no framework, no dependencies.

- `index.html` — homepage (founder letter)
- `students.html` — for students
- `employers.html` — for employers
- `case-studies.html` — case studies (data in `case-studies-data.js`)
- `team.html` — team and advisors (data in `team-data.js`)
- `photos/` — headshots referenced by the two data files
- `style.css` — shared stylesheet (white ground / navy ink / teal accent;
  Playfair Display, Source Serif 4, Inter)

## Local preview

Open any `.html` file directly in a browser — no server needed.

## Deployment

Connected to Vercel (project: `future-fellows-site`, team:
`roryeakin-7700s-projects`). Pushes to `main` auto-deploy to production at
joinfellows.org.

## Adding content

Case studies and team members are plain JS arrays — `case-studies-data.js` and
`team-data.js`. Each has a commented-out template entry at the top; copy it,
fill it in, commit. No build step, no admin UI.

Written consent must be confirmed before any real person's entry goes live.
Consent is tracked separately and is never a field on the entry itself. Where a
subject has a relationship with Future Fellows that a reader would want to know
about, put it in the optional `disclosure` field — it renders as a note at the
foot of the Read More popout.

Secondary navigation (Case studies, Team) lives in the footer on every page;
the top nav is reserved for the students/employers fork and the primary CTA.

## Copy conventions

- No fixed-price language (pricing model is still being determined)
- No nonprofit framing in body copy — legal status lives only in the footer
  ("Future Fellows Inc. · a California public benefit corporation")
- No invented anecdotes or fabricated proof points
- No bare "AI" as a category noun — use "AI implementation"
- One taxonomy site-wide: Builders, Researchers, Artists. Both audiences see
  the same three, framed for their job — students read them as an identity to
  self-select into, employers read them as capabilities to buy. Keep the
  concrete deliverables (market maps, agent design, campaign execution) inside
  each archetype's description on the employers page; an employer needs to know
  what actually arrives, not just who makes it.
- People vs. projects. The archetypes name *people*. The founder letter and the
  students page still describe *projects* as "research, marketing, and AI
  implementation" — that is a deliberate call, not a leftover. Don't "fix" it
  by swapping the archetypes in.
- No stated project duration commitments
- Contact: info@joinfellows.org
