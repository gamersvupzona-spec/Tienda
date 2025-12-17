// app-ps5.js v27 — PS5: Individuales + Combos + Lightbox + WhatsApp + Carga flexible

/* ====== Config ====== */
const WHATSAPP_NUMBER = "573053727045";
const PLATFORM        = "PS5";
const MAX_INDIVIDUALS = 50;

const IMG_ROOT_COMBOS = "img/ps5/combos";
const IMG_ROOT_INDIV  = "img/ps5/individual";
const IMG_EXT_PRIORITY = [
  ".png", ".jpg", ".jpeg", ".webp",
  ".PNG", ".JPG", ".JPEG", ".WEBP",
  ".jpg.png", ".JPG.PNG"
];
const DEFAULT_VARIANT  = "a";
const FALLBACK_IMG = "https://via.placeholder.com/800x450/0b1220/9ca3af?text=Imagen+no+disponible";

/* ====== WhatsApp móvil/PC ====== */
const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|Mobi/i.test(navigator.userAgent);
const waUrlSmart = (text) => {
  const t = encodeURIComponent(text);
  return isMobile
    ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`;
};
const absUrl = (u) => { try { return new URL(u, location.origin).href; } catch { return u; } };

/* ====== Catálogo ====== */
const DB = window.PRODUCTS || [];

/* ====== DOM refs ====== */
const $gridInd   = document.getElementById("grid-individual");
const $emptyInd  = document.getElementById("empty-individual");
const $gridNew   = document.getElementById("grid-combos-new");
const $emptyNew  = document.getElementById("empty-combos-new");
const $gridOld   = document.getElementById("grid-combos-old");
const $emptyOld  = document.getElementById("empty-combos-old");
const $search    = document.getElementById("search");
const $ctaWa     = document.getElementById("cta-wa");
const $waFab     = document.getElementById("wa-fab");

/* ====== Utils ====== */
const fmtCOP  = new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0});
const baseHola = "Hola, quiero más información de PS5.";
$ctaWa && ($ctaWa.href = waUrlSmart(baseHola));
$waFab && ($waFab.href = waUrlSmart(baseHola));
document.getElementById("year")?.replaceChildren(new Date().getFullYear());

/* ====== Estado packs con chips ====== */
const selectedByProduct = new Map();

/* ====== Imagenes: candidatos y carga progresiva ====== */
function headerCandidates(p){
  const arr = [];
  const isCombo = String(p.packType || "").trim() === "combo";
  const ROOT = isCombo ? IMG_ROOT_COMBOS : IMG_ROOT_INDIV;

  // 1) portada explícita
  if (p.image && String(p.image).trim() !== "") {
    const img = String(p.image).trim();
    arr.push(img);
    const m = img.match(/^(.*)\.(png|jpe?g|webp)$/i);
    if (m) {
      const base = m[1];
      IMG_EXT_PRIORITY.forEach(ext => arr.push(`${base}${ext}`));
    }
  }

  // 2) nombre suelto
  const fileName = p.fileName || p.filename || p.img;
  if (fileName){
    const f = String(fileName).trim().replace(/^\/+/, "");
    if (/\.(png|jpe?g|webp)$/i.test(f)) {
      arr.push(`${ROOT}/${f}`);
      const base = f.replace(/\.(png|jpe?g|webp)$/i, "");
      IMG_EXT_PRIORITY.forEach(ext => arr.push(`${ROOT}/${base}${ext}`));
    } else {
      IMG_EXT_PRIORITY.forEach(ext => arr.push(`${ROOT}/${f}${ext}`));
    }
  }

  // 3) patrón {precio}-{variante}
  if (p.price){
    const variant = (p.variant || DEFAULT_VARIANT).toString();
    const priceRounded = Math.round(p.price);
    IMG_EXT_PRIORITY.forEach(ext => arr.push(`${ROOT}/${priceRounded}-${variant}${ext}`));
  }

  const uniq = [...new Set(arr.filter(Boolean))];
  return uniq.length ? uniq : [FALLBACK_IMG];
}
function loadImageCandidates(img, candidates, p){
  const list = [...new Set(candidates.filter(Boolean))].filter(u => u !== FALLBACK_IMG);
  let i = 0;
  function tryNext(){
    if (i < list.length) {
      const url = list[i++];
      img.src = url + (url.includes("?") ? "" : `?cb=${Date.now()}`);
    } else {
      img.src = FALLBACK_IMG;
    }
  }
  img.addEventListener("error", tryNext);
  tryNext();
}

/* ====== Render ====== */
let q = "";
render();
$search?.addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });

function render(){
  // INDIVIDUALES
  const indBase = DB.filter(p =>
    p.platform===PLATFORM &&
    String(p.packType || "").trim().toLowerCase().startsWith("individual") &&
    (!q || p.title.toLowerCase().includes(q) || (p.choices||[]).map(c=>c.title).join(" ").toLowerCase().includes(q))
  );
  const ind = indBase.slice(0, MAX_INDIVIDUALS);

  // COMBOS
  const combosAll = DB.filter(p =>
    p.platform===PLATFORM &&
    String(p.packType || "").trim()==="combo" &&
    (!q || p.title.toLowerCase().includes(q) || (p.items||[]).join(" ").toLowerCase().includes(q))
  );
  const combosNew = combosAll.filter(p => p.isNew === true);
  const combosOld = combosAll.filter(p => !p.isNew);

  paint(ind,       $gridInd, $emptyInd);
  paint(combosNew, $gridNew, $emptyNew);
  paint(combosOld, $gridOld, $emptyOld);

  // Oculta "Nuevos combos" si está vacío
  const sectionNew = $gridNew?.closest(".section");
  if (sectionNew) sectionNew.style.display = combosNew.length ? "" : "none";
}

function paint(list, $grid, $empty){
  if(!$grid || !$empty) return;
  if (!list.length) { $grid.innerHTML = ""; $empty.hidden = false; return; }

  $empty.hidden = true;
  $grid.innerHTML = list.map(cardHTML).join("");

  list.forEach(p => {
    const $card = $grid.querySelector(`#${CSS.escape(p.id)}`);
    if (!$card) return;

    // Imagen + lightbox
    const img = $card.querySelector("img");
    if (img){
      img.style.cursor = "zoom-in";
      img.setAttribute("draggable","false");
      img.addEventListener("mousedown", e => e.preventDefault());
      const candidates = headerCandidates(p);
      loadImageCandidates(img, candidates, p);
      img.addEventListener("click", () => openLightbox(img.currentSrc || img.src, img.alt));
    }

    // Packs con chips (individual-choice)
    if (String(p.packType).trim()==="individual-choice"){
      const chips = $card.querySelectorAll(".choice");
      const btn   = $card.querySelector("button.btn.wa");
      btn.disabled = !selectedByProduct.has(p.id);

      chips.forEach(chip => {
        chip.addEventListener("click", () => {
          chips.forEach(c => c.classList.remove("is-selected"));
          chip.classList.add("is-selected");
          selectedByProduct.set(p.id, {
            id:    chip.dataset.id,
            title: chip.dataset.title,
            image: chip.dataset.image || ""
          });
          btn.disabled = false;
        });
      });
    }

    // WhatsApp
    const btn = $card.querySelector("button.btn.wa");
    btn?.addEventListener("click", () => wa(p));
  });
}

