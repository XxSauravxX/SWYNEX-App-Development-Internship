const games=[
  {name:"Elden Ring",genre:"Open-World Action RPG",styles:["Action","Exploration","Story"],platforms:["PC","PlayStation","Xbox"],time:"Long",score:94,emoji:"⚔️",img:"https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",desc:"A vast open world with deep lore, exploration and challenging combat."},
  {name:"Devil May Cry 5",genre:"Action Hack & Slash",styles:["Action"],platforms:["PC","PlayStation","Xbox"],time:"Medium",score:90,emoji:"⚔️",img:"https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg",desc:"Fast, stylish combat built for players who want pure action and skill-based gameplay."},
  {name:"God of War",genre:"Action Adventure",styles:["Action","Story"],platforms:["PC","PlayStation"],time:"Medium",score:92,emoji:"🪓",img:"https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",desc:"Cinematic action, exploration and a strong character-driven story."},
  {name:"Genshin Impact",genre:"Open-World RPG",styles:["Action","Exploration"],platforms:["Mobile","PC","PlayStation"],time:"Medium",score:93,emoji:"✨",img:"https://images.launchbox-app.com//0a9a7c2a-8b34-4f8a-9d77-1b2b9f8f1d4f.jpg",desc:"Explore a colorful open world with action combat and character progression."},
  {name:"The Witcher 3",genre:"Action RPG",styles:["Story","Exploration"],platforms:["PC","PlayStation","Xbox","Nintendo"],time:"Long",score:89,emoji:"🗡️",img:"https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",desc:"A story-rich open world filled with quests, characters and exploration."},
  {name:"Detroit: Become Human",genre:"Interactive Story",styles:["Story"],platforms:["PC","PlayStation"],time:"Medium",score:91,emoji:"🎭",img:"https://cdn.akamai.steamstatic.com/steam/apps/1222140/header.jpg",desc:"A choice-driven cinematic story where your decisions shape the outcome."},
  {name:"Life is Strange",genre:"Narrative Adventure",styles:["Story"],platforms:["PC","PlayStation","Xbox","Mobile"],time:"Medium",score:88,emoji:"📖",img:"https://cdn.akamai.steamstatic.com/steam/apps/319630/header.jpg",desc:"An emotional narrative adventure focused on choices, characters and consequences."},
  {name:"The Legend of Zelda",genre:"Adventure",styles:["Exploration","Story"],platforms:["Nintendo"],time:"Long",score:88,emoji:"🗡️",img:"https://images.launchbox-app.com//210a8415-503a-4525-998b-8fb49566fd21.png",desc:"Exploration-first adventure with puzzles, discovery and a strong sense of journey."},
  {name:"Splatoon 3",genre:"Action Shooter",styles:["Action","Competitive"],platforms:["Nintendo"],time:"Short",score:89,emoji:"🦑",img:"https://upload.wikimedia.org/wikipedia/en/4/45/Splatoon_3.jpg",desc:"Fast colorful multiplayer action with short matches and competitive play."},
  {name:"Red Dead Redemption 2",genre:"Action Adventure",styles:["Story","Exploration","Relaxing"],platforms:["PC","PlayStation","Xbox"],time:"Long",score:84,emoji:"🤠",img:"https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",desc:"A cinematic open world with exploration, story and slower immersive moments."},
  {name:"No Man's Sky",genre:"Space Exploration",styles:["Exploration","Relaxing"],platforms:["PC","PlayStation","Xbox","Nintendo"],time:"Long",score:87,emoji:"🚀",img:"https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",desc:"Explore an enormous universe, discover planets and build at your own pace."},
  {name:"Minecraft",genre:"Sandbox",styles:["Relaxing","Exploration"],platforms:["Mobile","PC","Xbox","PlayStation","Nintendo"],time:"Medium",score:90,emoji:"⛏️",img:"https://images.launchbox-app.com//11ded2cc-d1b4-4f2d-b9e7-c9ff5a56d16d.jpg",desc:"A flexible sandbox where you can explore, build or simply relax."},
  {name:"Civilization VI",genre:"Turn-Based Strategy",styles:["Strategy"],platforms:["PC","PlayStation","Xbox","Nintendo","Mobile"],time:"Long",score:89,emoji:"♟️",img:"https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg",desc:"Build an empire through diplomacy, technology, culture and strategy."},
  {name:"XCOM 2",genre:"Turn-Based Strategy",styles:["Strategy"],platforms:["PC","PlayStation","Xbox","Nintendo","Mobile"],time:"Medium",score:88,emoji:"♟️",img:"https://cdn.akamai.steamstatic.com/steam/apps/268500/header.jpg",desc:"Plan every move and lead a squad through tense tactical battles."},
  {name:"Into the Breach",genre:"Turn-Based Strategy",styles:["Strategy"],platforms:["PC","Nintendo","Mobile"],time:"Short",score:87,emoji:"🤖",img:"https://cdn.akamai.steamstatic.com/steam/apps/590380/header.jpg",desc:"Compact tactical battles that reward careful planning and clever decisions."},
  {name:"Rocket League",genre:"Competitive Sports",styles:["Competitive","Racing"],platforms:["PC","PlayStation","Xbox","Nintendo"],time:"Short",score:87,emoji:"🚗",img:"https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg",desc:"Short competitive matches combining cars, speed and football."},
  {name:"Call of Duty: Mobile",genre:"Competitive FPS",styles:["Action","Competitive"],platforms:["Mobile"],time:"Short",score:91,emoji:"🎯",img:"https://images.launchbox-app.com//3de49fea-cc55-42c7-b766-7a6becfe591a.jpg",desc:"Quick competitive matches with action-focused mobile gameplay."},
  {name:"Valorant",genre:"Tactical FPS",styles:["Competitive","Action"],platforms:["PC"],time:"Short",score:90,emoji:"🎯",img:"https://images.launchbox-app.com//d0e2b0d7-72b6-4a77-9b0b-9b7d4a9d4b7a.jpg",desc:"Round-based tactical shooting where teamwork, aim and strategy matter."},
  {name:"Forza Horizon 5",genre:"Open-World Racing",styles:["Racing","Exploration"],platforms:["PC","Xbox"],time:"Medium",score:92,emoji:"🏎️",img:"https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",desc:"Open-world racing with a huge car roster and flexible driving sessions."},
  {name:"Need for Speed Heat",genre:"Street Racing",styles:["Racing","Action"],platforms:["PC","PlayStation","Xbox"],time:"Medium",score:86,emoji:"🏁",img:"https://cdn.akamai.steamstatic.com/steam/apps/1222680/header.jpg",desc:"Fast street racing with customization, pursuits and arcade-style action."},
  {name:"Gran Turismo 7",genre:"Racing Simulation",styles:["Racing"],platforms:["PlayStation"],time:"Medium",score:91,emoji:"🏎️",img:"https://images.launchbox-app.com//b1b7fbd4-8a9a-4d8d-a4d4-4c6c2e2d5e50.jpg",desc:"Realistic racing with a deep car collection and competitive driving."},
  {name:"Asphalt Legends Unite",genre:"Arcade Racing",styles:["Racing"],platforms:["Mobile","PC","Nintendo"],time:"Short",score:85,emoji:"🏁",img:"https://images.launchbox-app.com//5e8f8f39-2f89-4a11-9f6d-5b2f5f8c1e6a.jpg",desc:"Fast arcade races designed for short, accessible sessions."},
  {name:"Resident Evil 4",genre:"Survival Horror",styles:["Horror","Action","Story"],platforms:["PC","PlayStation","Xbox"],time:"Medium",score:92,emoji:"🧟",img:"https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",desc:"A tense survival-horror adventure with action combat and a strong story."},
  {name:"Dead Space",genre:"Survival Horror",styles:["Horror","Action","Story"],platforms:["PC","PlayStation","Xbox"],time:"Medium",score:90,emoji:"👽",img:"https://cdn.akamai.steamstatic.com/steam/apps/1693980/header.jpg",desc:"Dark sci-fi horror built around suspense, exploration and intense combat."},
  {name:"Silent Hill 2",genre:"Psychological Horror",styles:["Horror","Story","Exploration"],platforms:["PC","PlayStation","Xbox"],time:"Medium",score:91,emoji:"🌫️",img:"https://cdn.akamai.steamstatic.com/steam/apps/2124490/header.jpg",desc:"Atmospheric psychological horror focused on exploration and narrative."},
  {name:"Alien: Isolation",genre:"Survival Horror",styles:["Horror","Exploration"],platforms:["PC","PlayStation","Xbox","Nintendo","Mobile"],time:"Long",score:89,emoji:"👽",img:"https://cdn.akamai.steamstatic.com/steam/apps/214490/header.jpg",desc:"A tense survival-horror experience built around stealth, fear and exploration."},
  {name:"Stardew Valley",genre:"Farming Life Sim",styles:["Relaxing","Exploration"],platforms:["PC","PlayStation","Xbox","Nintendo","Mobile"],time:"Medium",score:92,emoji:"🌱",img:"https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",desc:"A relaxing farming and life simulation game you can play at your own pace."},
  {name:"Journey",genre:"Adventure",styles:["Relaxing","Exploration","Story"],platforms:["PC","PlayStation"],time:"Short",score:88,emoji:"🏜️",img:"https://cdn.akamai.steamstatic.com/steam/apps/638230/header.jpg",desc:"A short atmospheric journey focused on discovery, music and calm exploration."},
  {name:"Unpacking",genre:"Relaxing Puzzle",styles:["Relaxing"],platforms:["PC","PlayStation","Xbox","Nintendo","Mobile"],time:"Short",score:86,emoji:"📦",img:"https://cdn.akamai.steamstatic.com/steam/apps/1135690/header.jpg",desc:"A calm organizing puzzle game designed for short, relaxing sessions."}
];

