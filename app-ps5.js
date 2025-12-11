// app-ps5.js — mismo comportamiento para PS5
const WHATSAPP_NUMBER = "573053727045";
const PUBLIC_ORIGIN   = "https://gamersvupzona-spec.github.io/Tienda";
const PLATFORM        = "PS5";

const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|Mobi/i.test(navigator.userAgent);
const waUrlSmart = (text) => {
  const t = encodeURIComponent(text);
  return isMobile
    ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`;
};

const toPublicUrl = (src) => src?.startsWith("http") ? src : new URL(src, PUBLIC_ORIGIN + "/").href;

function imgOk(url) {
  return new Promise((resolve) => {
    const img = new Image();
    let done = false;
    const end = (ok) => { if (!done) { done = true; resolve(!!ok); } };
    const timer = setTimeout(() => end(false), 6000);
    img.onload  = () => { clearTimeout(timer); end(img.naturalWidth > 0); };
    img.onerror = () => { clearTimeout(timer); end(false); };
    img.src = url;
  });
}

async function keepOnlyWithImage(list) {
  const tested = await Promise.all(list.map(async (p) => {
    if (!p.image) return null;
    const url = toPublicUrl(p.image);
    const ok  = await imgOk(url);
    return ok ? { ...p, __imgUrl: url } : null;
  }));
  return tested.filter(Boolean);
}

const DB = window.PRODUCTS || [];

const $gridInd    = document.getElementById("grid-individual");
const $gridCombo  = document.getElementById("grid-combos");
const $emptyInd   = document.getElementById("empty-individual");
const $emptyCombo = document.getElementById("empty-combos");
const $search     = document.getElementById("search");
const $ctaWa      = document.getElementById("cta-wa");
const $waFab      = document.getElementById("wa-fab");

const fmtCOP = new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0});

const baseHola = "Hola, quiero más información.";
if ($ctaWa) $ctaWa.href = waUrlSmart(baseHola);
if ($waFab) $waFab.href = waUrlSmart(baseHola);
document.getElementById("year")?.replaceChildren(new Date().getFullYear());

console.log("PS5 | total:", DB.length,
  "| indiv:", DB.filter(p=>p.platform===PLATFORM && p.packType==="individual").length,
  "| combos:", DB.filter(p=>p.platform===PLATFORM && p.packType==="combo").length
);

let q = "";
render();
$search?.addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });

async function render(){
  const baseInd  = DB.filter(p => p.platform===PLATFORM && p.packType==="individual" && p.title.toLowerCase().includes(q)).slice(0, 10);
  const baseComb = DB.filter(p => p.platform===PLATFORM && p.packType==="combo"      && p.title.toLowerCase().includes(q)).slice(0, 10);

  const [ind, comb] = await Promise.all([
    keepOnlyWithImage(baseInd),
    keepOnlyWithImage(baseComb)
  ]);

  paint(ind,  $gridInd,  $emptyInd);
  paint(comb, $gridCombo, $emptyCombo);
}

function paint(list, $grid, $empty){
  if(!$grid || !$empty) return;

  if (!list.length) {
    $grid.innerHTML = "";
    $empty.hidden = false;
    return;
  }

  $empty.hidden = true;
  $grid.innerHTML = list.map(cardHTML).join("");

  list.forEach(p => {
    $grid.querySelector(`button[data-id="${p.id}"]`)
      ?.addEventListener("click", () => wa(p));
  });
}

function cardHTML(p){
  const isCombo = p.packType === "combo";
  const itemsLine = isCombo && p.items?.length ? `Incluye: ${p.items.join(", ")}` : "";
  const src = p.__imgUrl || toPublicUrl(p.image);
  return `
    <article class="card" id="${p.id}">
      <img src="${src}" alt="${p.title}" loading="lazy" />
      <div class="info">
        <div class="title">${p.title}</div>
        <div class="tags">
          <span class="tag">${PLATFORM}</span>
          <span class="tag">${isCombo ? "Combo" : "Individual"}</span>
          ${p.genre ? `<span class="tag">${p.genre}</span>` : ""}
        </div>
        ${isCombo ? `<div class="items">${itemsLine}</div>` : `<div class="items"></div>`}
        <div class="price">${fmtCOP.format(p.price)}</div>
        <button class="btn wa" data-id="${p.id}">📲 Pedir por WhatsApp</button>
      </div>
    </article>
  `;
}

function wa(p){
  const isCombo = p.packType==="combo";
  const includeLine = isCombo && p.items?.length ? `Incluye: ${p.items.join(", ")}` : "";
  const imgUrl = p.__imgUrl || toPublicUrl(p.image);
  const msg = [
    imgUrl,
    `Hola, quiero este ${isCombo ? "combo" : "juego"}:`,
    p.title,
    `Consola: ${p.platform}`,
    ...(includeLine ? [includeLine] : []),
    `Precio: ${fmtCOP.format(p.price)}`
  ].join("\n");
  window.open(waUrlSmart(msg), "_blank");
}
