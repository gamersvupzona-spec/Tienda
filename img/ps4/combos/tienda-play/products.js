// products.js — Catálogo global PS4 + PS5 (completo)

window.PRODUCTS = [
  // ==== PS4 COMBOS (ANTERIORES) ====
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

  // ==== PS4 COMBOS (NUEVOS) ====
  { id:"combo-farcry4-primal-ps4",       title:"Combo PS4: Far Cry 4 + Far Cry Primal",            platform:"PS4", packType:"combo", items:["Far Cry 4","Far Cry Primal"], price:28990, image:"img/ps4/combos/farcry4-primal.jpg", genre:"Acción", isNew:true },
  { id:"combo-gta5-rdr2-ps4",            title:"Combo PS4: GTA V + Red Dead Redemption 2",         platform:"PS4", packType:"combo", items:["Grand Theft Auto V","Red Dead Redemption 2"], price:72990, image:"img/ps4/combos/gta5-rdr2.jpg", genre:"Acción", isNew:true },
  { id:"combo-mix-9b-ps4",               title:"Combo PS4 (9 juegos)",                             platform:"PS4", packType:"combo", items:["GTA V","Watch Dogs","Assassin’s Creed Origins","Mafia I Definitive","Mafia II Definitive","Mafia III Definitive","Mortal Kombat","Just Cause 3","Star Wars Battlefront II"], price:66990, image:"img/ps4/combos/mix-9b.jpg", genre:"Mix", isNew:true },
  { id:"combo-legion-kof15-ps4",         title:"Combo PS4: Watch Dogs Legion + KOF XV",            platform:"PS4", packType:"combo", items:["Watch Dogs: Legion","The King of Fighters XV"], price:44990, image:"img/ps4/combos/legion-kof15.jpg", genre:"Acción", isNew:true },
  { id:"combo-lego-4-ps4",               title:"Combo PS4: LEGO (4 juegos)",                       platform:"PS4", packType:"combo", items:["LEGO DC Super‑Villains","LEGO Batman 3: Beyond Gotham","The LEGO Movie Videogame","The LEGO Movie 2 Videogame"], price:39990, image:"img/ps4/combos/lego-4.jpg", genre:"Familia", isNew:true },
  { id:"combo-mafia-ii-iii-ps4",         title:"Combo PS4: Mafia II + Mafia III (Definitive)",     platform:"PS4", packType:"combo", items:["Mafia II Definitive Edition","Mafia III Definitive Edition"], price:39960, image:"img/ps4/combos/mafia-ii-iii.jpg", genre:"Acción", isNew:true },
  { id:"combo-mix-5b-ps4",               title:"Combo PS4 (5 juegos)",                             platform:"PS4", packType:"combo", items:["Dragon’s Dogma: Dark Arisen","Mortal Kombat 11","Just Cause 3 Gold Edition","TT Isle of Man","Mafia Definitive Edition"], price:44990, image:"img/ps4/combos/mix-5b.jpg", genre:"Acción", isNew:true },
  { id:"combo-resident-2-3-4-ps4",       title:"Combo PS4: Resident Evil 2 + 3 + 4",               platform:"PS4", packType:"combo", items:["Resident Evil 2","Resident Evil 3","Resident Evil 4"], price:110990, image:"img/ps4/combos/resident-2-3-4.jpg", genre:"Survival", isNew:true },
  { id:"combo-re-revelations-ps4",       title:"Combo PS4: RE Revelations 1 + 2",                  platform:"PS4", packType:"combo", items:["Resident Evil Revelations","Resident Evil Revelations 2"], price:33990, image:"img/ps4/combos/re-revelations-1-2.jpg", genre:"Survival", isNew:true },
  { id:"combo-homefront-riders-ps4",     title:"Combo PS4: Homefront The Revolution + Riders Republic", platform:"PS4", packType:"combo", items:["Homefront: The Revolution","Riders Republic"], price:36990, image:"img/ps4/combos/homefront-riders.jpg", genre:"Acción", isNew:true },

  // ==== PS4 INDIVIDUALES — PACKS "CADA UNO" (9) ====
  {
    id:"ps4-pack-19960-a", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:19960, image:"img/ps4/individual/19960-a.jpg.png", variant:"a",
    choices:[
      { id:"ride2", title:"Ride 2", image:"img/ps4/individual/ride2.jpg" },
      { id:"saints-row", title:"Saints Row", image:"img/ps4/individual/saints-row.jpg" },
      { id:"slime", title:"Slime Rancher", image:"img/ps4/individual/slime-rancher.jpg" },
      { id:"steep", title:"Steep", image:"img/ps4/individual/steep.jpg" },
      { id:"warriors", title:"The Warriors", image:"img/ps4/individual/the-warriors.jpg" },
      { id:"unravel2", title:"Unravel Two", image:"img/ps4/individual/unravel-two.jpg" }
    ], genre:"Mix"
  },
  {
    id:"ps4-pack-19990-a", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:19990, image:"img/ps4/individual/19990-a.jpg.png", variant:"a",
    choices:[
      { id:"anthem", title:"Anthem", image:"img/ps4/individual/anthem.jpg" },
      { id:"b4b", title:"Back 4 Blood", image:"img/ps4/individual/back4blood.jpg" },
      { id:"arkham", title:"Batman: Arkham Knight", image:"img/ps4/individual/arkham-knight.jpg" },
      { id:"bl3", title:"Borderlands 3", image:"img/ps4/individual/borderlands3.jpg" },
      { id:"bully", title:"Bully", image:"img/ps4/individual/bully.jpg" },
      { id:"control", title:"Control Ultimate Edition", image:"img/ps4/individual/control-ultimate.jpg" }
    ], genre:"Mix"
  },
  {
    id:"ps4-pack-34960-a", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:34960, image:"img/ps4/individual/34960-a.jpg.png", variant:"a",
    choices:[
      { id:"bloodborne", title:"Bloodborne", image:"img/ps4/individual/bloodborne.jpg" },
      { id:"dbz-kakarot", title:"Dragon Ball Z Kakarot", image:"img/ps4/individual/dbz-kakarot.jpg" },
      { id:"dl2", title:"Dying Light 2", image:"img/ps4/individual/dying-light-2.jpg" },
      { id:"guardians", title:"Marvel's Guardians of the Galaxy", image:"img/ps4/individual/guardians.jpg" },
      { id:"hitman3", title:"Hitman 3", image:"img/ps4/individual/hitman-3.jpg" },
      { id:"infamous-ss", title:"inFAMOUS Second Son", image:"img/ps4/individual/infamous-second-son.jpg" }
    ], genre:"Acción"
  },
  {
    id:"ps4-pack-19990-b", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:19990, image:"img/ps4/individual/19990-b.jpg.png", variant:"b",
    choices:[
      { id:"dying-light", title:"Dying Light", image:"img/ps4/individual/dying-light.jpg" },
      { id:"ffxv", title:"Final Fantasy XV", image:"img/ps4/individual/final-fantasy-xv.jpg" },
      { id:"mec", title:"Mirror's Edge Catalyst", image:"img/ps4/individual/mirrors-edge-catalyst.jpg" },
      { id:"mkx", title:"Mortal Kombat X", image:"img/ps4/individual/mkx.jpg" },
      { id:"overcooked", title:"Overcooked!", image:"img/ps4/individual/overcooked.jpg" },
      { id:"payday2", title:"Payday 2", image:"img/ps4/individual/payday2.jpg" }
    ], genre:"Mix"
  },
  {
    id:"ps4-pack-34960-b", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:34960, image:"img/ps4/individual/34960-b.jpg.png", variant:"b",
    choices:[
      { id:"mk11u", title:"Mortal Kombat 11 Ultimate", image:"img/ps4/individual/mk11-ultimate.jpg" },
      { id:"mesx6", title:"Monster Energy Supercross 6", image:"img/ps4/individual/mesx6.jpg" },
      { id:"sotc", title:"Shadow of the Colossus", image:"img/ps4/individual/shadow-colossus.jpg" },
      { id:"se5", title:"Sniper Elite 5", image:"img/ps4/individual/sniper-elite-5.jpg" },
      { id:"kofxv", title:"The King of Fighters XV", image:"img/ps4/individual/kofxv.jpg" },
      { id:"tlou-rem", title:"The Last of Us Remastered", image:"img/ps4/individual/tlou-remastered.jpg" }
    ], genre:"Acción"
  },
  {
    id:"ps4-pack-34960-c", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:34960, image:"img/ps4/individual/34960-c.jpg.png", variant:"c",
    choices:[
      { id:"truck-driver", title:"Truck Driver", image:"img/ps4/individual/truck-driver.jpg" },
      { id:"wd2", title:"Watch Dogs 2", image:"img/ps4/individual/watch-dogs-2.jpg" },
      { id:"wd-legion", title:"Watch Dogs: Legion", image:"img/ps4/individual/watch-dogs-legion.jpg" },
      { id:"wrc9", title:"WRC 9", image:"img/ps4/individual/wrc9.jpg" }
    ], genre:"Acción"
  },
  {
    id:"ps4-pack-39960-a", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:39960, image:"img/ps4/individual/39960-a.jpg.png", variant:"a",
    choices:[
      { id:"rdr2", title:"Red Dead Redemption 2", image:"img/ps4/individual/rdr2.jpg" },
      { id:"spider-mm", title:"Spider‑Man: Miles Morales", image:"img/ps4/individual/spiderman-mm.jpg" },
      { id:"motorfest", title:"The Crew Motorfest", image:"img/ps4/individual/motorfest.jpg" },
      { id:"wrc10", title:"WRC 10", image:"img/ps4/individual/wrc10.jpg" }
    ], genre:"Acción"
  },
  {
    id:"ps4-pack-39960-b", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:39960, image:"img/ps4/individual/39960-b.jpg.png", variant:"b",
    choices:[
      { id:"ac-odyssey", title:"Assassin's Creed Odyssey", image:"img/ps4/individual/ac-odyssey.jpg" },
      { id:"demon-slayer", title:"Demon Slayer: The Hinokami Chronicles", image:"img/ps4/individual/demon-slayer-hinokami.jpg" },
      { id:"gta5", title:"Grand Theft Auto V", image:"img/ps4/individual/gta5.jpg" },
      { id:"gta-trilogy", title:"GTA: The Trilogy — Definitive Edition", image:"img/ps4/individual/gta-trilogy-definitive.jpg" },
      { id:"hogwarts", title:"Hogwarts Legacy", image:"img/ps4/individual/hogwarts-legacy.jpg" },
      { id:"avengers", title:"Marvel's Avengers", image:"img/ps4/individual/avengers.jpg" }
    ], genre:"Acción"
  },
  {
    id:"ps4-pack-39999-a", title:"PS4 Individual — Cada uno", platform:"PS4", packType:"individual-choice",
    price:39999, image:"img/ps4/individual/39999-a.jpg.png", variant:"a",
    choices:[
      { id:"dmc5", title:"Devil May Cry 5", image:"img/ps4/individual/dmc5.jpg" },
      { id:"gow-2018", title:"God of War (2018)", image:"img/ps4/individual/gow-2018.jpg" },
      { id:"doom-et", title:"DOOM Eternal", image:"img/ps4/individual/doom-eternal.jpg" },
      { id:"ac-val", title:"Assassin's Creed Valhalla", image:"img/ps4/individual/ac-valhalla.jpg" },
      { id:"nfs-heat", title:"Need for Speed Heat", image:"img/ps4/individual/nfs-heat.jpg" },
      { id:"ew2", title:"The Evil Within 2", image:"img/ps4/individual/evil-within-2.jpg" }
    ], genre:"Acción"
  },

  // Suelto adicional (10º del bloque de packs)
  { id:"ps4-lies-of-p-66960", title:"Lies of P", platform:"PS4", packType:"individual", price:66960, image:"img/ps4/individual/66960-lies-of-p.jpg", genre:"Acción", isNew:true },

  // ==== PS4 INDIVIDUALES — 5 cuadros nuevos (BO6, Mirage, Days Gone, Pack COD, FC26) ====
  { id:"ps4-cod-bo6-92999", title:"Call of Duty: Black Ops 6", platform:"PS4", packType:"individual", price:92999, image:"img/ps4/individual/cod-black-ops-6.jpg", genre:"Acción", isNew:true },
  { id:"ps4-ac-mirage-44960", title:"Assassin's Creed Mirage", platform:"PS4", packType:"individual", price:44960, image:"img/ps4/individual/ac-mirage.jpg", genre:"Acción", isNew:true },
  { id:"ps4-days-gone-79999", title:"Days Gone", platform:"PS4", packType:"individual", price:79999, image:"img/ps4/individual/days-gone.jpg", genre:"Acción", isNew:true },
  {
    id:"ps4-pack-59999-cod", title:"PS4 Individual — Cada uno (Call of Duty)", platform:"PS4", packType:"individual-choice",
    price:59999, image:"img/ps4/individual/cod-pack-59999.jpg", variant:"cod",
    choices:[
      { id:"cod-aw", title:"Call of Duty: Advanced Warfare" },
      { id:"cod-bo3", title:"Call of Duty: Black Ops III" },
      { id:"cod-ghosts", title:"Call of Duty: Ghosts" },
      { id:"cod-iw", title:"Call of Duty: Infinite Warfare" },
      { id:"cod-mw-2019", title:"Call of Duty: Modern Warfare (2019)" },
      { id:"cod-ww2", title:"Call of Duty: WWII" }
    ],
    genre:"Acción", isNew:true
  },
  { id:"ps4-fc26-59999", title:"EA Sports FC 26", platform:"PS4", packType:"individual", price:59999, image:"img/ps4/individual/fc26-ps4.jpg", genre:"Deportes", isNew:true },

  // ==== PS5 COMBOS (BASE) ====
  { id:"ps5-combo-29990-fifa-nfs-evil", title:"Combazo PS5 29.990: FIFA 21 + NFS Rivals + The Evil Within", platform:"PS5", packType:"combo", price:29990, image:"img/ps5/combos/29990-fifa-nfs-evil.png", items:["FIFA 21","Need for Speed Rivals","The Evil Within"], genre:"Mix", isNew:true },
  { id:"ps5-combo-19960-homefront-outlast", title:"Combo PS5 19.960: Homefront + Outlast", platform:"PS5", packType:"combo", price:19960, image:"img/ps5/combos/19960-homefront-outlast.png", items:["Homefront: The Revolution","Outlast"], genre:"Acción", isNew:true },
  { id:"ps5-combo-27990-nfs-batman", title:"Combo PS5 27.990: NFS Payback + Batman", platform:"PS5", packType:"combo", price:27990, image:"img/ps5/combos/27990-nfs-batman.png", items:["Need for Speed Payback","Batman: Arkham Knight"], genre:"Acción", isNew:true },
  { id:"ps5-combo-47990-squadrons-mk11-jc3-tt-mafia", title:"Combazo PS5 47.990: Squadrons + MK11 + Just Cause 3 + TT + Mafia", platform:"PS5", packType:"combo", price:47990, image:"img/ps5/combos/47990-squadrons-mk11-jc3-tt-mafia.png", items:["Star Wars: Squadrons","Mortal Kombat 11","Just Cause 3","TT Isle of Man","Mafia"], genre:"Acción" },
  { id:"ps5-combo-59990-mk1-mk11", title:"Combo PS5 59.990: Mortal Kombat 1 + Mortal Kombat 11", platform:"PS5", packType:"combo", price:59990, image:"img/ps5/combos/59990-mk1-mk11.png", items:["Mortal Kombat 1","Mortal Kombat 11"], genre:"Peleas" },
  { id:"ps5-combo-27960-lego-worlds-avengers", title:"Combo PS5 27.960: LEGO Worlds + LEGO Avengers", platform:"PS5", packType:"combo", price:27960, image:"img/ps5/combos/27960-lego-worlds-avengers.png", items:["LEGO Worlds","LEGO Marvel's Avengers"], genre:"Familia" },
  { id:"ps5-combo-19960-justcause3-dirt", title:"Combo PS5 19.960: Just Cause 3 + Dirt Rally", platform:"PS5", packType:"combo", price:19960, image:"img/ps5/combos/19960-justcause3-dirt.png", items:["Just Cause 3","DiRT Rally"], genre:"Acción" },
  { id:"ps5-combo-73990-gta-rdr2", title:"Combazo PS5 73.990: GTA V + Red Dead Redemption 2", platform:"PS5", packType:"combo", price:73990, image:"img/ps5/combos/73990-gta-rdr2.png", items:["Grand Theft Auto V","Red Dead Redemption 2"], genre:"Acción" },
  { id:"ps5-combo-25960-fc4-revelations", title:"Combo PS5 25.960: Far Cry 4 + Resident Evil Revelations", platform:"PS5", packType:"combo", price:25960, image:"img/ps5/combos/25960-fc4-revelations.png", items:["Far Cry 4","Resident Evil Revelations"], genre:"Acción" },
  { id:"ps5-combo-33960-doom-rayman-wolf-deadrising2", title:"Combo PS5 33.960: Doom + Rayman + Wolfenstein + Dead Rising 2", platform:"PS5", packType:"combo", price:33960, image:"img/ps5/combos/33960-doom-rayman-wolf-deadrising2.png", items:["DOOM","Rayman Legends","Wolfenstein: The New Order","Dead Rising 2"], genre:"Acción" },

  // ==== PS5 COMBOS (EXTRA) ====
  { id:"ps5-combo-23960-payday2-dirt2", title:"Combo PS5 23.960: PAYDAY 2 + DiRT Rally 2.0", platform:"PS5", packType:"combo", price:23960, image:"img/ps5/combos/23960-payday2-dirt2.png", items:["PAYDAY 2: Crimewave Edition","DiRT Rally 2.0"], genre:"Acción", isNew:true },
  { id:"ps5-combo-92990-spiderman-remastered-mm", title:"Combazo PS5 92.990: Spider‑Man Remastered + Miles Morales", platform:"PS5", packType:"combo", price:92990, image:"img/ps5/combos/92990-spiderman-remastered-mm.png", items:["Marvel's Spider‑Man Remastered","Marvel's Spider‑Man: Miles Morales"], genre:"Acción", isNew:true },
  { id:"ps5-combo-37990-resident-4-5-6", title:"Combazo PS5 37.990: Resident Evil 4 + 5 + 6", platform:"PS5", packType:"combo", price:37990, image:"img/ps5/combos/37990-resident-4-5-6.png", items:["Resident Evil 4","Resident Evil 5","Resident Evil 6"], genre:"Survival", isNew:true },
  { id:"ps5-combo-59990-origins-mk11-nfs-rr-atv", title:"Combazo PS5 59.990: AC Origins Gold + MK11 + NFS HP Remastered + Riders Republic + ATV", platform:"PS5", packType:"combo", price:59990, image:"img/ps5/combos/59990-origins-mk11-nfs-rr-atv.png", items:["Assassin's Creed Origins Gold","Mortal Kombat 11","NFS Hot Pursuit Remastered","Riders Republic","ATV Drift & Tricks"], genre:"Acción", isNew:true },
  { id:"ps5-combo-93990-mega-14", title:"Mega Combo PS5 (14 juegos) — 93.990", platform:"PS5", packType:"combo", price:93990, image:"img/ps5/combos/93990-mega-14.png", genre:"Mix", isNew:true },
  { id:"ps5-combo-29990-contra-toystory3", title:"Combazo PS5 29.990: Contra Collection + Toy Story 3", platform:"PS5", packType:"combo", price:29990, image:"img/ps5/combos/29990-contra-toystory3.png", items:["Contra Collection","Toy Story 3"], genre:"Arcade", isNew:true },
  { id:"ps5-combo-55990-breakpoint-mk11-dbx2", title:"Combazo PS5 55.990: Ghost Recon Breakpoint + MK11 + DB Xenoverse 2", platform:"PS5", packType:"combo", price:55990, image:"img/ps5/combos/55990-breakpoint-mk11-dbx2.png", items:["Ghost Recon Breakpoint (Deluxe)","Mortal Kombat 11","Dragon Ball Xenoverse 2"], genre:"Acción", isNew:true },

  // ==== PS5 INDIVIDUALES ====
  { id:"ps5-fc26-111000", title:"EA Sports FC 26", platform:"PS5", packType:"individual", price:111000, image:"img/ps5/individual/fc26.jpg", genre:"Deportes", isNew:true },

  { id:"ps5-pack-19990-a", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:19990, image:"img/ps5/individual/19990-a.png",
    choices:[
      { id:"anthem",       title:"Anthem",                       image:"img/ps5/individual/anthem.jpg" },
      { id:"ac-unity",     title:"Assassin's Creed Unity",       image:"img/ps5/individual/ac-unity.jpg" },
      { id:"ac-syndicate", title:"Assassin's Creed Syndicate",   image:"img/ps5/individual/ac-syndicate.jpg" },
      { id:"back4blood",   title:"Back 4 Blood",                 image:"img/ps5/individual/back4blood.jpg" },
      { id:"arkham",       title:"Batman: Arkham Knight",        image:"img/ps5/individual/arkham-knight.jpg" },
      { id:"bf1",          title:"Battlefield 1",                image:"img/ps5/individual/battlefield-1.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-19990-b", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:19990, image:"img/ps5/individual/19990-b.png",
    choices:[
      { id:"bf4",        title:"Battlefield 4",                  image:"img/ps5/individual/battlefield-4.jpg" },
      { id:"bf-hardline",title:"Battlefield Hardline Deluxe",    image:"img/ps5/individual/battlefield-hardline.jpg" },
      { id:"dirt-rally2",title:"DiRT Rally 2.0",                 image:"img/ps5/individual/dirt-rally-2.jpg" },
      { id:"bf5",        title:"Battlefield V",                  image:"img/ps5/individual/battlefield-5.jpg" },
      { id:"dishonored2",title:"Dishonored 2",                   image:"img/ps5/individual/dishonored-2.jpg" },
      { id:"dmc-hd",     title:"Devil May Cry HD Collection",    image:"img/ps5/individual/dmc-hd-collection.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-19990-c", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:19990, image:"img/ps5/individual/19990-c.png",
    choices:[
      { id:"doom-2016",   title:"DOOM (2016)",                    image:"img/ps5/individual/doom-2016.jpg" },
      { id:"dying-light", title:"Dying Light",                    image:"img/ps5/individual/dying-light.jpg" },
      { id:"fc4",         title:"Far Cry 4",                      image:"img/ps5/individual/far-cry-4.jpg" },
      { id:"fifa23",      title:"FIFA 23",                        image:"img/ps5/individual/fifa-23.jpg" },
      { id:"fifa22",      title:"FIFA 22",                        image:"img/ps5/individual/fifa-22.jpg" },
      { id:"fifa21",      title:"FIFA 21",                        image:"img/ps5/individual/fifa-21.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-19990-j", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:19990, image:"img/ps5/individual/19990-j.png",
    choices:[
      { id:"sniper-elite-4",      title:"Sniper Elite 4",                   image:"img/ps5/individual/sniper-elite-4.jpg" },
      { id:"sniper-elite-v2-rem", title:"Sniper Elite V2 Remastered",       image:"img/ps5/individual/sniper-elite-v2-remastered.jpg" },
      { id:"sonic-forces",        title:"Sonic Forces",                     image:"img/ps5/individual/sonic-forces.jpg" },
      { id:"tennis-world-tour",   title:"Tennis World Tour",                image:"img/ps5/individual/tennis-world-tour.jpg" },
      { id:"evil-within",         title:"The Evil Within",                  image:"img/ps5/individual/evil-within.jpg" },
      { id:"the-king-of-fighters",title:"The King of Fighters",             image:"img/ps5/individual/the-king-of-fighters.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-19990-k", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:19990, image:"img/ps5/individual/19990-k.png",
    choices:[
      { id:"titanfall-2-ultimate", title:"Titanfall 2: Ultimate Edition",   image:"img/ps5/individual/titanfall-2-ultimate.jpg" },
      { id:"tt-isle-of-man",       title:"TT Isle of Man",                  image:"img/ps5/individual/tt-isle-of-man.jpg" },
      { id:"unravel-two",          title:"Unravel Two",                     image:"img/ps5/individual/unravel-two.jpg" },
      { id:"yakuza-0",             title:"Yakuza 0",                        image:"img/ps5/individual/yakuza-0.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-34990-a", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:34990, image:"img/ps5/individual/34990-a.png",
    choices:[
      { id:"ao-tennis-2",        title:"AO Tennis 2",                        image:"img/ps5/individual/ao-tennis-2.jpg" },
      { id:"tekken-7-deluxe",    title:"Tekken 7 Deluxe Edition",            image:"img/ps5/individual/tekken-7-deluxe.jpg" },
      { id:"dark-souls-2",       title:"Dark Souls II",                      image:"img/ps5/individual/dark-souls-2.jpg" },
      { id:"dbz-bt3",            title:"Dragon Ball Z: Budokai Tenkaichi 3", image:"img/ps5/individual/dbz-budokai-tenkaichi-3.jpg" },
      { id:"forspoken",          title:"Forspoken",                          image:"img/ps5/individual/forspoken.jpg" },
      { id:"gow-3-remastered",   title:"God of War III Remastered",          image:"img/ps5/individual/god-of-war-3-remastered.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-34990-b", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:34990, image:"img/ps5/individual/34990-b.png",
    choices:[
      { id:"jurassic-world-evo",  title:"Jurassic World Evolution",          image:"img/ps5/individual/jurassic-world-evolution.jpg" },
      { id:"mk11-ultimate",       title:"Mortal Kombat 11 Ultimate",         image:"img/ps5/individual/mk11-ultimate.jpg" },
      { id:"mudrunner-american",  title:"MudRunner: American Wilds",         image:"img/ps5/individual/mudrunner-american-wilds.jpg" },
      { id:"naruto-storm-4",      title:"Naruto Shippuden: Ultimate Ninja Storm 4", image:"img/ps5/individual/naruto-storm-4.jpg" },
      { id:"nick-all-star-brawl", title:"Nickelodeon All‑Star Brawl",        image:"img/ps5/individual/nickelodeon-all-star-brawl.jpg" },
      { id:"super-bomberman-r",   title:"Super Bomberman R",                 image:"img/ps5/individual/super-bomberman-r.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-34990-c", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:34990, image:"img/ps5/individual/34990-c.png",
    choices:[
      { id:"the-order-1886", title:"The Order: 1886",                 image:"img/ps5/individual/the-order-1886.jpg" },
      { id:"umvc3",          title:"Ultimate Marvel vs. Capcom 3",    image:"img/ps5/individual/ultimate-marvel-vs-capcom-3.jpg" },
      { id:"world-war-z",    title:"World War Z",                     image:"img/ps5/individual/world-war-z.jpg" },
      { id:"wrc9",           title:"WRC 9",                           image:"img/ps5/individual/wrc9.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-pack-39999-a", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:39999, image:"img/ps5/individual/39999-a.png",
    choices:[
      { id:"avatar-frontiers",  title:"Avatar: Frontiers of Pandora",  image:"img/ps5/individual/avatar-frontiers-of-pandora.jpg" },
      { id:"cod-modern-warfare",title:"Call of Duty: Modern Warfare",  image:"img/ps5/individual/cod-modern-warfare.jpg" },
      { id:"jurassic-world-ev2",title:"Jurassic World Evolution 2",    image:"img/ps5/individual/jurassic-world-evolution-2.jpg" },
      { id:"resident-evil-3",   title:"Resident Evil 3",               image:"img/ps5/individual/resident-evil-3.jpg" },
      { id:"truck-driver-ps5",  title:"Truck Driver",                  image:"img/ps5/individual/truck-driver.jpg" }
    ], genre:"Acción"
  },
  { id:"ps5-wrc10-deluxe-39990", title:"WRC 10 Deluxe Edition", platform:"PS5", packType:"individual", price:39990, image:"img/ps5/individual/wrc10-deluxe.jpg", genre:"Carreras" },
  { id:"ps5-astro-bot-92999",    title:"Astro Bot",              platform:"PS5", packType:"individual", price:92999, image:"img/ps5/individual/astro-bot.jpg",    genre:"Plataformas", isNew:true },
  { id:"ps5-cod-bo7-73999",      title:"Call of Duty: Black Ops 7", platform:"PS5", packType:"individual", price:73999, image:"img/ps5/individual/cod-black-ops-7.jpg", genre:"Acción", isNew:true },
  { id:"ps5-pack-59999-a", title:"PS5 Individual — Cada uno", platform:"PS5", packType:"individual-choice", price:59999, image:"img/ps5/individual/59999-a.png",
    choices:[
      { id:"ghost-of-tsushima",  title:"Ghost of Tsushima",                         image:"img/ps5/individual/ghost-of-tsushima.jpg" },
      { id:"gta-trilogy-def",    title:"GTA: The Trilogy — Definitive Edition",     image:"img/ps5/individual/gta-trilogy-definitive.jpg" },
      { id:"horizon-fw",         title:"Horizon Forbidden West",                    image:"img/ps5/individual/horizon-forbidden-west.jpg" },
      { id:"ufc-4",              title:"EA Sports UFC 4",                           image:"img/ps5/individual/ufc-4.jpg" },
      { id:"ufc-5",              title:"EA Sports UFC 5",                           image:"img/ps5/individual/ufc-5.jpg" }
    ], genre:"Acción"
  }
];