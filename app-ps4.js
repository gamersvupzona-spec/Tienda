// app-ps4.js — PS4 con filtros, 10 + 10 y tarjetas solo con imagen OK
const WHATSAPP_NUMBER = "573053727045"; // 57 + tus 10 dígitos
const PLATFORM = "PS4";

// Detectar móvil vs escritorio
const isMobile = /Android|iPhone|iPad|iPod|Windows Phone|Mobi/i.test(navigator.userAgent);
const waUrlSmart = (text) => {
  const t = encodeURIComponent(text);
  return isMobile
    ? `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${t}`;
};

// Catálogo global
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
const $year = document.getElementById("year");
if ($year) $year.textContent = new Date().getFullYear();

// Log de verificación
console.log("PS4 | total:", DB.length,
  "| indiv:", DB.filter(p=>p.platform===PLATFORM && p.packType==="individual").length,
  "| combos:", DB.filter(p=>p.platform===PLATFORM && p.packType==="combo").length
);

// Estado + render
let q = "";
render();
$search?.addEventListener("input", e => { q = e.target.value.trim().toLowerCase(); render(); });

// Render que excluye productos sin imagen
function render(){
  const ind  = DB.filter(p =>
    p.platform === PLATFORM &&
    p.packType === "individual" &&
    p.title.toLowerCase().includes(q) &&
    p.image && p.image.trim() !== ""
  ).slice(0, 10);

  const comb = DB.filter(p =>
    p.platform === PLATFORM &&
    p.packType === "combo" &&
    p.title.toLowerCase().includes(q) &&
    p.image && p.image.trim() !== ""
  ).slice(0, 10);

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

  // Quitar tarjetas si la imagen falla
  attachImageGuards($grid, $empty);

  // Botón WhatsApp
  list.forEach(p => {
    $grid.querySelector(`button[data-id="${p.id}"]`)
      ?.addEventListener("click", () => wa(p));
  });
}

function attachImageGuards($grid, $empty){
  const imgs = $grid.querySelectorAll("img");
  imgs.forEach(img => {
    const remove = () => {
      const card = img.closest(".card");
      card?.remove();
      if ($grid.children.length === 0) $empty.hidden = false;
    };
    img.addEventListener("error", remove, { once:true });
    if (img.complete && img.naturalWidth === 0) remove();
  });
}

function cardHTML(p){
  const isCombo = p.packType === "combo";
  const itemsLine = isCombo && p.items?.length ? `Incluye: ${p.items.join(", ")}` : "";
  return `
    <article class="card" id="${p.id}">
      <img src="${p.image}" alt="${p.title}" loading="lazy" />
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
  const imgUrl = p.image.startsWith("http") ? p.image : new URL(p.image, window.location.origin).href;
  const msg = [
    imgUrl,
    `Hola, quiero este ${isCombo ? "combo" : "juego"}:`,
    `${p.title}`,
    `Consola: ${p.platform}`,
    ...(includeLine ? [includeLine] : []),
    `Precio: ${fmtCOP.format(p.price)}`
  ].join("\n");
  window.open(waUrlSmart(msg), "_blank");
}