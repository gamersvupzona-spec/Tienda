// app-ps4.js — mostrar solo tarjetas con imagen OK y 10 + 10
const WHATSAPP_NUMBER = "573053727045";               // tu número
const PUBLIC_ORIGIN   = "https://gamersvupzona-spec.github.io/Tienda"; // tu dominio de GitHub Pages
const PLATFORM        = "PS4";

const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|Mobi/i.test(navigator.userAgent);
const waUrlSmart = (text) => {
  const t = encodeURIComponent(text);
  return isMobile
    ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`;
};

// Convierte rutas locales (img/...) a URL pública HTTPS
const toPublicUrl = (src) => src?.startsWith("http") ? src : new URL(src, PUBLIC_ORIGIN + "/").href;

// Verifica si una imagen carga correctamente (timeout 6s)
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

// Filtra una lista dejando solo las que tienen imagen válida
async function keepOnlyWithImage(list) {
  const tested = await Promise.all(list.map(async (p) => {
    if (!p.image) return null;
    const url = toPublicUrl(p.image);
    const ok  = await imgOk(url);
    return ok ? { ...p, __imgUrl: url } : null;
  }));
  return tested.filter(Boolean);
}

// Catálogo
const DB = window.PRODUCTS || [];

// DOM
const $gridInd    = document.getElementById("grid-individual");
const $gridCombo  = document.getElementById("grid-combos");
const $emptyInd   = document.getElementById("empty-individual");
const $emptyCombo = document.getElementById("empty-combos");
const $search     = document.getElementById("search");
const $ctaWa      = document.getElementById("cta-wa");
const $waFab      = document.getElementById("wa-fab");

// Utils
const fmtCOP = new Intl.NumberFormat("es-CO",{style:"currency",currency:"COP",maximumFractionDigits:0});

// Enlaces WhatsApp globales
const baseHola = "Hola, quiero más información.";
if ($ctaWa) $ctaWa.href = waUrlSmart(baseHola);
if ($waFab) $waFab.href = waUrlSmart(baseHola);

// Año
document.getElementById("year")?.replaceChildren(new Date().getFullYear());

// Log de verificación
console.log("PS4 | total:", DB.length,
  "| indiv:", DB.filter(p=>p.platform===PLATFORM && p.packType==="individual").length,
  "| combos:", DB.filter(p=>p.platform===PLATFORM && p.packType==="combo").length
);

// Estado + render
let q = "";
render();
$search?.addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });

// Render asíncrono: primero filtramos por datos, luego validamos imagen
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

  // Botón WhatsApp
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

  const imgUrl = p.__imgUrl || toPublicUrl(p.image); // pública para miniatura
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
