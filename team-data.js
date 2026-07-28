// Future Fellows — team data.
// Add a new team member (or advisor) by copying the template entry below.
// No form, no database, no admin UI — this file is the whole content model,
// same pattern as /case-studies-data.js.
//
// `role` is free text (not a fixed enum) — "Founder" today, "Advisor",
// "Board Member", etc. later, with no schema change needed.

const TEAM = [

  // --- TEMPLATE — copy this block for a new entry ---
  // {
  //   id: "jane-doe",
  //   name: "Jane Doe",
  //   role: "Advisor",
  //   photo: "/photos/jane-doe.jpg",
  //   linkedin_url: "https://www.linkedin.com/in/jane-doe/",
  //   bio: "Full bio, plain text — this renders directly on the flipped card back, no Read More."
  // },

  {
    id: "rory-eakin",
    name: "Rory Eakin",
    role: "Founder",
    photo: "/photos/rory-eakin.jpg",
    linkedin_url: "https://www.linkedin.com/in/roryeakin/",
    bio: "Rory Eakin is the Founder of Future Fellows. Previously, he was co-Founder of CircleUp, a marketplace then data analytics company founded to help entrepreneurs thrive. Prior to its acquisition, CircleUp helped small businesses across the United States raise more than $1B. As COO, Rory led the organization's Finance (prior to hiring a CFO), Legal (prior to hiring a General Counsel), HR and Operations work. Before CircleUp, Rory served as Director of Investments at Humanity United, a private foundation. He grew up in Washington DC, now lives in San Francisco, and has benefited enormously throughout his career from people taking a chance on him when he had more promise than experience."
  },

  {
    id: "ruhan-khanna",
    name: "Ruhan Khanna",
    role: "Intern",
    photo: "/photos/ruhan-khanna.jpg",
    linkedin_url: "https://www.linkedin.com/in/ruhan-khanna-rk18/",
    bio: "Bio pending — Rory to write."
  },

  // Not a real person — a recruiting card inviting visitors to picture themselves
  // on the team. No LinkedIn link by design (see team.html rendering logic,
  // which only shows the icon when linkedin_url is set).
  {
    id: "you",
    name: "You?",
    role: "Join the team",
    photo: "/photos/you-logo.jpg",
    linkedin_url: "",
    bio: "Bio pending — Rory to write."
  }

];
