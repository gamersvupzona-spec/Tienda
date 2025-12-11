// products.js — catálogo global

window.PRODUCTS = [
  // ==== PS4 INDIVIDUALES (10) ====
  { id:"ps4-gow",      title:"God of War (2018)",              platform:"PS4", packType:"individual", price:79000,  image:"https://via.placeholder.com/800x450.png?text=God+of+War+%E2%80%94+PS4",            genre:"Acción" },
  { id:"ps4-tlou2",    title:"The Last of Us Part II",         platform:"PS4", packType:"individual", price:89000,  image:"https://via.placeholder.com/800x450.png?text=The+Last+of+Us+Part+II+%E2%80%94+PS4", genre:"Acción" },
  { id:"ps4-uncharted4",title:"Uncharted 4: A Thief's End",    platform:"PS4", packType:"individual", price:69000,  image:"https://via.placeholder.com/800x450.png?text=Uncharted+4+%E2%80%94+PS4",           genre:"Aventura" },
  { id:"ps4-uncharted-ll",title:"Uncharted: The Lost Legacy",  platform:"PS4", packType:"individual", price:59000,  image:"https://via.placeholder.com/800x450.png?text=Uncharted+Lost+Legacy+%E2%80%94+PS4", genre:"Aventura" },
  { id:"ps4-hzd",      title:"Horizon Zero Dawn Complete",     platform:"PS4", packType:"individual", price:59000,  image:"https://via.placeholder.com/800x450.png?text=Horizon+Zero+Dawn+%E2%80%94+PS4",     genre:"Aventura" },
  { id:"ps4-spiderman",title:"Marvel's Spider‑Man",            platform:"PS4", packType:"individual", price:79000,  image:"https://via.placeholder.com/800x450.png?text=Spider-Man+%E2%80%94+PS4",            genre:"Acción" },
  { id:"ps4-fifa23",   title:"FIFA 23",                        platform:"PS4", packType:"individual", price:99000,  image:"https://via.placeholder.com/800x450.png?text=FIFA+23+%E2%80%94+PS4",               genre:"Deportes" },
  { id:"ps4-gtav",     title:"Grand Theft Auto V",             platform:"PS4", packType:"individual", price:59900,  image:"https://via.placeholder.com/800x450.png?text=GTA+V+%E2%80%94+PS4",                 genre:"Acción" },
  { id:"ps4-rdr2",     title:"Red Dead Redemption 2",          platform:"PS4", packType:"individual", price:89900,  image:"https://via.placeholder.com/800x450.png?text=RDR2+%E2%80%94+PS4",                  genre:"Aventura" },
  { id:"ps4-mk11",     title:"Mortal Kombat 11 Ultimate",      platform:"PS4", packType:"individual", price:69900,  image:"https://via.placeholder.com/800x450.png?text=Mortal+Kombat+11+%E2%80%94+PS4",      genre:"Peleas" },

  // ==== PS4 COMBOS (10) — usa tus imágenes locales en img/ps4/combos ====
  { id:"combo-mk11-injustice2-ps4",      title:"Combo PS4: MK11 Ultimate + Injustice 2 Legendary", platform:"PS4", packType:"combo", items:["Mortal Kombat 11 Ultimate","Injustice 2 Legendary Edition"], price:39990, image:"img/ps4/combos/mk11-injustice2.jpg",        genre:"Peleas" },
  { id:"combo-resident-456-ps4",         title:"Combo PS4: Resident Evil 4 + 5 + 6",               platform:"PS4", packType:"combo", items:["Resident Evil 4","Resident Evil 5","Resident Evil 6"],        price:39990, image:"img/ps4/combos/resident-4-5-6.jpg",      genre:"Survival" },
  { id:"combo-uncharted-4-ll-ps4",       title:"Combo PS4: Uncharted 4 + The Lost Legacy",         platform:"PS4", packType:"combo", items:["Uncharted 4: A Thief's End","Uncharted: The Lost Legacy"],     price:39990, image:"img/ps4/combos/uncharted4-lost-legacy.jpg", genre:"Aventura" },
  { id:"combo-mk11-mkxl-ps4",            title:"Combo PS4: MK11 Ultimate + MK XL",                 platform:"PS4", packType:"combo", items:["Mortal Kombat 11 Ultimate","Mortal Kombat XL"],                 price:39990, image:"img/ps4/combos/mk11-mkxl.jpg",           genre:"Peleas" },
  { id:"combo-mega-12-ps4",              title:"Mega Combo PS4 (12 juegos)",                       platform:"PS4", packType:"combo", price:88990, image:"img/ps4/combos/mega-12.jpg",                        genre:"Mix" },
  { id:"combo-mix-9-ps4",                title:"Combo PS4 (9 juegos)",                             platform:"PS4", packType:"combo", price:59990, image:"img/ps4/combos/mix-9.jpg",                          genre:"Mix" },
  { id:"combo-mix-5-ps4",                title:"Combo PS4 (5 juegos)",                             platform:"PS4", packType:"combo", price:44990, image:"img/ps4/combos/mix-5.jpg",                          genre:"Mix" },
  { id:"combo-breakpoint-mk11-dbx2-ps4", title:"Combo PS4: Breakpoint + MK11 + DB Xenoverse 2",    platform:"PS4", packType:"combo", items:["Ghost Recon Breakpoint","Mortal Kombat 11","Dragon Ball Xenoverse 2"], price:47990, image:"img/ps4/combos/breakpoint-mk11-dbx2.jpg", genre:"Acción" },
  { id:"combo-castlevania-re4-ps4",      title:"Combo PS4: Castlevania Requiem + Resident Evil 4", platform:"PS4", packType:"combo", items:["Castlevania Requiem","Resident Evil 4"],                      price:37990, image:"img/ps4/combos/castlevania-re4.jpg",      genre:"Acción" },
  { id:"combo-crash-ps4",                title:"Combo PS4: Crash N. Sane Trilogy + CTR Nitro‑Fueled", platform:"PS4", packType:"combo", items:["Crash Bandicoot N. Sane Trilogy","Crash Team Racing Nitro‑Fueled"], price:31990, image:"img/ps4/combos/crash-ctr.jpg",        genre:"Plataformas" },

  // ==== PS5 (ejemplos para que veas tarjetas en PS5 también) ====
  { id:"ps5-gowr",     title:"God of War Ragnarök",           platform:"PS5", packType:"individual", price:169000, image:"https://via.placeholder.com/800x450.png?text=GOW+Ragnarok+%E2%80%94+PS5", genre:"Acción" },
  { id:"ps5-spiderman2", title:"Marvel's Spider‑Man 2",       platform:"PS5", packType:"individual", price:189000, image:"https://via.placeholder.com/800x450.png?text=Spider-Man+2+%E2%80%94+PS5", genre:"Acción" },
  { id:"ps5-combo-aventura", title:"Combo PS5: Miles Morales + Ratchet & Clank", platform:"PS5", packType:"combo", items:["Spider‑Man: Miles Morales","Ratchet & Clank Rift Apart"], price:219000, image:"https://via.placeholder.com/800x450.png?text=Combo+Aventura+%E2%80%94+PS5", genre:"Aventura" }
];