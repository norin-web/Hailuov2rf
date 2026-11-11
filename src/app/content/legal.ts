// Legal texts must be the owner's documents reproduced verbatim.
// Only markup may change: section titles become "## " headings, bullets become "- ".
// PLACEHOLDER until the Privacy Policy and Terms of Use files arrive — do not write our own.

export const legalUpdated = "PLACEHOLDER date";

const PRIVACY =
  "PLACEHOLDER — the Privacy Policy will be published here word for word once the document arrives.\n\nQuestions about privacy in the meantime: dragan@mag-drvod.store\n\n## Section title from the document\n\nThe owner's text goes here verbatim.";

const TERMS =
  "PLACEHOLDER — the Terms of Use will be published here word for word once the document arrives.\n\nQuestions in the meantime: dragan@mag-drvod.store\n\n## Section title from the document\n\nThe owner's text goes here verbatim.";

// "At a glance" cards are a site summary, not part of the documents — fill from the texts.
export const privacy = {
  title: "Privacy Policy",
  current: "privacy",
  body: PRIVACY,
  glance: [
    ["What we collect", "PLACEHOLDER — summary from the document."],
    ["Who processes it", "PLACEHOLDER — summary from the document."],
    ["Your choices", "PLACEHOLDER — summary from the document."],
  ] as [string, string][],
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms = {
  title: "Terms of Use",
  current: "terms",
  body: TERMS,
  glance: [
    ["Your subscription", "PLACEHOLDER — summary from the document."],
    ["Using the app", "PLACEHOLDER — summary from the document."],
    ["Your content", "PLACEHOLDER — summary from the document."],
  ] as [string, string][],
  other: { to: "/privacy", label: "Privacy Policy" },
};
