/* ===== কতোয়াল পুর কমিউনিস্ট পার্টি — সব ইন্টারঅ্যাকশন ===== */

/* ---------- এখানে লেখা বদলাতে পারবেন ---------- */
const PARTY = "কতোয়াল পুর কমিউনিস্ট পার্টি";
const MOTTO = "দুনিয়ার আড্ডাবাজ এক হও!";
const OFFICE = "সুফান বিকাশ ঘর";
const HQ = "পিছের মুখ, বৃহত্তর কতোয়ালপুর";

const HERO_SLOGANS = [
  MOTTO,
  "চা আমাদের অধিকার, আড্ডা আমাদের সংগ্রাম!",
  "কাজ চাই না, চা চাই!",
  "বিপ্লব আসবে — দুপুরের ঘুমের পরে!",
  `${OFFICE} — আমাদের অফিস, আমাদের অহংকার!`,
  "পিছের মুখ থেকে বিশ্বজয়!",
  "মামা হেভ্বি লাঞ্চ অইবো! — কমরেড জিহান আহমদ",
  "মামা ফিলিং আইতে অইবো! — কমরেড তাহমিন আহমদ",
  "মামা সার্ভার ডাউন! — কমরেড মাহফুজুর রহমান সুফান",
  "ইসসস! — কমরেড কায়িফ আহমদ",
  "ইনকিলাব জিন্দাবাদ (আস্তে বলুন, পাশের বাড়ির চাচা ঘুমাচ্ছেন)!",
];

const NEWS = [
  "স্মারক নং ককপা/২৬/০১: এক বছরের জন্য কেন্দ্রীয় আহ্বায়ক কমিটি ঘোষণা — কমিটির প্রথম সিদ্ধান্ত: চা কে খাওয়াবে, তা পরের সভায় ঠিক হবে",
  `${OFFICE}-এ নেটওয়ার্ক নেই, তাই আজকের বিপ্লব আপাতত স্থগিত`,
  "আহ্বায়ক নিজের ডাকা সভায় দুই ঘণ্টা দেরিতে এসে বললেন, 'সবাই এত আগে আসছো কেন?'",
  "তিনজন যুগ্ম আহ্বায়কের মধ্যে কে বেশি যুগ্ম — এ নিয়ে উপকমিটি গঠন",
  "বিকাশের পিন ভুলে যাওয়ায় সদস্য সচিবের বিরুদ্ধে তদন্ত কমিটি — কমিটির প্রধানও তিনি নিজে",
  "সাংগঠনিক সম্পাদকের ফোনে সবাই একসাথে ঘুম থেকে উঠেছে — পার্টির ইতিহাসে প্রথম",
  "উপদেষ্টা পরিষদের উপদেশ: 'বেশি চা খেও না' — উপদেশ সর্বসম্মতিক্রমে প্রত্যাখ্যাত",
  "সিঙ্গারার দাম ২ টাকা বাড়ায় পার্টির তীব্র নিন্দা ও ৫ মিনিটের মৌন মিছিল",
  "আগামী শুক্রবার পিছের মুখে মহাসমাবেশ; উপস্থিতি নির্ভর করবে বৃষ্টি ও ক্রিকেট খেলার ওপর",
  `${OFFICE}-এর সুফান ভাই জানিয়েছেন, পার্টির কাছে তাঁর পাওনা ৪৭ টাকা`,
];

const MANIFESTO = [
  { e: "☕", t: "প্রতি মোড়ে ফ্রি চা", d: "দিনে কমপক্ষে ৭ কাপ চা বিনামূল্যে। চিনি নিজ দায়িত্বে, বিস্কুট ভাগ্যের ওপর।" },
  { e: "🗣️", t: "আড্ডা হবে মৌলিক অধিকার", d: "দিনে ন্যূনতম ৪ ঘণ্টা আড্ডা সংবিধানে লেখা থাকবে। আড্ডা ভাঙালে জরিমানা।" },
  { e: "😴", t: "জাতীয় ঘুম সময়", d: "দুপুর ২টা থেকে ৪টা বাধ্যতামূলক ঘুম। জেগে থাকলে ৫০ টাকা জরিমানা।" },
  { e: "📶", t: "প্রতিটি গাছে ওয়াইফাই", d: "পাসওয়ার্ড: inquilab123। আম গাছে স্পিড বেশি, তাল গাছে নেটওয়ার্ক দুর্বল।" },
  { e: "💸", t: "ক্যাশ আউট চার্জ শূন্য", d: `${OFFICE} থেকে ক্যাশ আউটে কোনো চার্জ নেই (সুফান ভাই এখনো রাজি হননি)।` },
  { e: "🍃", t: "চা বাগানে আড্ডা জোন", d: "প্রতিটি চা বাগানে বেঞ্চসহ আড্ডা জোন। পাতা তোলা ঐচ্ছিক, চা খাওয়া বাধ্যতামূলক।" },
  { e: "📚", t: "সবাই জিপিএ-৫", d: "পরীক্ষা পদ্ধতি বাতিল। ছাত্র, শিক্ষক, এমনকি দপ্তরিও পাবেন জিপিএ-৫।" },
  { e: "🏏", t: "পাড়ায় পাড়ায় ক্রিকেট মাঠ", d: "আম্পায়ার হবেন পার্টির লোক। আউট শুধু বিরোধী দলের খেলোয়াড়রা হবে।" },
];

