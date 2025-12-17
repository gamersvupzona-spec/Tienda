// app-ps4.js — PS4: Individuales + Combos + Lightbox + WhatsApp (sin límite y con fallback robusto)

/* ====== Config ====== */
const WHATSAPP_NUMBER = "573053727045";
const PLATFORM        = "PS4";

// 0 = sin límite
const MAX_INDIVIDUALS = 0;

const IMG_ROOT_COMBOS = "img/ps4/combos";
const IMG_ROOT_INDIV  = "img/ps4/individual";
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
const baseHola = "Hola, quiero más información de PS4.";
$ctaWa && ($ctaWa.href = waUrlSmart(baseHola));
$waFab && ($waFab.href = waUrlSmart(baseHola));
document.getElementById("year")?.replaceChildren(new Date().getFullYear());

/* ====== Estado packs con chips ====== */
const selectedByProduct = new Map();

/* ====== Imagenes: candidatos y carga progresiva (con fallback robusto) ====== */
function headerCandidates(p){
  const isCombo = String(p.packType || "").trim() === "combo";
  const ROOT_INDIV  = IMG_ROOT_INDIV;
  const ROOT_COMBOS = IMG_ROOT_COMBOS;

  const out = [];
  const seen = new Set();
  const push = (u) => { if (u && !seen.has(u)) { out.push(u); seen.add(u); } };
  const baseNoExt = (u) => u.replace(/\.(png|jpe?g|webp|jpg\.png)$/i, "");

  // añade variantes de extensión
  const pushWithExts = (u) => {
    const b = baseNoExt(u);
    IMG_EXT_PRIORITY.forEach(ext => push(`${b}${ext}`));
  };

  // 1) portada declarada
  if (p.image && String(p.image).trim() !== "") {
    const img = String(p.image).trim();
    push(img); pushWithExts(img);

    // Fallback cruzado de carpeta (por si está en combos pero el item es individual)
    if (img.includes("/individual/")) {
      const alt = img.replace("/individual/", "/combos/");
      push(alt); pushWithExts(alt);
    }
    if (img.includes("/combos/")) {
      const alt = img.replace("/combos/", "/individual/");
      push(alt); pushWithExts(alt);
    }

    // Si vino sin carpeta, probar en ambas
    if (!img.includes("/")) {
      push(`${ROOT_INDIV}/${img}`);  pushWithExts(`${ROOT_INDIV}/${img}`);
      push(`${ROOT_COMBOS}/${img}`); pushWithExts(`${ROOT_COMBOS}/${img}`);
    }
  }

  // 2) nombre alternativo
  const fileName = p.fileName || p.filename || p.img;
  if (fileName){
    const f = String(fileName).trim().replace(/^\/+/, "");
    push(`${ROOT_INDIV}/${f}`);  pushWithExts(`${ROOT_INDIV}/${f}`);
    push(`${ROOT_COMBOS}/${f}`); pushWithExts(`${ROOT_COMBOS}/${f}`);
  }

  // 3) respaldo {precio}-{variante} en ambas carpetas
  if (p.price){
    const variant = (p.variant || DEFAULT_VARIANT).toString();
    const priceRounded = Math.round(p.price);
    const bInd  = `${ROOT_INDIV}/${priceRounded}-${variant}`;
    const bCom  = `${ROOT_COMBOS}/${priceRounded}-${variant}`;
    IMG_EXT_PRIORITY.forEach(ext => { push(`${bInd}${ext}`); push(`${bCom}${ext}`); });
  }

  const uniq = out.filter(Boolean);
  return uniq.length ? uniq : [FALLBACK_IMG];
}

function loadImageCandidates(img, candidates){
  const list = [...new Set(candidates.filter(Boolean))];
  let i = 0;

  function tryNext(){
    if (i < list.length) {
      const url = list[i++];
      img.dataset.try = `${i}/${list.length}`;
      img.src = url + (url.includes("?") ? "" : `?cb=${Date.now()}`);
    } else {
      img.src = FALLBACK_IMG;
    }
  }

  // Logs de depuración
  const cardId = img.closest('.card')?.id || '(sin id)';
  console.log(`[IMG] ${cardId} candidatos:`, list);

  img.addEventListener("error", () => {
    console.warn(`[IMG] error → siguiente intento (${img.dataset.try})`);
    tryNext();
  });
  img.addEventListener("load", () => {
    console.log(`[IMG] OK ${cardId}:`, img.currentSrc || img.src);
  });

  tryNext();
}

/* ====== Render ====== */
let q = "";
render();
$search?.addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });

function render(){
  // INDIVIDUALES (acepta 'individual' y 'individual-choice')
  const indBase = DB.filter(p =>
    p.platform === PLATFORM &&
    String(p.packType || "").trim().toLowerCase().startsWith("individual") &&
    (!q || p.title.toLowerCase().includes(q) || (p.choices||[]).map(c=>c.title).join(" ").toLowerCase().includes(q))
  );
  const ind = MAX_INDIVIDUALS > 0 ? indBase.slice(0, MAX_INDIVIDUALS) : indBase;

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
      loadImageCandidates(img, candidates);
      img.addEventListener("click", () => openLightbox(img.currentSrc || img.src, img.alt));
    }

    // Packs con chips
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

/* ====== Utilidades de depuración ====== */
window.dumpPs4Individuals = function(){
  const list = (window.PRODUCTS||[]).filter(p =>
    p.platform==='PS4' && String(p.packType||'').toLowerCase().startsWith('individual')
  );
  console.table(list.map(p => ({ id:p.id, title:p.title, packType:p.packType, price:p.price, image:p.image })));
  console.log('Total PS4 individuales:', list.length);
  return list;
};
window.testImg = function(path){
  fetch(path).then(r => console.log(path, '→', r.status)).catch(err => console.error(path, err));
};
window.forceShowAllPs4 = function(){
  const s = document.getElementById('search');
  if (s) s.value = '';
  q = '';
  render();
  console.log('Forzado mostrar todos los PS4 individuales');
};
window.testLast5 = function(){
  [
    'img/ps4/individual/cod-black-ops-6.jpg',
    'img/ps4/individual/ac-mirage.jpg',
    'img/ps4/individual/days-gone.jpg',
    'img/ps4/individual/cod-pack-59999.jpg',
    'img/ps4/individual/fc26-ps4.jpg'
  ].forEach(p => fetch(p).then(r => console.log(p, '→', r.status)));
};