let selectedPlatforms=[],selectedStyles=[],selectedTime="",saved=[],current=null;

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

function show(id){$$(".screen").forEach(s=>s.classList.remove("active"));$("#"+id).classList.add("active");window.scrollTo(0,0)}
function platformMatch(g){return !selectedPlatforms.length || selectedPlatforms.some(p=>g.platforms.includes(p));}
function styleMatch(g){return !selectedStyles.length || selectedStyles.some(s=>g.styles.includes(s));}
function scoreGame(g){
  let score=g.score;
  if(selectedStyles.length && g.styles.includes(selectedStyles[0])) score=Math.min(99,score+4);
  if(selectedPlatforms.length && g.platforms.includes(selectedPlatforms[0])) score=Math.min(99,score+3);
  if(selectedTime && g.time===selectedTime) score=Math.min(99,score+2);
  return score;
}
function matchPercent(g){
  return scoreGame(g);
}
function results(){
  // Platform is a hard requirement: every recommendation must be playable on
  // the device the user selected. Genre is the next priority; time only ranks
  // games within the valid platform/genre pool.
  let pool = selectedPlatforms.length
    ? games.filter(g=>g.platforms.includes(selectedPlatforms[0]))
    : games.slice();

  const genrePool = selectedStyles.length
    ? pool.filter(g=>g.styles.includes(selectedStyles[0]))
    : pool;

  const usingGenrePool = genrePool.length > 0;
  const ranked = (usingGenrePool ? genrePool : pool).map(g=>({
    ...g,
    _platform: !selectedPlatforms.length || g.platforms.includes(selectedPlatforms[0]),
    _style: !selectedStyles.length || g.styles.includes(selectedStyles[0]),
    _time: selectedTime && g.time===selectedTime ? 1 : 0,
    _exact: true
  })).sort((a,b)=>{
    return (b._time-a._time)||(scoreGame(b)-scoreGame(a));
  });

  return ranked.slice(0,3);
}