/* ---------- কেন্দ্রীয় আহ্বায়ক কমিটি (স্মারক নং ককপা/২৬/০১) ----------
   ক্রম অনুযায়ী লেখা। একই পদের লোক পরপর রাখলে ঘোষণাপত্রে এক সাথে দেখাবে।
   id = লিংকের জন্য ইংরেজি নাম, a = ইমোজি, p = ছবি (না থাকলে ইমোজি দেখাবে), n = নাম, r = পদ, g = দল (ফিল্টারের জন্য),
   d = পরিচিতি, q = বাণী (ছবিতে ক্লিক করলে যেকোনো একটা দেখাবে)               */
const COMMITTEE = [
  { id: "tanim", a: "📣", p: "assets/people/tanim.jpg", n: "আব্দুল্লাহ আল তানিম", r: "আহ্বায়ক", g: "convener", d: "সবাইকে আড্ডায় ডাকেন, তারপর নিজে আসেন সবার শেষে।",
    q: ["সবাই চলে আসো, আমি পাঁচ মিনিটে আসছি। (দুই ঘণ্টা পর)", "আজকের সভার একমাত্র এজেন্ডা: চা কে খাওয়াবে?", "আহ্বান করা আমার কাজ, আসা তোমাদের কাজ।"] },
  { id: "jihan", a: "🎖️", p: "assets/people/jihan.jpg", n: "জিহান আহমদ", r: "সিনিয়র যুগ্ম আহ্বায়ক", g: "convener", d: "যুগ্মদের মধ্যে সিনিয়র — কারণ কমিটির তালিকায় তাঁর নাম আগে লেখা।",
    s: "মামা হেভ্বি লাঞ্চ অইবো!",
    q: ["মামা হেভ্বি লাঞ্চ অইবো!", "আহ্বায়ক না এলে সভা আমি চালাব — তাই প্রতিটা সভা আমিই চালাই।", "সিনিয়র মানে বোঝো? চায়ের কাপ আগে আমার হাতে আসবে।", "জুনিয়র যুগ্ম আহ্বায়করা কোথায়? চা আনতে পাঠাও।"] },
  { id: "tahmin", a: "🤝", p: "assets/people/tahmin.jpg", n: "তাহমিন আহমদ", r: "যুগ্ম আহ্বায়ক", g: "convener", d: "আহ্বায়কের ডাক সবার কাছে পৌঁছে দেন — কখনো কখনো পরের দিন।",
    s: "মামা ফিলিং আইতে অইবো!",
    q: ["মামা ফিলিং আইতে অইবো!","গ্রুপে মেসেজ দিয়েছি, সবাই সিন করেছে, কেউ আসেনি।", "আমি যুগ্ম আহ্বায়ক — মানে আহ্বানের অর্ধেক আমার।", "আড্ডা কালকে, নাকি পরশু? আহ্বায়ককে জিজ্ঞেস করে জানাচ্ছি।"] },
  { id: "milad", a: "📢", p: "assets/people/milad.jpg", n: "মিলাদ আহমদ", r: "যুগ্ম আহ্বায়ক", g: "convener", d: "স্লোগানে পার্টির সবচেয়ে উঁচু গলা — মাইক ছাড়াই।",
    q: ["ইনকিলাব! (বাকিরা: জিন্দাবাদ... আস্তে)", "মিছিল কোন দিকে যাবে? চায়ের দোকানের দিকে।", "আমার স্লোগান শুনে পাশের পাড়ার মোরগও জেগে ওঠে।"] },
  { id: "ohbab", a: "🗺️", p: "assets/people/ohbab.jpg", n: "অহবাব আহমদ", r: "যুগ্ম আহ্বায়ক", g: "convener", d: "তৃতীয় যুগ্ম আহ্বায়ক — তিনজন থাকলে অন্তত একজন আসবেই, এই আশায়।",
    q: ["আমি এসেছি, বাকি দুই যুগ্ম কোথায়?", "কমিটির কোরাম পূর্ণ: আমি আর চায়ের কাপ।", "বিপ্লবের রোড ম্যাপ রেডি — শুরু পিছের মুখ, শেষও পিছের মুখ।"] },
  { id: "sufan", a: "💸", p: "assets/people/sufan.jpg", n: "মাহফুজুর রহমান সুফান", r: "সদস্য সচিব", g: "secretary", d: `${OFFICE}-এর মালিক। পার্টির সব হিসাব তাঁর ক্যাশ বাক্সে, পার্টি অফিস তাঁর দোকানের সামনের বেঞ্চে।`,
    s: "মামা সার্ভার ডাউন!",
    q: ["মামা সার্ভার ডাউন!", "চাঁদা বিকাশে দাও, ক্যাশ আউট চার্জ নিজে দাও।", "পার্টির কাছে আমার পাওনা ৪৭ টাকা, ভুলি নাই।", "নেটওয়ার্ক নাই কমরেড, বিপ্লব বিকালে আসেন।"] },
  { id: "koyes", a: "📋", p: "assets/people/koyes.jpg", n: "কয়েস আহমদ", r: "সিনিয়র যুগ্ম সদস্য সচিব", g: "secretary", s: "মামা কার ভেন আ দি!", d: "সদস্য সচিবের ডান হাত — বিকাশ ঘরে ভিড় হলে ক্যাশ গোনেন।",
    q: ["সদস্যদের তালিকা আমার কাছে আছে — খাতাটা একটু খুঁজতে হবে।", "পুরো পদের নাম বলতে বলতেই সভা শেষ হয়ে যায়।", "উপস্থিতি নিচ্ছি: যারা আসোনি, হাত তোলো।"] },
  { id: "ikramul", a: "✍️", p: "assets/people/ikramul.jpg", n: "ইকরামুল হক হাসান", r: "যুগ্ম সদস্য সচিব", g: "secretary", d: "সভার কার্যবিবরণী লেখেন — যদিও প্রথম পাতা এখনো শেষ হয়নি।",
    q: ["সিদ্ধান্ত লিখে রেখেছি: 'আগামী সভায় সিদ্ধান্ত হবে।'", "কলম কার কাছে? কলম ছাড়া বিপ্লব হয় না।", "ফটোকপির টাকা কে দেবে?"] },
  { id: "kayif", a: "🧩", p: "assets/people/kayif.jpg", n: "কায়িফ আহমদ", r: "সাংগঠনিক সম্পাদক", g: "org", d: "সংগঠনকে সংগঠিত রাখেন — মানে সবাইকে ফোন করে ঘুম থেকে তোলেন।",
    s: "ইসসস!",
    q: ["ইসসস!", "কমরেড, ফোন ধরো! আড্ডা শুরু হয়ে গেছে (এখনো হয়নি)।", "নতুন সদস্য আনলে এক কাপ চা ফ্রি — তবে আমার পক্ষ থেকে না।", "সংগঠন শক্তিশালী হচ্ছে: গত সপ্তাহে ৩ জন এসেছিল, এই সপ্তাহে ৪ জন।"] },
  { id: "safayat", a: "🪑", n: "সাফায়াত আহমদ", r: "সহ সাংগঠনিক সম্পাদক", g: "org", d: "আড্ডার আগে বেঞ্চ মোছেন, আড্ডার পরে কাপ গোনেন।",
    q: ["সাংগঠনিক সম্পাদক যা বলবেন, আমি তার অর্ধেক করব।", "বেঞ্চে জায়গা নেই? আন্দোলন করে আরেকটা বেঞ্চ আনব।", "আজ কত কাপ চা হলো? হিসাব রাখছি।"] },
  { id: "ivan", a: "📸", n: "ইভান আহমদ", r: "সহ সাংগঠনিক সম্পাদক", g: "org", d: "পার্টির অফিসিয়াল ফটোগ্রাফার — প্রতিটি সভায় শুধু চায়ের কাপের ছবি তোলেন।",
    q: ["সবাই একটু চেপে দাঁড়াও, গ্রুপ ছবি তুলব।", "ছবি ঝাপসা? ওটা বিপ্লবের গতি।", "ফেসবুকে পোস্ট দিচ্ছি: 'ঐতিহাসিক সভা সম্পন্ন'।"] },
  { id: "imam", a: "🧠", n: "ইমাম আহমদ চৌধুরী", r: "উপদেষ্টা পরিষদ সদস্য", g: "advisor", tag: "কেসিপি (মার্ক্সবাদী)", d: "কমিটি ঘোষণাপত্রে স্বাক্ষর করেছেন। উপদেশ দেন বিনামূল্যে, মানেন না কেউ।",
    q: ["উপদেশ দিলাম, মানা না-মানা তোমাদের বিপ্লব।", "পার্টির ওয়েবসাইট বানিয়ে দিয়েছি, এবার বিপ্লব অটোমেটিক হবে।", "স্বাক্ষর দিয়ে দিয়েছি — কমিটি এক বছর চলবে, ইনশাআল্লাহ।"] },
];