function cardHTML(p){
  const isCombo  = String(p.packType).trim()==="combo";
  const isChoice = String(p.packType).trim()==="individual-choice";
  const itemsLine = isCombo && p.items?.length ? `Incluye: ${p.items.join(", ")}` : "";
  const newTag   = p.isNew ? `<span class="tag" style="background:#14532d;border-color:#166534">Nuevo</span>` : "";

  const choicesHTML = isChoice && Array.isArray(p.choices) && p.choices.length
    ? `<div class="choice-list">
        ${p.choices.map(ch => `
          <span class="choice"
                data-id="${(ch.id||ch.title).replace(/\s+/g,'-').toLowerCase()}"
                data-title="${ch.title}"
                ${ch.image ? `data-image="${ch.image}"` : ""}>
            ${ch.title}
          </span>`).join("")}
       </div>
       <small style="color:#c0c5d6;display:block;margin-top:4px">Elige uno (cada uno ${fmtCOP.format(p.price)})</small>`
    : "";

  const btnDisabled = isChoice && (!selectedByProduct.has(p.id)) ? "disabled" : "";

  return `
    <article class="card" id="${p.id}">
      <img alt="${p.title}" loading="lazy" />
      <div class="info">
        <div class="title">${p.title}</div>
        <div class="tags">
          <span class="tag">${PLATFORM}</span>
          <span class="tag">${isCombo ? "Combo" : isChoice ? "Individual (pack)" : "Individual"}</span>
          ${newTag}
          ${p.genre ? `<span class="tag">${p.genre}</span>` : ""}
        </div>
        ${choicesHTML}
        ${isCombo ? `<div class="items">${itemsLine}</div>` : `<div class="items"></div>`}
        <div class="price">${fmtCOP.format(p.price)}</div>
        <button class="btn wa" data-id="${p.id}" ${btnDisabled}>📲 Pedir por WhatsApp</button>
      </div>
    </article>
  `;
}

function wa(p){
  const isCombo  = String(p.packType).trim()==="combo";
  const isChoice = String(p.packType).trim()==="individual-choice";
  const includeLine = isCombo && p.items?.length ? `Incluye: ${p.items.join(", ")}` : "";

  let chosen = null;
  if (isChoice){
    chosen = selectedByProduct.get(p.id);
    if (!chosen){
      alert("Elige un juego del pack antes de pedir por WhatsApp.");
      return;
    }
  }

  const cardImg = document.getElementById(p.id)?.querySelector("img");
  const imgForMsg = absUrl(
    (isChoice && chosen?.image) ? chosen.image
      : (cardImg?.currentSrc || cardImg?.src || headerCandidates(p)[0])
  );

  const msg = [
    imgForMsg,
    `Hola, quiero este ${isCombo ? "combo" : "juego"}:`,
    isChoice ? `${p.title} — Elegido: ${chosen.title}` : p.title,
    `Consola: ${p.platform}`,
    ...(includeLine ? [includeLine] : []),
    `Precio: ${fmtCOP.format(p.price)}`
  ].join("\n");

  window.open(waUrlSmart(msg), "_blank");
}

/* ------- Lightbox ------- */
function ensureLightbox(){
  let lb = document.getElementById("lightbox");
  if (!lb){
    lb = document.createElement("div");
    lb.id = "lightbox";
    lb.className = "lightbox";
    lb.innerHTML = `
      <button class="lb-close" aria-label="Cerrar">✕</button>
      <img alt="Vista previa" />
    `;
    document.body.appendChild(lb);

    lb.addEventListener("mousedown", (e) => e.preventDefault());
    const img = lb.querySelector("img");
    img.setAttribute("draggable", "false");

    lb.addEventListener("click", (e) => {
      if (e.target.id === "lightbox" || e.target.classList.contains("lb-close")) {
        lb.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        lb.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }
  return lb;
}
function openLightbox(src, alt){
  if (window.getSelection && window.getSelection().removeAllRanges) {
    try { window.getSelection().removeAllRanges(); } catch {}
  }
  const lb = ensureLightbox();
  const img = lb.querySelector("img");
  img.src = src; img.alt = alt || "Vista previa";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}