function imageOrEmoji(g,cls){
  return g.img
    ? `<img class="${cls}" src="${g.img}" alt="${g.name}" onerror="this.replaceWith(document.createTextNode('${g.emoji}'))">`
    : `<div class="${cls} fallback">${g.emoji}</div>`;
}

function renderMatch(){
  const list=results(), top=list[0];
  if(!top)return;
  const exact=platformMatch(top)&&styleMatch(top);
  const matchedStyle=selectedStyles[0]||top.styles[0]||"Action";
  let genre=top.genre.replace(" ","<br>");
  if(matchedStyle==="Competitive") genre="Competitive<br>Gaming";
  if(matchedStyle==="Racing") genre="Racing<br>Games";
  if(matchedStyle==="Horror") genre="Survival<br>Horror";
  if(matchedStyle==="Strategy") genre="Strategy<br>Games";
  if(matchedStyle==="Relaxing") genre="Relaxing<br>Adventure";
  if(matchedStyle==="Story") genre="Story-Driven<br>Adventure";

  $("#score").textContent=matchPercent(top)+"%";
  $("#genre").innerHTML=genre;
  $("#matchCopy").textContent=exact ? `Matched to your ${selectedPlatforms[0]} platform and ${selectedStyles[0]} preference. Your gaming time is used to rank the best fit.` : `No exact ${selectedPlatforms[0]} + ${selectedStyles[0]} combination was available, so these are the closest matches for your choices.`;
  $("#recommendTitle").textContent=exact ? "Top Game Recommendations" : "Closest Matches";

  const why = [
    top._platform ? `Works on ${selectedPlatforms[0]}` : `Closest platform match: ${top.platforms[0]}`,
    top._style ? `Matches your ${selectedStyles[0].toLowerCase()} playstyle` : `Closest style: ${top.styles[0]}`,
    selectedTime ? (top._time ? `Fits your ${selectedTime.toLowerCase()} gaming sessions` : `Available for ${top.time.toLowerCase()} sessions`) : "Fits your usual gaming sessions"
  ];
  $("#whyPoints").innerHTML=why.map(x=>`<div><span>✓</span>${x}</div>`).join("");

  $("#recommendations").innerHTML=list.map((g,i)=>`
    <button class="rec" data-game="${g.name}">
      <span class="rank">${i+1}</span>
      ${imageOrEmoji(g,"rec-img")}
      <span class="rec-main"><b>${g.name}</b><small>${g.genre}</small></span>
      <span class="rec-score">${matchPercent(g)}%</span>
    </button>`).join("");

  $$(".rec").forEach(b=>b.onclick=()=>openGame(b.dataset.game));
}