const GROUPS = [
  { k: "all", t: "সবাই" },
  { k: "convener", t: "আহ্বায়ক পরিষদ" },
  { k: "secretary", t: "সচিবালয়" },
  { k: "org", t: "সাংগঠনিক" },
  { k: "advisor", t: "উপদেষ্টা" },
];

const SLOGAN_PARTS = {
  a: ["দুনিয়ার", "কতোয়াল পুরের", "পিছের মুখের", "চায়ের দোকানের", "বিকাশ ঘরের", "সারা দেশের", "চা বাগানের"],
  b: ["আড্ডাবাজ", "অলস", "ঘুমকাতুরে", "বেকার", "চা-প্রেমী", "সিঙ্গারাখোর", "ফেসবুক-বিপ্লবী"],
  c: ["এক হও!", "জেগে ওঠো (দুপুরের পর)!", "চা খাও!", "বালিশ ধরো!", "আওয়াজ তোলো (আস্তে)!", "ক্যাশ আউট করো!", "আড্ডা জমাও!"],
};

const QUIZ = [
  { q: "সকালে আপনি সাধারণত কখন ঘুম থেকে ওঠেন?", o: ["ভোর ৬টায়", "সকাল ১০টায়", "দুপুর ১২টায়", "সাংগঠনিক সম্পাদক ফোন দিলে"] },
  { q: "দিনে কয় কাপ চা খান?", o: ["১-২ কাপ", "৩-৫ কাপ", "৬-১০ কাপ", "গুনে দেখিনি, গোনা পুঁজিবাদী অভ্যাস"] },
  { q: "পার্টির আড্ডায় আপনার ভূমিকা কী?", o: ["সময়মতো আসি", "দেরিতে আসি", "শুধু সিঙ্গারা খেতে আসি", "আমি না এলে আড্ডা জমে না"] },
  { q: "কেউ আপনাকে কাজ দিলে আপনি কী করেন?", o: ["সাথে সাথে করে ফেলি", "'কাল করব' বলি", "একটা উপকমিটি গঠন করি", "'এটা পুঁজিবাদী ষড়যন্ত্র' বলে চলে যাই"] },
  { q: "বিপ্লব কবে হবে বলে মনে করেন?", o: ["এখনই!", "আগামী বৃহস্পতিবার", "বৃষ্টি থামলে", "আহ্বায়ক এলে"] },
];

