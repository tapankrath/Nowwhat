const activities = [
  { mode: "move", headline: "Go for a short walk", why: "A bit of motion outside tends to lift a flat mood fast.", mood: ["low", "ok"], energy: ["mid", "high"], time: ["20", "60"] },
  { mode: "move", headline: "Stretch for five minutes", why: "Low effort, still gets you out of your head and into your body.", mood: ["low", "ok", "good"], energy: ["low", "mid"], time: ["5", "20"] },
  { mode: "move", headline: "Put on music and dance in your kitchen", why: "Ridiculous and effective. Nobody's watching.", mood: ["low", "ok", "good"], energy: ["mid", "high"], time: ["5", "20"] },
  { mode: "rest", headline: "Take a slow shower", why: "Low energy and a short window — something restorative beats something demanding.", mood: ["low", "ok"], energy: ["low"], time: ["5", "20"] },
  { mode: "rest", headline: "Lie down for ten minutes", why: "No agenda, just a pause. Set a timer so it doesn't turn into avoidance.", mood: ["low"], energy: ["low"], time: ["5", "20"] },
  { mode: "rest", headline: "Make tea and actually sit with it", why: "Small ritual, no screen. Worth more than it sounds.", mood: ["low", "ok"], energy: ["low"], time: ["5", "20"] },
  { mode: "connect", headline: "Call a friend you've been meaning to", why: "You've got the time, and connection usually beats scrolling for mood.", mood: ["ok", "good"], energy: ["mid", "high"], time: ["20", "60"] },
  { mode: "connect", headline: "Send one text you keep putting off", why: "Small and low-stakes, but it clears something you're carrying.", mood: ["low", "ok"], energy: ["low", "mid"], time: ["5"] },
  { mode: "create", headline: "Cook something you actually want to eat", why: "Good energy and real time — worth putting into something you'll enjoy.", mood: ["ok", "good"], energy: ["high"], time: ["60"] },
  { mode: "create", headline: "Doodle or journal for a few minutes", why: "No pressure to make it good, just to get something out of your head.", mood: ["low", "ok"], energy: ["low", "mid"], time: ["5", "20"] },
  { mode: "play", headline: "Watch something that makes you laugh", why: "Sometimes the point is just to enjoy something, full stop.", mood: ["low", "ok", "good"], energy: ["low", "mid"], time: ["60"] },
  { mode: "play", headline: "Put on a song and actually listen", why: "Three minutes, no multitasking. A small reset.", mood: ["low", "ok", "good"], energy: ["low", "mid", "high"], time: ["5"] },
  { mode: "learn", headline: "Read a chapter of something", why: "High energy and real time on hand — good conditions for focus.", mood: ["ok", "good"], energy: ["high"], time: ["60"] },
  { mode: "reflect", headline: "Tidy one small corner of your space", why: "Contained and quick, with a result you'll notice right away.", mood: ["ok", "good"], energy: ["mid"], time: ["20"] },
  { mode: "reflect", headline: "Write down three things going okay", why: "Takes two minutes and quietly shifts what you're paying attention to.", mood: ["low", "ok"], energy: ["low", "mid"], time: ["5"] }
];

const modeLabels = { move: "move", rest: "rest", connect: "connect", create: "create", play: "play", learn: "learn", reflect: "reflect" };

let state = { mood: "ok", energy: "mid", time: "20" };
let shown = [];

function chip(value, label, active, onClick) {
  const b = document.createElement("button");
  b.className = "chip" + (active ? " active" : "");
  b.textContent = label;
  b.type = "button";
  b.onclick = onClick;
  return b;
}

function renderChips() {
  const moodRow = document.getElementById("mood-row");
  moodRow.innerHTML = "";
  [["low", "Low"], ["ok", "Okay"], ["good", "Good"]].forEach(([v, l]) => {
    moodRow.appendChild(chip(v, l, state.mood === v, () => { state.mood = v; renderChips(); }));
  });

  const energyRow = document.getElementById("energy-row");
  energyRow.innerHTML = "";
  [["low", "Low"], ["mid", "Mid"], ["high", "High"]].forEach(([v, l]) => {
    energyRow.appendChild(chip(v, l, state.energy === v, () => { state.energy = v; renderChips(); }));
  });

  const timeRow = document.getElementById("time-row");
  timeRow.innerHTML = "";
  [["5", "5 min"], ["20", "20 min"], ["60", "1 hr+"]].forEach(([v, l]) => {
    timeRow.appendChild(chip(v, l, state.time === v, () => { state.time = v; renderChips(); }));
  });
}

function score(a) {
  let s = 0;
  if (a.mood.includes(state.mood)) s += 2;
  if (a.energy.includes(state.energy)) s += 2;
  if (a.time.includes(state.time)) s += 2;
  if (shown.includes(a.headline)) s -= 5;
  return s;
}

function showResult(pick) {
  shown.push(pick.headline);
  document.getElementById("mode-tag").textContent = modeLabels[pick.mode];
  document.getElementById("headline").textContent = pick.headline;
  document.getElementById("why").textContent = pick.why;
  const result = document.getElementById("result");
  result.hidden = false;
  document.getElementById("browse").hidden = true;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function suggestFromFilters(reset) {
  if (reset) shown = [];
  const ranked = activities.slice().sort((a, b) => score(b) - score(a));
  showResult(ranked[0]);
}

function suggestRandom() {
  const pick = activities[Math.floor(Math.random() * activities.length)];
  showResult(pick);
}

function renderBrowse() {
  const browse = document.getElementById("browse");
  browse.innerHTML = "";
  activities.forEach((a) => {
    const item = document.createElement("button");
    item.className = "browse-item";
    item.style.width = "100%";
    item.style.textAlign = "left";
    item.style.border = "1.5px solid var(--line)";
    item.style.cursor = "pointer";
    item.innerHTML = `<div class="b-mode">${modeLabels[a.mode]}</div><div class="b-head">${a.headline}</div><div class="b-why">${a.why}</div>`;
    item.onclick = () => showResult(a);
    browse.appendChild(item);
  });
  browse.hidden = false;
  document.getElementById("result").hidden = true;
  browse.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("find-btn").onclick = () => suggestFromFilters(true);
document.getElementById("swap").onclick = () => suggestFromFilters(false);
document.getElementById("do-it").onclick = () => {
  const btn = document.getElementById("do-it");
  btn.textContent = "Nice.";
  setTimeout(() => { btn.textContent = "I'll do it"; }, 1800);
};
document.getElementById("surprise-card").onclick = () => suggestRandom();
document.getElementById("browse-card").onclick = () => renderBrowse();

renderChips();