function openGame(name){
  current=games.find(g=>g.name===name);
  if(!current)return;
  $("#detailTitle").textContent=current.name;
  $("#detailHeroTitle").textContent=current.name;
  $("#detailGenre").textContent=current.genre;
  $("#detailScore").textContent=matchPercent(current)+"% Match";
  $("#detailText").textContent=current.desc;
  $("#detailTags").innerHTML=current.styles.map(s=>`<span>${s}</span>`).join("");
  $("#detailPlatforms").textContent=current.platforms.join(" · ");

  const whyDetail=[];
  const exactCurrent=platformMatch(current)&&styleMatch(current);
  const platformText=selectedPlatforms.length ? selectedPlatforms[0] : current.platforms[0];
  whyDetail.push(current.platforms.includes(platformText) ? `Works on ${platformText}` : `Closest platform: ${current.platforms[0]}`);
  if(selectedStyles.length){
    const matched=selectedStyles.filter(s=>current.styles.includes(s));
    whyDetail.push(matched.length ? `Matches your ${matched.join(" + ")} playstyle` : `Closest style: ${current.styles[0]}`);
  }else{
    whyDetail.push(`Fits a ${current.styles[0]} playstyle`);
  }
  if(selectedTime){
    whyDetail.push(current.time===selectedTime ? `Fits your ${selectedTime.toLowerCase()} gaming sessions` : `Best for ${current.time.toLowerCase()} sessions`);
  }
  if(!exactCurrent) whyDetail.unshift("Closest available match for your combination");
  $("#detailWhyPoints").innerHTML=whyDetail.map(x=>`<div><span>✓</span>${x}</div>`).join("");

  const bg=$("#detailBg"), poster=$("#detailPoster");
  if(current.img){
    bg.src=current.img;bg.hidden=false;
    poster.innerHTML=`<img src="${current.img}" alt="${current.name}">`;
  }else{
    bg.hidden=true;poster.textContent=current.emoji;
  }

  const isSaved=saved.some(g=>g.name===current.name);
  $("#saveGame").textContent=isSaved?"♥ Saved":"♥ Save Game";
  $("#heart").textContent=isSaved?"♥":"♡";
  show("details");
}

