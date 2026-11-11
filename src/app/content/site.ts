// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends the documents
// (operator, disclaimer) or when the app goes live (run the iTunes lookup for `app`).

export const site = {
  brand: "Hailuo",
  email: "dragan@mag-drvod.store",
  year: new Date().getFullYear(),
  operator: "PLACEHOLDER operator",
  // Wording must come from the owner's Privacy Policy / Terms (Hailuo is a MiniMax brand).
  disclaimer: "PLACEHOLDER — trademark disclaimer from the owner's documents.",
};

export const app = {
  id: "6813474603",
  url: "https://apps.apple.com/app/id6813474603",
  // Not in the store yet (iTunes lookup returns 0 results, 2026-11-11).
  // Refresh from https://itunes.apple.com/lookup?id=6813474603 after release.
  minIOS: "PLACEHOLDER",
  category: "PLACEHOLDER",
  languages: "PLACEHOLDER",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Phone mockups: Figma screens in an iPhone frame (File/materials/phone-*.png → webp).
export const phones = {
  home: "/images/phone-home.webp",
  describe: "/images/phone-describe.webp",
  enhance: "/images/phone-enhance.webp",
  generating: "/images/phone-generating.webp",
  result: "/images/phone-result.webp",
  library: "/images/phone-library.webp",
  paywall: "/images/phone-paywall.webp",
  trend: "/images/phone-trend-detail.webp",
};

// Everything below follows the app's own screens; nothing is claimed beyond them.
export const chips = ["Enhance prompt", "2K quality", "5-second clips", "21:9 frame", "Trending styles", "My Library", "Save to Photos"];

export const steps = [
  { title: "Describe the scene", text: "Type what should happen in the video, or add a photo with the plus button.", phone: phones.describe },
  { title: "Enhance the prompt", text: "Tap Enhance prompt and AI turns a short idea into a detailed description.", phone: phones.enhance },
  { title: "Pick 2K, 5s, 21:9 and create", text: "Set quality, length and frame right under the text, then tap Create.", phone: phones.generating },
  { title: "Download to Photos", text: "Watch the clip, scrub through it and save it to your Photos library.", phone: phones.result },
];

export const features = [
  { title: "Text to video", text: "A few words in, a short clip out. Watch it, scrub through the frames and download it.", phone: phones.result },
  { title: "Enhance prompt", text: "Not sure how to describe a shot? Let AI fill in the details before you create.", phone: phones.enhance },
  { title: "Trending styles", text: "Open a trend, read the prompt behind it and reuse it for your own video.", phone: phones.trend },
  { title: "My Library", text: "Every clip you made, in one grid — watch, regenerate, share or delete.", phone: phones.library },
];

// Orbit thumbnails: sample frames from the app's Trending and History screens.
export const orbit = [
  { src: "/images/red-car-coast.webp", x: 110, y: 90, s: 84 },
  { src: "/images/beach-runner.webp", x: 320, y: 110, s: 60 },
  { src: "/images/sunflowers.webp", x: 540, y: 140, s: 72 },
  { src: "/images/cafe.webp", x: 680, y: 50, s: 76 },
  { src: "/images/street-walk.webp", x: -30, y: 360, s: 80 },
  { src: "/images/snow-car.webp", x: 190, y: 370, s: 64 },
  { src: "/images/neon-graffiti.webp", x: 740, y: 360, s: 92 },
  { src: "/images/neon-city-car.webp", x: 580, y: 490, s: 70 },
  { src: "/images/desert-car.webp", x: 240, y: 530, s: 66 },
];

export const pro = ["Unlimited AI generations", "HD quality and HD exports", "All premium video styles"];

// The first two prompts are the app's own examples (typo "women" fixed); the third is a draft.
export const prompts = [
  { img: "/images/car-sunset.webp", text: "Create video of a dynamic car on the sunset" },
  { img: "/images/red-car-coast.webp", text: "Create video of a woman with a nice car on the sunny beach" },
  { img: "/images/sunflowers.webp", text: "A woman laughing in a field of sunflowers at golden hour" },
];

export const scenarios = [
  { img: "/images/neon-graffiti.webp", tag: "Social posts", title: "A moody clip for your next story or reel" },
  { img: "/images/snow-car.webp", tag: "Concepts", title: "Show a scene before you shoot it" },
  { img: "/images/street-walk.webp", tag: "Just for fun", title: "Turn a daydream into a short film" },
];

export const appScreens = [
  { tag: "Create", title: "Describe the video to create.", text: "The prompt field is the whole interface. Write a scene, attach a photo with the plus button, then set quality, length and frame right under the text: 2K, 5s, 21:9.", phone: phones.describe },
  { tag: "Enhance prompt", title: "Let AI fill in the details.", text: "Tap Enhance prompt and Hailuo turns a short idea into a detailed description, so the clip comes out closer to what you pictured. Cancel any time.", phone: phones.enhance },
  { tag: "Result", title: "Watch, regenerate, download.", text: "Play the clip, scrub the timeline frame by frame, regenerate it or share it. Download saves the video to your Photos library.", phone: phones.result },
  { tag: "My Library", title: "Every clip you made, in one grid.", text: "Open any video from your history to watch it again, regenerate it, share it or delete it. Trending sits next door with ready prompts to reuse.", phone: phones.library },
];

export const specs: [string, string][] = [
  ["Made for", `iPhone · iOS ${app.minIOS} or later`],
  ["Category", app.category],
  ["Video settings", "Quality up to 2K · length 5s · frame up to 21:9"],
  ["Price", "Free, Pro subscription with a free trial"],
  ["Languages", app.languages],
  ["Developer", site.operator],
];

export const principles = [
  { title: "Words first", text: "Everything starts in the prompt field. Enhance prompt helps when you are not sure how to describe a shot." },
  { title: "Settings you can read", text: "Quality, length and frame sit right under the text: 2K, 5s, 21:9. Nothing is hidden in menus." },
  { title: "Try before you pay", text: "Pro starts with a free trial. Subscriptions are handled by Apple, so you can cancel or restore them in your Apple ID settings." },
];

export const faq = [
  { short: "First video", q: "How do I make my first video?", a: "Type a description in the prompt field, choose quality, length and frame, then tap Create. When the clip is ready you can watch it and download it.", tags: ["Create"] },
  { short: "Enhance prompt", q: "What does Enhance prompt do?", a: "It turns a short idea into a detailed description, so the result comes out closer to what you pictured. Tap Enhance prompt above the field; you can cancel while it works.", tags: ["Prompt"] },
  { short: "Start from a photo", q: "Can I start from a photo?", a: "Yes. Tap the plus button in the prompt field and pick a photo from your library or take a new one. The app asks for access to Photos or Camera the first time.", tags: ["Create", "Photos"] },
  { short: "2K, 5s, 21:9", q: "What do 2K, 5s and 21:9 mean?", a: "They are the video settings under the prompt: quality, clip length and frame shape. Tap them to change before you create.", tags: ["Settings"] },
  { short: "Saved videos", q: "Where are my videos saved?", a: "Every clip you create appears in My Library (History). Tap Download on a video to save it to your iPhone's Photos library.", tags: ["Library"] },
  { short: "Reuse a trend", q: "How do I reuse a trend?", a: "Open Trending, pick a video and read the prompt behind it. Tap Reuse video to start your own clip from that prompt.", tags: ["Trending"] },
  { short: "Free trial", q: "How does the free trial work?", a: "Pro can start with a free trial shown on the subscription screen. Apple shows the price and trial length before you confirm. Cancel before it ends in your Apple ID settings if you don't want to continue.", tags: ["Billing", "Apple ID"] },
  { short: "Cancel subscription", q: "How do I cancel my subscription?", a: "Subscriptions are handled by Apple. On your iPhone open Settings, tap your name, then Subscriptions. Choose Hailuo and tap Cancel Subscription. Pro stays active until the end of the period you already paid for.", tags: ["Billing", "Apple ID"] },
  { short: "Restore purchase", q: "How do I restore a purchase?", a: "Open the subscription screen in the app and tap Restore, using the same Apple ID the purchase was made with. Refunds and billing are handled by Apple.", tags: ["Billing", "Apple ID"] },
  { short: "Clear history", q: "How do I clear my history?", a: "Open a video in My Library and use the menu to delete it, or clear the whole history from the History screen. Deleted videos can't be restored.", tags: ["Library"] },
  { short: "Photo access", q: "The app can't open my photos", a: "Photo access was probably turned off. Open iPhone Settings → Hailuo → Photos and allow access, then try the plus button again.", tags: ["Photos"] },
];