const QUIZ_RESULTS = [
  { max: 3, e: "🕵️", t: "পুঁজিবাদী গুপ্তচর!", d: "আপনি সময়মতো ওঠেন, কাজ করেন — এটা অত্যন্ত সন্দেহজনক। পার্টি আপনাকে নজরে রাখছে।" },
  { max: 7, e: "🐣", t: "শিক্ষানবিশ কমরেড", d: "সম্ভাবনা আছে! আরও বেশি চা খান, আরও বেশি আড্ডা দিন। ছয় মাস পর আবার পরীক্ষা দিন।" },
  { max: 11, e: "✊", t: "খাঁটি আড্ডাবাজ", d: "অভিনন্দন! আপনার আড্ডাবাজি পার্টির আদর্শের সাথে পুরোপুরি মিলে যায়।" },
  { max: 15, e: "👑", t: "কেন্দ্রীয় কমিটির যোগ্য!", d: "আপনি এতটাই আড্ডাবাজ যে আগামী কমিটিতে আপনাকে চতুর্থ যুগ্ম আহ্বায়ক করার প্রস্তাব উঠেছে। তবে বসার চেয়ার নিজে আনতে হবে।" },
];

const CARD_POSTS = ["প্রাথমিক সদস্য", "চা সরবরাহ সম্পাদক", "বেঞ্চ রক্ষণাবেক্ষণ কর্মকর্তা", "সিঙ্গারা পরিদর্শক", "মিছিলের পেছনের সারির নেতা", "আড্ডা গবেষক", "বিকাশ ঘর পাহারাদার", "ফেসবুক কমেন্ট যোদ্ধা"];

/* ---------- সহায়ক ফাংশন ---------- */
const $ = (s) => document.querySelector(s);
const BN = "০১২৩৪৫৬৭৮৯";
const bn = (n) => String(n).replace(/\d/g, (d) => BN[d]);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ব্রাউজার স্টোরেজ বন্ধ থাকলে কিছু হবে না */ } },
};
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const loadImg = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });

// সিলের ছবির ক্রিম পটভূমি সরিয়ে শুধু লাল কালি রাখা (যেকোনো রঙের ওপর বসানো যায়)
const stampReady = loadImg("assets/stamp.webp").then((img) => {
  if (!img) return null;
  const size = 640;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const x = c.getContext("2d");
  x.drawImage(img, 0, 0, size, size);
  const px = x.getImageData(0, 0, size, size), d = px.data;
  for (let i = 0; i < d.length; i += 4) {
    const ink = Math.min(1, Math.max(0, (235 - d[i + 1]) / 175)); // সবুজ মান কম = লাল কালি
    d[i] = 184; d[i + 1] = 32; d[i + 2] = 52; d[i + 3] = Math.round(ink * 255);
  }
  x.putImageData(px, 0, 0);
  return c;
});
stampReady.then((c) => { const el = $(".letter-stamp"); if (c && el) el.src = c.toDataURL("image/png"); });

let toastTimer;
function toast(msg, ms = 2800) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), ms);
}

/* ---------- কনফেটি ---------- */
const confetti = (() => {
  const c = $("#confetti");
  const ctx = c.getContext("2d");
  let parts = [], running = false;
  const colors = ["#c8102e", "#f5c518", "#ffffff", "#2e8b3d"];
  function resize() { c.width = innerWidth; c.height = innerHeight; }
  addEventListener("resize", resize); resize();
  function frame() {
    ctx.clearRect(0, 0, c.width, c.height);
    parts.forEach((p) => {
      p.vy += 0.12; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.fillStyle = p.c;
      if (p.star) { ctx.font = "18px serif"; ctx.fillText(p.star, -9, 9); }
      else ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
      ctx.restore();
    });
    parts = parts.filter((p) => p.y < c.height + 40);
    if (parts.length) requestAnimationFrame(frame); else { running = false; ctx.clearRect(0, 0, c.width, c.height); }
  }
  return function burst(n = 140) {
    if (reduceMotion) return;
    for (let i = 0; i < n; i++) {
      parts.push({
        x: innerWidth / 2 + (Math.random() - 0.5) * 200, y: innerHeight * 0.35,
        vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 11 - 3,
        r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
        s: 8 + Math.random() * 8, c: pick(colors),
        star: Math.random() < 0.12 ? pick(["★", "☕", "✊", "🍃"]) : null,
      });
    }
    if (!running) { running = true; requestAnimationFrame(frame); }
  };
})();

