// Result card for "সভায় আনো!" (2D and 3D): draws a 1080x1440 picture of the round
// and opens a preview with share / save buttons. Used as window.KCPCard.open(data).
(() => {
  const W = 1080, H = 1440;
  const C = { red: "#c8102e", redDark: "#8f0b20", yellow: "#f5c518", paper: "#f6efe1", paper2: "#efe4cc", ink: "#1d1a17", soft: "#4a433b", green: "#2f8a4f" };
  const BODY = '"Hind Siliguri", "Noto Sans Bengali", sans-serif', DISPLAY = '"Galada", "Hind Siliguri", cursive';
  const BN = "০১২৩৪৫৬৭৮৯", bn = (v) => String(v).replace(/\d/g, (d) => BN[d]);
  const SITE = "joinkcp.com";

  const css = `
  .kcard { position: fixed; inset: 0; z-index: 20; display: grid; place-items: center; padding: 14px;
    background: rgba(29, 26, 23, .7); overflow: auto; touch-action: pan-y; }
  .kcard[hidden] { display: none; }
  .kcard-box { width: 100%; max-width: 400px; background: ${C.paper}; border: 3px solid ${C.ink}; border-radius: 16px;
    box-shadow: 8px 8px 0 ${C.ink}; padding: 12px; text-align: center; font-family: ${BODY}; color: ${C.ink}; }
  .kcard-box img { display: block; width: 100%; max-height: 62vh; object-fit: contain; border-radius: 10px;
    border: 2px solid ${C.ink}; background: ${C.paper2}; aspect-ratio: 3 / 4; }
  .kcard-box p { margin: 9px 0 10px; font-size: 14px; color: ${C.soft}; line-height: 1.4; }
  .kcard-btns { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
  .kcard-btns button { font: 700 16px ${BODY}; border: 3px solid ${C.ink}; border-radius: 12px; box-shadow: 4px 4px 0 ${C.ink};
    padding: 8px 16px; cursor: pointer; background: ${C.paper}; color: ${C.ink}; }
  .kcard-btns .go { background: ${C.green}; color: #fff; }
  .kcard-btns .save { background: ${C.yellow}; }
  .kcard-btns button:active { transform: translate(3px, 3px); box-shadow: 1px 1px 0 ${C.ink}; }
  .kcard-btns button:disabled { opacity: .55; cursor: wait; }`;

  let root, img, note, bShare, bSave, bClose, file = null, blobUrl = null, shareText = "", shareUrl = "";
  function build() {
    const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    root = document.createElement("div"); root.className = "kcard"; root.hidden = true;
    root.innerHTML = `<div class="kcard-box" role="dialog" aria-label="ফলাফলের ছবি">
      <img alt="এই খেলার ফলাফলের ছবি">
      <p>ছবিটা বন্ধুদের পাঠাও, দেখি কে বেশি কমরেড আনতে পারে!</p>
      <div class="kcard-btns">
        <button class="go" type="button">শেয়ার করো</button>
        <button class="save" type="button">ছবি সেভ করো</button>
        <button class="close" type="button">বন্ধ</button>
      </div></div>`;
    document.body.appendChild(root);
    img = root.querySelector("img"); note = root.querySelector("p");
    [bShare, bSave, bClose] = root.querySelectorAll("button");
    bClose.addEventListener("click", close);
    root.addEventListener("click", (e) => { if (e.target === root) close(); });
    bSave.addEventListener("click", save);
    bShare.addEventListener("click", share);
  }
  function close() { root.hidden = true; }

  async function share() {
    try {
      if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "সভায় আনো! · KCP", text: `${shareText} ${shareUrl}` });
        return;
      }
      if (navigator.share) { await navigator.share({ title: "সভায় আনো! · KCP", text: shareText, url: shareUrl }); return; }
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      flash(bShare, "লিংক কপি হয়েছে!");
    } catch (e) { /* the person closed the share sheet */ }
  }
  function save() {
    if (!blobUrl) return;
    const a = document.createElement("a"); a.href = blobUrl; a.download = "sobhay-ano-kcp.png";
    document.body.appendChild(a); a.click(); a.remove();
    flash(bSave, "সেভ হয়েছে!");
  }
  function flash(btn, txt) { const old = btn.textContent; btn.textContent = txt; setTimeout(() => { btn.textContent = old; }, 1600); }

  const loadImg = (src) => new Promise((res) => { if (!src) return res(null); const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });

  function rrect(c, x, y, w, h, r) { c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
  // a cartoon box with the site's hard ink shadow
  function box(c, x, y, w, h, r, fill, shadow = 8) {
    c.fillStyle = C.ink; rrect(c, x + shadow, y + shadow, w, h, r); c.fill();
    c.fillStyle = fill; rrect(c, x, y, w, h, r); c.fill();
    c.lineWidth = 5; c.strokeStyle = C.ink; c.stroke();
  }
  function wrap(c, text, maxW) {
    const words = String(text).split(/\s+/), lines = []; let line = "";
    for (const w of words) { const t = line ? `${line} ${w}` : w; if (c.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
    if (line) lines.push(line); return lines;
  }
  function fitFont(c, text, weight, family, size, maxW) {
    do { c.font = `${weight} ${size}px ${family}`; size -= 2; } while (c.measureText(text).width > maxW && size > 14);
  }
  // a round photo (or emoji) with an ink ring; missed comrades are faded out
  function face(c, x, y, d, pic, emoji, ok) {
    c.save(); c.globalAlpha = ok ? 1 : .38;
    c.beginPath(); c.arc(x, y, d / 2, 0, Math.PI * 2); c.closePath();
    c.save(); c.clip();
    if (pic) {
      const s = Math.min(pic.width, pic.height); // centre crop, a little high so faces stay in frame
      c.drawImage(pic, (pic.width - s) / 2, Math.max(0, (pic.height - s) * .3), s, s, x - d / 2, y - d / 2, d, d);
    } else {
      c.fillStyle = C.yellow; c.fillRect(x - d / 2, y - d / 2, d, d);
      c.font = `${d * .55}px sans-serif`; c.textAlign = "center"; c.textBaseline = "middle"; c.fillStyle = C.ink; c.fillText(emoji || "✊", x, y + d * .04);
      c.textBaseline = "alphabetic";
    }
    c.restore();
    c.lineWidth = 6; c.strokeStyle = C.ink; c.stroke();
    c.restore();
  }

  async function draw(d) {
    if (document.fonts) await Promise.all([`400 90px ${DISPLAY}`, `700 40px ${BODY}`, `600 30px ${BODY}`].map((f) => document.fonts.load(f).catch(() => {})));
    const pics = await Promise.all(d.faces.map((f) => loadImg(f.emoji ? null : `../assets/people/${f.id}.jpg`)));
    const [drvPic, seal] = await Promise.all([loadImg(`../assets/people/${d.driver.id}.jpg`), loadImg("../assets/logo/seal-256.webp")]);
    const cv = document.createElement("canvas"); cv.width = W; cv.height = H;
    const c = cv.getContext("2d"); c.textBaseline = "alphabetic";

    // paper with a faint dotted texture
    c.fillStyle = C.paper; c.fillRect(0, 0, W, H);
    c.fillStyle = "rgba(29,26,23,.05)";
    for (let y = 240; y < H - 100; y += 36) for (let x = (y / 36) % 2 ? 18 : 0; x < W; x += 36) { c.beginPath(); c.arc(x, y, 2.4, 0, Math.PI * 2); c.fill(); }

    // red header
    c.fillStyle = C.red; c.fillRect(0, 0, W, 210);
    c.fillStyle = C.redDark; c.fillRect(0, 202, W, 8);
    c.textAlign = "left"; c.fillStyle = C.yellow; c.font = `400 104px ${DISPLAY}`;
    c.lineWidth = 10; c.strokeStyle = C.ink; c.lineJoin = "round";
    c.strokeText("সভায় আনো!", 60, 128); c.fillText("সভায় আনো!", 60, 128);
    c.fillStyle = C.paper; c.font = `600 30px ${BODY}`;
    c.fillText(`কতোয়াল পুর কমিউনিস্ট পার্টি · শুক্রবারের সভা${d.mode ? ` · ${d.mode}` : ""}`, 64, 180);
    if (seal) { c.save(); c.beginPath(); c.arc(W - 125, 105, 80, 0, Math.PI * 2); c.fillStyle = C.paper; c.fill(); c.clip(); c.drawImage(seal, W - 205, 25, 160, 160); c.restore(); c.beginPath(); c.arc(W - 125, 105, 80, 0, Math.PI * 2); c.lineWidth = 6; c.strokeStyle = C.ink; c.stroke(); }

    // headline and score
    c.textAlign = "center";
    c.fillStyle = C.soft; fitFont(c, d.kicker, 700, BODY, 36, W - 140); c.fillText(d.kicker, W / 2, 282);
    c.fillStyle = d.sam ? C.ink : C.red; fitFont(c, d.title, 400, DISPLAY, 104, W - 120); c.fillText(d.title, W / 2, 392);
    c.fillStyle = C.ink; c.font = `700 170px ${BODY}`; c.fillText(`${bn(d.n)}/${bn(d.N)}`, W / 2, 548);
    c.font = `700 42px ${BODY}`; c.fillStyle = C.soft; c.fillText("জন কমরেড সভায় এনেছি", W / 2, 602);

    // driver + vehicle pill, and the money pill
    const pillY = 638, pillH = 92;
    c.font = `700 34px ${BODY}`;
    const drvLine = `${d.driver.n} · ${d.vehicle}`;
    const earnLine = d.sam ? "৳০ (হাসপাতাল!)" : `আয় ৳${bn(d.earn)}`;
    const w1 = Math.min(640, c.measureText(drvLine).width + 150), w2 = c.measureText(earnLine).width + 70, gap = 28;
    const x1 = (W - (w1 + w2 + gap)) / 2, x2 = x1 + w1 + gap;
    box(c, x1, pillY, w1, pillH, 48, "#fff", 6);
    face(c, x1 + 50, pillY + pillH / 2, 74, drvPic, "🛺", true);
    c.textAlign = "left"; c.fillStyle = C.ink; fitFont(c, drvLine, 700, BODY, 34, w1 - 120); c.fillText(drvLine, x1 + 100, pillY + 60);
    box(c, x2, pillY, w2, pillH, 48, d.sam ? C.paper2 : C.yellow, 6);
    c.textAlign = "center"; c.font = `700 34px ${BODY}`; c.fillStyle = C.ink; c.fillText(earnLine, x2 + w2 / 2, pillY + 60);

    // verdict (up to three lines)
    c.font = `600 36px ${BODY}`; c.fillStyle = C.ink;
    const lines = wrap(c, d.verdict, W - 160).slice(0, 3);
    lines.forEach((l, i) => c.fillText(l, W / 2, 800 + i * 48));

    // comrades: two rows, the ones who came in colour with a green tick
    const top = 800 + lines.length * 48 + 10, dia = 100, rowH = 156, per = Math.ceil(d.faces.length / 2), colW = 150;
    d.faces.forEach((f, i) => {
      const row = i < per ? 0 : 1, inRow = row ? d.faces.length - per : per, k = row ? i - per : i;
      const x = W / 2 + (k - (inRow - 1) / 2) * colW, y = top + dia / 2 + row * rowH;
      face(c, x, y, dia, pics[i], f.emoji, f.ok);
      c.textAlign = "center"; c.font = `700 27px ${BODY}`; c.fillStyle = f.ok ? C.ink : "rgba(74,67,59,.55)";
      c.fillText(f.n, x, y + dia / 2 + 36);
      if (f.ok) {
        const tx = x + dia * .36, ty = y - dia * .36;
        c.beginPath(); c.arc(tx, ty, 19, 0, Math.PI * 2); c.fillStyle = C.green; c.fill(); c.lineWidth = 4; c.strokeStyle = C.ink; c.stroke();
        c.strokeStyle = "#fff"; c.lineWidth = 5; c.beginPath(); c.moveTo(tx - 9, ty); c.lineTo(tx - 2, ty + 7); c.lineTo(tx + 10, ty - 7); c.stroke();
      }
    });

    // up to three awards as chips
    const aw = (d.awards || []).slice(0, 3), ay = top + 2 * rowH + 10;
    if (aw.length && ay + 58 < H - 116) { // only when they fit above the footer c.font = `700 27px ${BODY}`;
      const ws = aw.map((a) => Math.min(330, c.measureText(a).width + 40)), tot = ws.reduce((s, w) => s + w, 0) + (aw.length - 1) * 14;
      let ax = (W - tot) / 2;
      aw.forEach((a, i) => {
        box(c, ax, ay, ws[i], 54, 27, C.paper2, 4);
        c.fillStyle = C.ink; fitFont(c, a, 700, BODY, 27, ws[i] - 30); c.fillText(a, ax + ws[i] / 2, ay + 37); ax += ws[i] + 14;
      });
    }

    // footer: the dare and the link
    c.fillStyle = C.ink; c.fillRect(0, H - 104, W, 104);
    c.fillStyle = C.yellow; c.font = `700 40px ${BODY}`; c.fillText(`তুমি পারবে? খেলো ${SITE}/${d.path || "sim"}`, W / 2, H - 38);

    return cv;
  }

  async function open(d) {
    if (!root) build();
    shareText = d.text; shareUrl = d.url;
    file = null; if (blobUrl) { URL.revokeObjectURL(blobUrl); blobUrl = null; }
    img.removeAttribute("src"); bShare.disabled = bSave.disabled = true; note.textContent = "ছবি বানানো হচ্ছে...";
    root.hidden = false;
    try {
      const cv = await draw(d);
      const blob = await new Promise((r) => cv.toBlob(r, "image/png"));
      blobUrl = URL.createObjectURL(blob); img.src = blobUrl;
      file = new File([blob], "sobhay-ano-kcp.png", { type: "image/png" });
      const canFile = !!(navigator.canShare && navigator.canShare({ files: [file] }));
      bShare.textContent = canFile ? "শেয়ার করো" : navigator.share ? "লিংক শেয়ার করো" : "লিংক কপি করো";
      note.textContent = canFile ? "ছবিটা বন্ধুদের পাঠাও, দেখি কে বেশি কমরেড আনতে পারে!" : "ছবিটা সেভ করে বন্ধুদের পাঠাও, দেখি কে বেশি কমরেড আনতে পারে!";
    } catch (e) {
      note.textContent = "ছবি বানানো গেল না, তবে লিংক শেয়ার করা যাবে।";
    }
    bShare.disabled = false; bSave.disabled = !blobUrl;
  }

  window.KCPCard = { open, draw };
})();