function toggleSave(){
  if(!current)return;
  const index=saved.findIndex(g=>g.name===current.name);
  if(index>=0)saved.splice(index,1);else saved.push(current);
  const isSaved=saved.some(g=>g.name===current.name);
  $("#saveGame").textContent=isSaved?"♥ Saved":"♥ Save Game";
  $("#heart").textContent=isSaved?"♥":"♡";
  renderSaved();
}

function renderSaved(){
  $("#savedList").innerHTML=saved.length?saved.map(g=>`
    <button class="saved-row" data-game="${g.name}">
      ${imageOrEmoji(g,"saved-thumb")}
      <span class="saved-info"><b>${g.name}</b><small>${g.genre}</small><em>${scoreGame(g)}% Match</em></span>
      <span class="saved-heart">♥</span>
    </button>`).join(""):`<div class="empty">No saved games yet.<br>Save a game from the details screen.</div>`;
  $$(".saved-row").forEach(b=>b.onclick=()=>openGame(b.dataset.game));
}

$$("[data-go]").forEach(b=>b.onclick=()=>show(b.dataset.go));
$$("[data-back]").forEach(b=>b.onclick=()=>show("welcome"));

$$("[data-platform]").forEach(b=>b.onclick=()=>{
  const p=b.dataset.platform;
  selectedPlatforms=[p];
  $$("[data-platform]").forEach(x=>x.classList.remove("selected"));
  b.classList.add("selected");
});

$$("[data-time]").forEach(b=>b.onclick=()=>{
  selectedTime=b.dataset.time;
  $$("[data-time]").forEach(x=>x.classList.remove("selected"));
  b.classList.add("selected");
});

$$("[data-style]").forEach(b=>b.onclick=()=>{
  const s=b.dataset.style;
  selectedStyles=[s];
  $$("[data-style]").forEach(x=>x.classList.remove("selected"));
  b.classList.add("selected");
});

$("#platformNext").onclick=()=>{
  if(!selectedPlatforms.length){selectedPlatforms=["PC"];$('[data-platform="PC"]').classList.add("selected")}
  if(!selectedTime){selectedTime="Medium";$('[data-time="Medium"]').classList.add("selected")}
  show("playstyle");
};

$("#findMatch").onclick=()=>{
  if(!selectedStyles.length){selectedStyles=["Action"];$(`[data-style="Action"]`).classList.add("selected")}
  renderMatch();show("match");
};


$("#resetQuiz").onclick=()=>show("preferences");
$("#saveGame").onclick=toggleSave;
$("#heart").onclick=toggleSave;
$("#tryAnother").onclick=()=>show("playstyle");

$$(".filter").forEach(btn=>btn.onclick=()=>{
  $$(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
  const f=btn.textContent;
  $$("#savedList .saved-row").forEach(row=>{
    const game=saved.find(g=>g.name===row.dataset.game);
    row.style.display=(f==="All"||game?.genre.toLowerCase().includes(f.toLowerCase())||game?.styles.includes(f))?"flex":"none";
  });
});

renderSaved();