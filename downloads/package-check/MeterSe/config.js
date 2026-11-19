// Edit the bracketed placeholders and illustrative numbers before presenting.
window.DECK_CONFIG = {
  brand: {
    name: "MeterSe",
    logo: "1406.jpg",
    tagline: "Scan and Go.",
    intro: "[REPLACE: 15-word max description of what MeterSe does]",
    facts: ["[FOUNDED 2024]", "[HEADQUARTERS LOCATION]", "[KEY TRACTION NUMBER]"]
  },
  ui: {
    documentTitle: "MeterSe | Investor Journey",
    presentationLabel: "MeterSe investor presentation",
    deck: "INVESTOR JOURNEY",
    start: "START",
    finish: "FINISH",
    upgrade: "UPGRADE",
    journey: "THE JOURNEY",
    chapter: "CHAPTER",
    step: "STEP",
    clickToContinue: "CLICK OR PRESS SPACE TO CONTINUE",
    keys: "SPACE / ARROWS TO NAVIGATE",
    previous: "Previous step",
    next: "Next step",
    presenter: "Presenter view",
    fullscreen: "Toggle fullscreen",
    print: "Print / PDF",
    overviewTitle: "The whole journey.",
    overviewText: "Choose a chapter to revisit it for questions.",
    overviewHint: "SELECT A CHAPTER",
    presenterTitle: "MeterSe presenter",
    current: "CURRENT",
    upNext: "UP NEXT",
    notes: "SPEAKER NOTES",
    elapsed: "ELAPSED",
    resetTimer: "Reset timer",
    end: "End of presentation",
    popupBlocked: "Presenter window blocked. Allow popups and press P again.",
    fullscreenError: "Fullscreen could not be opened. Use your browser's fullscreen control.",
    dependencyError: "The local GSAP files are missing. Keep the vendor folder beside index.html.",
    configError: "Check config.js: keep the provided item counts and use five non-negative funding percentages totaling 100.",
    logoError: "Logo not found. Check brand.logo in config.js and the image path."
  },
  slides: [
    { title: "The starting line", notes: "[REPLACE: opening notes and the one-sentence company introduction.]" },
    { title: "The team", notes: "[REPLACE: introduce each team member and why this team can execute.]" },
    { title: "The problem", notes: "[REPLACE: explain the customer pain and its impact.]" },
    { title: "The solution", notes: "[REPLACE: explain how the product addresses each pain point.]" },
    { title: "The technology", notes: "[REPLACE: explain the technology layers and why they matter.]" },
    { title: "The ask", notes: "[REPLACE: discuss the actual raise and allocation. The sample numbers are illustrative.]" },
    { title: "Thank you", notes: "[REPLACE: close with the desired next step and invite questions.]" }
  ],
  intro: {
    kicker: "A BETTER WAY FORWARD",
    eyebrow: "THE STARTING LINE",
    heading: "A new journey begins.",
    introLabel: "THE IDEA"
  },
  team: {
    eyebrow: "THE PEOPLE BEHIND THE WHEEL",
    heading: "Built by the right team.",
    subheading: "The people turning the vision into momentum.",
    members: [
      { name: "[TEAM MEMBER 01]", role: "[ROLE]", credential: "[CREDENTIAL / EXPERIENCE]" },
      { name: "[TEAM MEMBER 02]", role: "[ROLE]", credential: "[CREDENTIAL / EXPERIENCE]" },
      { name: "[TEAM MEMBER 03]", role: "[ROLE]", credential: "[CREDENTIAL / EXPERIENCE]" },
      { name: "[TEAM MEMBER 04]", role: "[ROLE]", credential: "[CREDENTIAL / EXPERIENCE]" }
    ]
  },
  problem: {
    eyebrow: "THE ROADBLOCKS",
    heading: "The journey is broken.",
    subheading: "The friction customers face today.",
    items: [
      { title: "[PAIN POINT 01]", detail: "[REPLACE: describe the first customer problem]" },
      { title: "[PAIN POINT 02]", detail: "[REPLACE: describe the second customer problem]" },
      { title: "[PAIN POINT 03]", detail: "[REPLACE: describe the third customer problem]" }
    ]
  },
  solution: {
    eyebrow: "A CLEARER ROAD AHEAD",
    heading: "Meet a better way.",
    subheading: "One thoughtful answer for each point of friction.",
    items: [
      { title: "[SOLUTION 01]", detail: "[REPLACE: how MeterSe addresses pain point 01]" },
      { title: "[SOLUTION 02]", detail: "[REPLACE: how MeterSe addresses pain point 02]" },
      { title: "[SOLUTION 03]", detail: "[REPLACE: how MeterSe addresses pain point 03]" }
    ],
    showMockup: true,
    mockupLabel: "[OPTIONAL PRODUCT SCREENSHOT]",
    mockupTitle: "[PRODUCT SCREEN]",
    mockupRows: ["[FEATURE 01]", "[FEATURE 02]", "[FEATURE 03]"]
  },
  tech: {
    eyebrow: "THE ENGINE UNDERNEATH",
    heading: "Built to move faster.",
    subheading: "A modular foundation for the road ahead.",
    items: [
      { title: "[FRONTEND]", detail: "[REPLACE: client technology]", logo: "[FRONTEND]" },
      { title: "[BACKEND]", detail: "[REPLACE: server technology]", logo: "[BACKEND]" },
      { title: "[DATA]", detail: "[REPLACE: data technology]", logo: "[DATA]" },
      { title: "[INFRASTRUCTURE]", detail: "[REPLACE: cloud / infrastructure]", logo: "[CLOUD]" }
    ]
  },
  funding: {
    eyebrow: "FUEL FOR THE NEXT MILE",
    heading: "The ask.",
    amount: 1000000,
    currency: "USD",
    amountNote: "[ILLUSTRATIVE ASK — REPLACE]",
    allocationNote: "[ILLUSTRATIVE ALLOCATION — REPLACE]",
    items: [
      { category: "[PRODUCT]", percent: 35, color: "#3B82F6" },
      { category: "[GROWTH]", percent: 25, color: "#60A5FA" },
      { category: "[TEAM]", percent: 20, color: "#34D399" },
      { category: "[OPERATIONS]", percent: 12, color: "#FBBF24" },
      { category: "[OTHER]", percent: 8, color: "#FB7185" }
    ]
  },
  thanks: {
    eyebrow: "THE FINISH IS JUST THE BEGINNING",
    heading: "Thank you.",
    subheading: "Let's build the next chapter together.",
    contactLabel: "LET'S CONNECT",
    contact: "[CONTACT NAME]  ·  [EMAIL / WEBSITE]"
  }
};