/* ---------- নেভ ---------- */
const navToggle = $("#navToggle"), navLinks = $("#navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });

/* ---------- হিরো স্লোগান ঘোরানো ---------- */
(() => {
  const el = $("#sloganRotator");
  let i = 0;
  setInterval(() => {
    el.classList.add("out");
    setTimeout(() => { i = (i + 1) % HERO_SLOGANS.length; el.textContent = HERO_SLOGANS[i]; el.classList.remove("out"); }, 350);
  }, 3200);
})();

/* প্রতীকে ক্লিক */
(() => {
  const logo = $("#heroLogo");
  const lines = ["চা ঠান্ডা হয়ে যাচ্ছে, কমরেড!", "কাপে হাত দেবেন না, এটা পার্টির সম্পত্তি।", "কাস্তে দিয়ে চা পাতা তোলা হয়, ঘাস কাটা না!", "আরেক কাপ? বিল কে দেবে?", `☕ ${MOTTO}`];
  logo.addEventListener("click", () => {
    logo.classList.remove("wobble"); void logo.getBoundingClientRect(); logo.classList.add("wobble");
    toast(pick(lines));
  });
})();

/* ---------- টিকার (দুবার বসানো, যাতে বিরতি ছাড়া ঘোরে) ---------- */
const newsHtml = NEWS.map((n) => `<span>${n}</span>`).join("");
$("#tickerContent").innerHTML = newsHtml + newsHtml;

/* ---------- পরিসংখ্যান গোনা ---------- */
(() => {
  const nums = document.querySelectorAll(".stat-num");
  const run = (el) => {
    const target = +el.dataset.count;
    if (target === 0) { el.textContent = bn(0); return; }
    const start = performance.now(), dur = 1600;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      el.textContent = bn(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  nums.forEach((n) => io.observe(n));
})();

/* ---------- পরবর্তী আড্ডার কাউন্টডাউন (প্রতি শুক্রবার বিকাল ৫টা) ---------- */
(() => {
  const d = $("#cdD"), h = $("#cdH"), m = $("#cdM"), s = $("#cdS");
  function nextMeeting() {
    const now = new Date();
    const t = new Date(now);
    t.setHours(17, 0, 0, 0);
    let add = (5 - now.getDay() + 7) % 7; // ৫ = শুক্রবার
    if (add === 0 && now >= t) add = 7;
    t.setDate(t.getDate() + add);
    return t;
  }
  let target = nextMeeting();
  function tick() {
    let diff = target - new Date();
    if (diff <= 0) { target = nextMeeting(); diff = target - new Date(); toast("আড্ডা শুরু! (আহ্বায়ক এখনো আসেননি)"); }
    const sec = Math.floor(diff / 1000);
    d.textContent = bn(Math.floor(sec / 86400));
    h.textContent = bn(Math.floor((sec % 86400) / 3600));
    m.textContent = bn(Math.floor((sec % 3600) / 60));
    s.textContent = bn(sec % 60);
  }
  tick(); setInterval(tick, 1000);
})();

/* ---------- ইশতেহার কার্ড ---------- */
(() => {
  const wrap = $("#manifestoCards");
  MANIFESTO.forEach((m, i) => {
    const b = document.createElement("button");
    b.className = "flip";
    b.type = "button";
    b.setAttribute("aria-label", `${m.t} — বিস্তারিত দেখতে চাপুন`);
    b.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front"><div class="emoji">${m.e}</div><h3>${m.t}</h3><small>দাবি নং ${bn(i + 1)} · ক্লিক করুন</small></div>
        <div class="flip-face flip-back"><b>${m.t}</b>${m.d}</div>
      </div>`;
    b.addEventListener("click", () => b.classList.toggle("flipped"));
    wrap.appendChild(b);
  });
})();

/* ---------- কমিটি: কার্ড, ফিল্টার ও ঘোষণাপত্রের তালিকা ---------- */
const showLeader = (() => {
  const grid = $("#leadersGrid"), filters = $("#leaderFilters");
  let current = "all";

  COMMITTEE.forEach((l) => {
    const card = document.createElement("article");
    card.className = "leader" + (l.g === "convener" && l.r === "আহ্বায়ক" ? " leader-top" : "");
    card.id = "m-" + l.id;
    card.dataset.group = l.g;
    card.innerHTML = `
      <button class="leader-avatar${l.p ? " has-photo" : ""}" type="button" aria-label="${l.n}-এর বাণী শুনুন">${l.p ? `<img src="${l.p}" alt="কমরেড ${l.n}" width="360" height="360" loading="lazy">` : l.a}</button>
      <h3>কমরেড ${l.n}</h3>
      <span class="role">${l.r}</span>${l.tag ? `<span class="tag">${l.tag}</span>` : ""}
      <p class="desc">${l.d}</p>${l.s ? `<p class="motto"><small>প্রিয় স্লোগান</small>✊ ${l.s}</p>` : ""}
      <div class="quote-bubble">ছবিতে ক্লিক করুন 👆</div>`;
    const bubble = card.querySelector(".quote-bubble");
    let last = -1;
    card.querySelector(".leader-avatar").addEventListener("click", () => {
      let i; do { i = Math.floor(Math.random() * l.q.length); } while (i === last && l.q.length > 1);
      last = i;
      bubble.textContent = `"${l.q[i]}"`;
      bubble.classList.remove("pop"); void bubble.offsetWidth; bubble.classList.add("pop");
    });
    grid.appendChild(card);
  });

  function applyFilter(k) {
    current = k;
    filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.k === k));
    grid.querySelectorAll(".leader").forEach((c) => { c.hidden = !(k === "all" || c.dataset.group === k); });
  }
  GROUPS.forEach((g) => {
    const n = g.k === "all" ? COMMITTEE.length : COMMITTEE.filter((c) => c.g === g.k).length;
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.dataset.k = g.k;
    b.textContent = `${g.t} (${bn(n)})`;
    b.addEventListener("click", () => applyFilter(g.k));
    filters.appendChild(b);
  });
  applyFilter("all");

  // ঘোষণাপত্রের তালিকা — উপদেষ্টা বাদে, একই পদের নাম এক সাথে
  const list = $("#noticeList");
  const rows = [];
  COMMITTEE.filter((c) => c.g !== "advisor").forEach((c) => {
    const lastRow = rows[rows.length - 1];
    if (lastRow && lastRow.r === c.r) lastRow.people.push(c); else rows.push({ r: c.r, people: [c] });
  });
  list.innerHTML = rows.map((row, i) => `
    <div class="nl-row${i === 0 || row.r === "সদস্য সচিব" ? " nl-main" : ""}">
      <span class="nl-post">${row.r}</span>
      <span class="nl-names">${row.people.map((p) => `<a href="#m-${p.id}" data-id="${p.id}">${p.n}</a>`).join("")}</span>
    </div>`).join("");

  // ঘোষণাপত্রে নামে ক্লিক করলে কার্ডে গিয়ে হাইলাইট
  function show(id) {
    const card = document.getElementById("m-" + id);
    if (!card) return;
    if (current !== "all") applyFilter("all");
    card.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
    card.classList.remove("highlight"); void card.offsetWidth; card.classList.add("highlight");
    setTimeout(() => card.querySelector(".leader-avatar").click(), 500);
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#m-"]');
    if (!a) return;
    e.preventDefault();
    show(a.getAttribute("href").slice(3));
  });
  return show;
})();

/* ---------- মূল ঘোষণাপত্রের ছবি ---------- */
(() => {
  const dlg = $("#lightbox");
  $("#openNotice").addEventListener("click", () => {
    if (typeof dlg.showModal === "function") dlg.showModal(); else window.open("assets/notice.jpg", "_blank");
  });
  $("#lightboxClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
})();

/* ---------- বিপ্লব মিটার ---------- */
(() => {
  const fill = $("#meterFill"), pct = $("#meterPct"), msg = $("#meterMsg"), btn = $("#revBtn");
  let level = 0, locked = false;
  const sleepy = ["😴 এক কমরেড ঘুমিয়ে পড়েছেন! মিটার কমে গেল।", "☕ চা বিরতি! বিপ্লব একটু পিছিয়ে গেল।", "📵 বিকাশ ঘরে নেট চলে গেছে, বিপ্লব থেমে গেল!", "🌧️ বৃষ্টি শুরু, সবাই দোকানে ঢুকে পড়েছে।", "📣 আহ্বায়ক এখনো আসেননি, মিছিল অপেক্ষায়।"];
  function stage(v) {
    if (v < 15) return "বিপ্লব চোখ কচলাচ্ছে...";
    if (v < 35) return "কমরেডরা চায়ের কাপ হাতে জড়ো হচ্ছেন।";
    if (v < 55) return "মিছিল শুরু! (প্রথম সারিতে ৩ জন, বাকিরা দোকানে)";
    if (v < 75) return "স্লোগানে কাঁপছে পিছের মুখ!";
    if (v < 95) return "বিপ্লব প্রায় এসে গেছে! আর একটু!";
    return "বিপ্লব দরজায় কড়া নাড়ছে!";
  }
  function render() {
    fill.style.width = level + "%";
    pct.textContent = bn(level) + "%";
  }
  btn.addEventListener("click", () => {
    if (locked) return;
    btn.classList.remove("shake"); void btn.offsetWidth; btn.classList.add("shake");
    if (level > 20 && Math.random() < 0.18) {
      level = Math.max(0, level - (8 + Math.floor(Math.random() * 10)));
      msg.textContent = pick(sleepy);
    } else {
      level = Math.min(100, level + 4 + Math.floor(Math.random() * 6));
      msg.textContent = stage(level);
    }
    render();
    if (level >= 100) {
      locked = true;
      msg.textContent = "🎉 বিপ্লব সফল! ... এখন সবাই চা খেতে গেছে। বিপ্লব আবার কাল থেকে।";
      confetti(200);
      const wins = store.get("kcp-revolutions", 0) + 1;
      store.set("kcp-revolutions", wins);
      toast(`আপনি এ পর্যন্ত ${bn(wins)} বার বিপ্লব সফল করেছেন!`, 3500);
      setTimeout(() => { level = 0; render(); msg.textContent = "নতুন দিন, নতুন বিপ্লব। আবার শুরু করুন!"; locked = false; }, 4500);
    }
  });
})();

/* ---------- স্লোগান মেশিন ---------- */
(() => {
  const out = $("#sloganOut"), countEl = $("#sloganCount");
  let count = store.get("kcp-slogans", 0);
  countEl.textContent = bn(count);
  $("#sloganBtn").addEventListener("click", () => {
    const s = `${pick(SLOGAN_PARTS.a)} ${pick(SLOGAN_PARTS.b)}, ${pick(SLOGAN_PARTS.c)}`;
    out.textContent = s;
    out.classList.remove("pop"); void out.offsetWidth; out.classList.add("pop");
    count++; store.set("kcp-slogans", count); countEl.textContent = bn(count);
  });
  $("#sloganCopy").addEventListener("click", async () => {
    const text = out.textContent;
    if (text.startsWith("বোতাম")) { toast("আগে একটা স্লোগান বানান, কমরেড!"); return; }
    try { await navigator.clipboard.writeText(`${text} — ${PARTY} (KCP)`); toast("কপি হয়েছে! এখন ফেসবুকে পোস্ট করুন ✊"); }
    catch { toast("কপি হলো না। হাতে লিখে নিন, কমরেড।"); }
  });
})();

/* ---------- কুইজ ---------- */
(() => {
  const box = $("#quizBox");
  let step = 0, score = 0;
  function renderQ() {
    const q = QUIZ[step];
    box.innerHTML = `
      <div class="quiz-progress"><div style="width:${(step / QUIZ.length) * 100}%"></div></div>
      <div class="quiz-step">প্রশ্ন ${bn(step + 1)} / ${bn(QUIZ.length)}</div>
      <h3>${q.q}</h3>
      <div class="quiz-options">${q.o.map((o, i) => `<button class="quiz-opt" type="button" data-v="${i}">${o}</button>`).join("")}</div>`;
    box.querySelectorAll(".quiz-opt").forEach((b) => b.addEventListener("click", () => {
      score += +b.dataset.v; step++;
      step < QUIZ.length ? renderQ() : renderResult();
    }));
  }
  function renderResult() {
    const r = QUIZ_RESULTS.find((x) => score <= x.max);
    const max = QUIZ.length * 3;
    box.innerHTML = `
      <div class="quiz-progress"><div style="width:100%"></div></div>
      <div class="quiz-result">
        <div class="big">${r.e}</div>
        <h3>${r.t}</h3>
        <span class="score">কমরেড স্কোর: ${bn(score)} / ${bn(max)}</span>
        <p>${r.d}</p>
        <button class="btn btn-red" type="button" id="quizAgain">🔁 আবার চেষ্টা করুন</button>
      </div>`;
    if (score > 7) confetti(120);
    $("#quizAgain").addEventListener("click", () => { step = 0; score = 0; renderQ(); });
  }
  renderQ();
})();

/* ---------- সদস্য কার্ড ---------- */
(() => {
  const canvas = $("#cardCanvas"), ctx = canvas.getContext("2d");
  const dl = $("#cardDownload");
  const W = canvas.width, H = canvas.height;
  let emblem = null, stamp = null;
  const ready = Promise.all([
    loadImg("assets/emblem.jpg").then((i) => (emblem = i)),
    stampReady.then((c) => (stamp = c)),
    document.fonts.load('40px "Galada"'),
    document.fonts.load('700 30px "Hind Siliguri"'),
    document.fonts.load('400 24px "Hind Siliguri"'),
  ]).catch(() => {});

  function roundRect(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function wrapText(text, x, y, maxW, lineH, maxLines) {
    const words = text.split(" ");
    let line = "", lines = 0;
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxW && line) {
        ctx.fillText(line, x, y); y += lineH; line = w;
        if (++lines >= maxLines - 1) break;
      } else line = test;
    }
    if (line) ctx.fillText(line, x, y);
  }
  function fitFont(text, weight, size, maxW, family) {
    ctx.font = `${weight} ${size}px ${family}`;
    while (ctx.measureText(text).width > maxW && size > 14) { size -= 2; ctx.font = `${weight} ${size}px ${family}`; }
  }
  function bnDate(d) {
    const months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
    return `${bn(d.getDate())} ${months[d.getMonth()]} ${bn(d.getFullYear())}`;
  }

  function draw(data) {
    const B = '"Hind Siliguri", sans-serif';
    // পটভূমি
    ctx.fillStyle = "#c8102e"; ctx.fillRect(0, 0, W, H);
    ctx.save();
    ctx.translate(120, 120);
    for (let i = 0; i < 24; i++) {
      ctx.rotate(Math.PI / 12);
      ctx.fillStyle = i % 2 ? "rgba(245,197,24,.10)" : "rgba(0,0,0,0)";
      ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1200, -160); ctx.lineTo(1200, 160); ctx.fill();
    }
    ctx.restore();
    ctx.strokeStyle = "#f5c518"; ctx.lineWidth = 10; roundRect(14, 14, W - 28, H - 28, 22); ctx.stroke();

    // প্রতীক
    ctx.save();
    roundRect(40, 34, 160, 160, 20); ctx.fillStyle = "#f7f1e3"; ctx.fill();
    ctx.clip();
    if (emblem) ctx.drawImage(emblem, 40, 34, 160, 160);
    ctx.restore();
    ctx.strokeStyle = "#f5c518"; ctx.lineWidth = 4; roundRect(40, 34, 160, 160, 20); ctx.stroke();

    // শিরোনাম
    ctx.fillStyle = "#f5c518"; ctx.textBaseline = "alphabetic";
    fitFont(PARTY, 400, 50, W - 260, '"Galada", ' + B);
    ctx.fillText(PARTY, 222, 98);
    ctx.fillStyle = "#fff"; ctx.font = "600 23px " + B;
    ctx.fillText(`অফিসিয়াল সদস্য কার্ড · ${MOTTO}`, 224, 140);
    ctx.font = "500 19px " + B; ctx.globalAlpha = 0.85;
    ctx.fillText(`হেড অফিস: ${HQ}`, 224, 172);
    ctx.globalAlpha = 1;

    // সাদা প্যানেল
    ctx.fillStyle = "#f7f1e3"; roundRect(44, 212, W - 88, 276, 18); ctx.fill();
    ctx.strokeStyle = "#1d1a17"; ctx.lineWidth = 4; ctx.stroke();

    const L = 74;
    const row = (label, value, y, size = 30) => {
      ctx.fillStyle = "#8f0b20"; ctx.font = "600 20px " + B; ctx.fillText(label, L, y);
      ctx.fillStyle = "#1d1a17";
      fitFont(value, 700, size, 520, B); // লম্বা নাম হলে ছোট হবে, সিলের নিচে যাবে না
      ctx.fillText(value, L + 170, y);
    };
    row("নাম", data.name, 264, 34);
    row("ডাকনাম", data.nick, 310);
    row("পদ", data.post, 354);
    row("সদস্য নং", data.id, 398);
    ctx.fillStyle = "#8f0b20"; ctx.font = "600 20px " + B; ctx.fillText("দক্ষতা", L, 442);
    ctx.fillStyle = "#1d1a17"; ctx.font = "500 22px " + B;
    wrapText(data.skills, L + 170, 442, 380, 30, 2);

    // সিল
    if (stamp) {
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.translate(752, 350); ctx.rotate(-0.18);
      ctx.drawImage(stamp, -105, -105, 210, 210);
      ctx.restore();
    }

    // নিচের লাইন
    ctx.fillStyle = "#fff";
    fitFont(`কার্যালয়: ${OFFICE} · ইস্যু: ${data.date} · মেয়াদ: বিপ্লব সফল না হওয়া পর্যন্ত`, 500, 19, W - 96, B);
    ctx.fillText(`কার্যালয়: ${OFFICE} · ইস্যু: ${data.date} · মেয়াদ: বিপ্লব সফল না হওয়া পর্যন্ত`, 48, 524);
  }

  const placeholder = { name: "আপনার নাম এখানে", nick: "—", post: "আবেদন বিবেচনাধীন", id: "KCP-০০০০", skills: "ফর্ম পূরণ করুন, কমরেড!", date: bnDate(new Date()) };
  let lastData = placeholder;
  const redraw = () => draw(lastData);
  ready.then(redraw);
  document.fonts.ready.then(redraw); // ফন্ট দেরিতে এলে আবার আঁকা

  $("#joinForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = $("#jName").value.trim();
    if (!name) { toast("নাম ছাড়া সদস্য হওয়া যায় না, কমরেড!"); return; }
    const skills = [...document.querySelectorAll('#joinForm input[type="checkbox"]:checked')].map((c) => c.value);
    await ready;
    draw(lastData = {
      name,
      nick: $("#jNick").value.trim() || "কমরেড",
      post: pick(CARD_POSTS),
      id: "KCP-" + bn(Math.floor(1000 + Math.random() * 9000)),
      skills: skills.length ? skills.join(" · ") : "কোনো দক্ষতা নেই (যা অত্যন্ত যোগ্যতা)",
      date: bnDate(new Date()),
    });
    dl.disabled = false;
    confetti(160);
    toast(`স্বাগতম, কমরেড ${name}! আপনি এখন পার্টির সদস্য ✊`, 3500);
    if (innerWidth < 860) canvas.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  dl.addEventListener("click", () => {
    canvas.toBlob((blob) => {
      if (!blob) { toast("কার্ড ডাউনলোড হলো না, আবার চেষ্টা করুন।"); return; }
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "KCP-member-card.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      toast("কার্ড ডাউনলোড হয়েছে! ফেসবুকে প্রোফাইল পিক দিন 😎");
    });
  });
})();

/* ---------- চাঁদা (বোতাম পালিয়ে যায়) ---------- */
(() => {
  const arena = $("#donateArena"), yes = $("#donateYes"), no = $("#donateNo"), msg = $("#donateMsg");
  const lines = ["আরে ধরতে পারলেন না! 😜", "টাকা দেওয়া এত সহজ না, কমরেড!", `${OFFICE}-এ নেট নেই, আবার চেষ্টা করুন`, "আরেকটু জোরে চাপুন!", "বোতামটাও পুঁজিবাদ বিরোধী!", "প্রায় ধরে ফেলেছিলেন!"];
  const MAX = 6;
  let escapes = 0;
  function run() {
    if (escapes >= MAX) return false;
    escapes++;
    const a = arena.getBoundingClientRect();
    yes.classList.add("running");
    const maxX = a.width - yes.offsetWidth - 10, maxY = a.height - yes.offsetHeight - 10;
    yes.style.left = Math.max(10, Math.random() * maxX) + "px";
    yes.style.top = Math.max(10, Math.random() * maxY) + "px";
    msg.textContent = escapes >= MAX ? "ঠিক আছে, ঠিক আছে... এবার ধরতে দেব 😮‍💨" : pick(lines);
    return true;
  }
  yes.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") run(); });
  yes.addEventListener("click", (e) => {
    if (run()) { e.preventDefault(); return; }
    msg.textContent = `🙏 ধন্যবাদ, কমরেড! চাঁদা পাঠান ${OFFICE}-এ। নম্বর? সেটা শুধু সদস্য সচিব সুফান ভাই জানেন। আর টাকা না থাকলে — শুধু এক কাপ চা খাওয়ালেই চলবে।`;
    confetti(180);
  });
  no.addEventListener("click", () => {
    msg.textContent = "ঠিক আছে, পরে দেবেন। তবে পার্টির খাতায় আপনার নামে ১ কাপ চা বাকি লেখা হলো ☕";
  });
})();

/* ---------- ফুটার সাল ---------- */
$("#year").textContent = bn(new Date().getFullYear());
