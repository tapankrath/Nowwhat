const activities = [
  { mode: "move", headline: "Go for a short walk", why: "A bit of motion outside tends to lift a flat mood fast.", mood: ["low", "ok"], energy: ["mid", "high"], time: ["20", "60"], nearby: "walking trails" },
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
  { mode: "play", headline: "Catch a movie, something easy to watch", why: "Two hours where you don't have to be anywhere or decide anything else.", mood: ["low", "ok", "good"], energy: ["low", "mid"], time: ["60"], nearby: "movie theaters" },
  { mode: "learn", headline: "Read a chapter of something", why: "High energy and real time on hand — good conditions for focus.", mood: ["ok", "good"], energy: ["high"], time: ["60"] },
  { mode: "reflect", headline: "Tidy one small corner of your space", why: "Contained and quick, with a result you'll notice right away.", mood: ["ok", "good"], energy: ["mid"], time: ["20"] },
  { mode: "reflect", headline: "Write down three things going okay", why: "Takes two minutes and quietly shifts what you're paying attention to.", mood: ["low", "ok"], energy: ["low", "mid"], time: ["5"] },
  { mode: "reset", headline: "Step outside for two minutes, no phone", why: "When you're wound up, changing your environment works faster than trying to think your way calm.", mood: ["low"], energy: ["mid", "high"], time: ["5"] },
  { mode: "reset", headline: "Splash cold water on your face", why: "Blunt and physical — sometimes that's exactly what a spiked-up moment needs.", mood: ["low"], energy: ["high"], time: ["5"] },
  { mode: "focus", headline: "Pick one small task and do just that", why: "Not the whole list — one thing, start to finish. Momentum beats a perfect plan.", mood: ["ok", "good"], energy: ["mid", "high"], time: ["20", "60"] },
  { mode: "focus", headline: "Write down the next concrete step, nothing else", why: "You don't need the whole plan right now, just the next honest move.", mood: ["low", "ok"], energy: ["low", "mid"], time: ["5"] },
  { mode: "winddown", headline: "Put your phone in another room and read on paper", why: "The light and the scrolling are both working against you right now.", mood: ["low", "ok"], energy: ["low"], time: ["20"] },
  { mode: "winddown", headline: "Write down three things from today, good or bad", why: "Closes the day out instead of leaving it open in your head.", mood: ["low", "ok", "good"], energy: ["low"], time: ["5"] },
  { mode: "process", headline: "Write out what you'd say, even if you never send it", why: "Getting it out of your head and onto a page does real work, even unsent.", mood: ["low"], energy: ["low", "mid"], time: ["20"] },
  { mode: "process", headline: "Call the one person who'll actually get it", why: "Not everyone — just the one. That's usually enough.", mood: ["low"], energy: ["mid"], time: ["20", "60"] },
  { mode: "nourish", headline: "Make yourself something to eat, slowly", why: "Not while doing five other things — just the food, for a few minutes.", mood: ["low", "ok"], energy: ["low", "mid"], time: ["20"] },
  { mode: "nourish", headline: "Get a glass of water and actually drink it", why: "Small, boring, and it works more often than it gets credit for.", mood: ["low", "ok", "good"], energy: ["low"], time: ["5"] },
  { mode: "nourish", headline: "Get a proper meal somewhere, sit down for it", why: "Away from your desk, plated by someone else — different than another meal eaten standing up.", mood: ["ok", "good"], energy: ["mid"], time: ["60"], nearby: "restaurants" },
  { mode: "give", headline: "Send a genuine compliment to someone", why: "Costs you nothing and it's rare enough to land.", mood: ["ok", "good"], energy: ["low", "mid"], time: ["5"] },
  { mode: "give", headline: "Leave a good review for a place you liked", why: "Two minutes, and it actually helps a small business.", mood: ["ok", "good"], energy: ["low", "mid"], time: ["5", "20"] },
  { mode: "explore", headline: "Take a different route than usual", why: "Same walk, new scenery. Small novelty goes further than it should.", mood: ["ok", "good"], energy: ["mid", "high"], time: ["20", "60"], nearby: "parks" },
  { mode: "explore", headline: "Try a genre of music you never listen to", why: "Ten minutes of something unfamiliar resets your ear a bit.", mood: ["low", "ok", "good"], energy: ["low", "mid"], time: ["5", "20"] },
  { mode: "local", headline: "Grab a coffee somewhere new", why: "Not your usual place — a different room does something a different drink can't.", mood: ["ok", "good"], energy: ["mid", "high"], time: ["20", "60"], nearby: "coffee shops" },
  { mode: "local", headline: "Wander into a bookstore you've never been in", why: "No agenda, just browsing. Low stakes, mildly interesting.", mood: ["low", "ok", "good"], energy: ["mid", "high"], time: ["20", "60"], nearby: "bookstores" },
  { mode: "local", headline: "Find a park bench and just sit outside for a bit", why: "Different air, different view. Doesn't need to be more than that.", mood: ["low", "ok"], energy: ["low", "mid"], time: ["5", "20"], nearby: "parks" },
  { mode: "clear", headline: "Reply to the one email you've been avoiding", why: "It's smaller than it feels. Clearing it frees up more headspace than the task itself.", mood: ["ok", "good"], energy: ["mid"], time: ["5", "20"] },
  { mode: "clear", headline: "Pay the bill or fill the form you've been putting off", why: "Boring, quick, and it stops living rent-free in your head.", mood: ["ok", "good"], energy: ["low", "mid"], time: ["5", "20"] }
];

const modeLabels = { move: "move", rest: "rest", connect: "connect", create: "create", play: "play", learn: "learn", reflect: "reflect", reset: "reset", focus: "focus", winddown: "wind down", process: "process", nourish: "nourish", give: "give", explore: "explore", clear: "clear", share: "share", treat: "treat", mark: "mark", gather: "gather", local: "local", outing: "outing" };

const celebrations = [
  { mode: "share", headline: "Call the person who'll be as excited as you are", why: "Say it out loud to someone who'll match your energy.", size: ["small", "big", "huge"], company: ["one"], time: ["5", "20"] },
  { mode: "share", headline: "Post it, even just to your close friends", why: "Let it be seen. You don't have to downplay this one.", size: ["big", "huge"], company: ["everyone"], time: ["5"] },
  { mode: "share", headline: "Send a voice message instead of a text", why: "Let them hear how you actually sound right now.", size: ["small", "big"], company: ["one"], time: ["5"] },
  { mode: "treat", headline: "Buy the thing you'd normally talk yourself out of", why: "Small indulgence, deliberately, because today earned it.", size: ["big", "huge"], company: ["solo", "one"], time: ["20", "60"] },
  { mode: "treat", headline: "Order your favorite meal, no negotiating with yourself", why: "Don't cook tonight. Let this one be easy.", size: ["small", "big", "huge"], company: ["solo", "one"], time: ["20", "60"], nearby: "restaurants" },
  { mode: "outing", headline: "Go get your favorite dessert somewhere, in person", why: "Sitting down for it beats ordering it in. Make it a small occasion.", size: ["small", "big", "huge"], company: ["solo", "one"], time: ["20", "60"], nearby: "ice cream shops" },
  { mode: "outing", headline: "Find a nice spot for a drink to mark it", why: "Doesn't need a plan. Just a place worth sitting in for a bit.", size: ["big", "huge"], company: ["one", "everyone"], time: ["60"], nearby: "bars" },
  { mode: "outing", headline: "Catch a movie to make it a proper occasion", why: "A small event, not just another evening.", size: ["big", "huge"], company: ["one", "everyone"], time: ["60"], nearby: "movie theaters" },
  { mode: "mark", headline: "Take a photo of this exact moment", why: "You'll want to remember what today felt like.", size: ["small", "big", "huge"], company: ["solo", "one", "everyone"], time: ["5"] },
  { mode: "mark", headline: "Write down what happened while it's fresh", why: "Future you will want the details, not just the headline.", size: ["big", "huge"], company: ["solo"], time: ["5", "20"] },
  { mode: "move", headline: "Put on your hype song and just let it out", why: "Physically celebrating isn't silly — it's information for your body.", size: ["small", "big", "huge"], company: ["solo"], time: ["5"] },
  { mode: "move", headline: "Do a genuinely embarrassing victory dance", why: "No one's grading this. Let it be ridiculous.", size: ["big", "huge"], company: ["solo", "one"], time: ["5"] },
  { mode: "gather", headline: "Get people together this week to mark it properly", why: "Big moments deserve more than a solo acknowledgment eventually.", size: ["huge"], company: ["everyone"], time: ["60"] },
  { mode: "gather", headline: "Invite one person over or out, no big plan needed", why: "Doesn't need to be an event. Just don't be alone with this one.", size: ["big", "huge"], company: ["one"], time: ["60"] }
];

const situations = [
  { id: "bored", label: "Bored or restless", mode: "play", headline: "Put on a song and actually listen", why: "Three minutes, no multitasking. Small enough to just do." },
  { id: "overwhelmed", label: "Feeling overwhelmed", mode: "reset", headline: "Step outside for two minutes, no phone", why: "Changing your environment works faster than trying to think your way calm." },
  { id: "cantsleep", label: "Can't sleep", mode: "winddown", headline: "Put your phone in another room and read on paper", why: "The light and the scrolling are both working against you right now." },
  { id: "anxious", label: "Anxious about something coming up", mode: "reset", headline: "Write down the next concrete step, nothing else", why: "You don't need the whole plan right now, just the next honest move." },
  { id: "hardconvo", label: "Just had a hard conversation", mode: "process", headline: "Write out what you'd say, even if you never send it", why: "Getting it out of your head does real work, even unsent." },
  { id: "killingtime", label: "Killing time somewhere", mode: "learn", headline: "Read one thing you bookmarked and forgot about", why: "You already meant to read it. Now's as good a time as any." },
  { id: "startday", label: "Starting the day", mode: "focus", headline: "Pick the one task that'll make today feel done", why: "Do just that first, before anything else gets a vote." },
  { id: "endday", label: "Ending the day", mode: "winddown", headline: "Write down three things from today, good or bad", why: "Closes the day out instead of leaving it open in your head." },
  { id: "missingsomeone", label: "Missing someone", mode: "connect", headline: "Send them a message, even just a photo that reminded you of them", why: "It doesn't need to be a big message. Small counts." },
  { id: "doomscrolling", label: "Doomscrolling or comparing myself", mode: "reset", headline: "Close the app and put your phone in another room", why: "The scroll isn't going to resolve itself. Distance does more than willpower here." },
  { id: "cantstart", label: "Can't get started on something", mode: "focus", headline: "Set a timer for five minutes and do just the smallest piece", why: "You're not committing to finishing it. Just to five minutes." }
];

const celebrateSituations = [
  { id: "goodnews", label: "Got good news, want to mark it", mode: "connect", headline: "Tell someone who'll be as happy as you are", why: "Good news is better shared than scrolled past." },
  { id: "finishedbig", label: "Just finished something big", mode: "give", headline: "Tell someone who'll actually be proud of you", why: "Let it land with someone before you move on to the next thing." },
  { id: "niceword", label: "Someone said something nice about you", mode: "mark", headline: "Write it down somewhere you'll actually see it again", why: "Let it stick around a little longer than the moment did." }
];

let appMode = "lift";
let state = { mood: "ok", energy: "mid", time: "20" };
let cstate = { size: "big", company: "one", time: "20" };
let shown = [];

function matchScoreCelebrate(a) {
  let s = 0;
  if (a.size.includes(cstate.size)) s += 2;
  if (a.company.includes(cstate.company)) s += 2;
  if (a.time.includes(cstate.time)) s += 2;
  return s;
}

function scoreCelebrate(a) {
  let s = matchScoreCelebrate(a);
  if (shown.includes(a.headline)) s -= 5;
  return s;
}

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
  const energyRow = document.getElementById("energy-row");
  energyRow.innerHTML = "";
  const timeRow = document.getElementById("time-row");
  timeRow.innerHTML = "";

  if (appMode === "lift") {
    [["low", "Low"], ["ok", "Okay"], ["good", "Good"]].forEach(([v, l]) => {
      moodRow.appendChild(chip(v, l, state.mood === v, () => { state.mood = v; renderChips(); }));
    });
    [["low", "Low"], ["mid", "Mid"], ["high", "High"]].forEach(([v, l]) => {
      energyRow.appendChild(chip(v, l, state.energy === v, () => { state.energy = v; renderChips(); }));
    });
    [["5", "5 min"], ["20", "20 min"], ["60", "1 hr+"]].forEach(([v, l]) => {
      timeRow.appendChild(chip(v, l, state.time === v, () => { state.time = v; renderChips(); }));
    });
  } else {
    [["small", "Small win"], ["big", "Big win"], ["huge", "Huge moment"]].forEach(([v, l]) => {
      moodRow.appendChild(chip(v, l, cstate.size === v, () => { cstate.size = v; renderChips(); }));
    });
    [["solo", "Solo"], ["one", "One person"], ["everyone", "Everyone"]].forEach(([v, l]) => {
      energyRow.appendChild(chip(v, l, cstate.company === v, () => { cstate.company = v; renderChips(); }));
    });
    [["5", "5 min"], ["20", "20 min"], ["60", "1 hr+"]].forEach(([v, l]) => {
      timeRow.appendChild(chip(v, l, cstate.time === v, () => { cstate.time = v; renderChips(); }));
    });
  }
}

function matchScore(a) {
  let s = 0;
  if (a.mood.includes(state.mood)) s += 2;
  if (a.energy.includes(state.energy)) s += 2;
  if (a.time.includes(state.time)) s += 2;
  return s;
}

function score(a) {
  let s = matchScore(a);
  if (shown.includes(a.headline)) s -= 5;
  return s;
}

function showResult(pick) {
  shown.push(pick.headline);
  document.getElementById("mode-tag").textContent = modeLabels[pick.mode];
  document.getElementById("headline").textContent = pick.headline;
  document.getElementById("why").textContent = pick.why;

  const nearbyWrap = document.getElementById("nearby-wrap");
  const nearbyBtn = document.getElementById("nearby-btn");
  if (pick.nearby) {
    nearbyWrap.hidden = false;
    document.getElementById("nearby-btn-label").textContent = `Find ${pick.nearby} near me`;
    nearbyBtn.onclick = () => {
      const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(pick.nearby + " near me");
      window.open(url, "_blank");
    };
  } else {
    nearbyWrap.hidden = true;
  }

  const result = document.getElementById("result");
  result.hidden = false;
  document.getElementById("browse").hidden = true;
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function suggestFromFilters(reset) {
  if (reset) shown = [];
  const scored = activities.map((a) => ({ a, s: score(a) }));
  const max = Math.max(...scored.map((x) => x.s));
  const top = scored.filter((x) => x.s === max).map((x) => x.a);
  showResult(top[Math.floor(Math.random() * top.length)]);
}

function suggestCelebrate(reset) {
  if (reset) shown = [];
  const scored = celebrations.map((a) => ({ a, s: scoreCelebrate(a) }));
  const max = Math.max(...scored.map((x) => x.s));
  const top = scored.filter((x) => x.s === max).map((x) => x.a);
  showResult(top[Math.floor(Math.random() * top.length)]);
}

function suggestRandom() {
  const pool = appMode === "lift" ? activities : celebrations;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  showResult(pick);
}

function showHome() {
  document.getElementById("home-view").hidden = false;
  document.getElementById("browse-view").hidden = true;
  document.getElementById("situations-view").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showBrowsePage() {
  document.getElementById("home-view").hidden = true;
  document.getElementById("browse-view").hidden = false;
  document.getElementById("situations-view").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderBrowseGeneric(dataset, matchFn) {
  const browse = document.getElementById("browse");
  browse.innerHTML = "";

  const groups = {};
  dataset.forEach((a) => {
    if (!groups[a.mode]) groups[a.mode] = [];
    groups[a.mode].push(a);
  });

  const modeOrder = Object.keys(groups).sort((m1, m2) => {
    const best = (m) => Math.max(...groups[m].map(matchFn));
    return best(m2) - best(m1);
  });

  modeOrder.forEach((mode) => {
    const section = document.createElement("div");
    section.className = "browse-group";

    const header = document.createElement("div");
    header.className = "browse-group-header";
    header.textContent = modeLabels[mode];
    section.appendChild(header);

    const list = document.createElement("div");
    list.className = "browse-list";
    groups[mode]
      .slice()
      .sort((a, b) => matchFn(b) - matchFn(a))
      .forEach((a) => {
        const item = document.createElement("button");
        item.className = "browse-item";
        item.type = "button";
        item.innerHTML = `<div class="b-head">${a.headline}</div><div class="b-why">${a.why}</div>`;
        item.onclick = () => {
          showHome();
          showResult(a);
        };
        list.appendChild(item);
      });
    section.appendChild(list);
    browse.appendChild(section);
  });
}

function renderBrowse() {
  renderBrowseGeneric(activities, matchScore);
}

function renderCelebrateBrowse() {
  renderBrowseGeneric(celebrations, matchScoreCelebrate);
}

function showSituationsPage() {
  document.getElementById("home-view").hidden = true;
  document.getElementById("situations-view").hidden = false;
  document.getElementById("browse-view").hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSituations() {
  const list = document.getElementById("situation-list");
  list.innerHTML = "";
  const pool = appMode === "lift" ? situations : celebrateSituations;
  pool.forEach((s) => {
    const item = document.createElement("button");
    item.className = "situation-item";
    item.type = "button";
    item.textContent = s.label;
    item.onclick = () => {
      showHome();
      showResult(s);
    };
    list.appendChild(item);
  });
}

function switchMode(mode) {
  appMode = mode;
  document.getElementById("mode-lift-tab").classList.toggle("active", mode === "lift");
  document.getElementById("mode-celebrate-tab").classList.toggle("active", mode === "celebrate");
  document.getElementById("result").hidden = true;

  if (mode === "lift") {
    document.getElementById("hero-h1").innerHTML = 'Low, restless, no idea? <span class="accent-green">Shift it, quick.</span>';
    document.getElementById("hero-lede").textContent = "Tell us how you're feeling and how much time you've got — we'll hand you one thing to do. Not ten. One.";
    document.getElementById("filter-label-1").textContent = "Mood";
    document.getElementById("filter-label-2").textContent = "Energy";
    document.getElementById("find-btn-label").textContent = "Find something to do";
    document.getElementById("surprise-card-sub").textContent = "Skip the filters — pick something for me right now.";
    document.getElementById("browse-card-title").textContent = "Browse by mood";
    document.getElementById("browse-card-sub").textContent = "See every idea, sorted by what it takes to do it.";
    document.getElementById("browse-title").textContent = "Browse every idea";
    document.getElementById("situations-card").hidden = false;
    document.getElementById("situations-card-title").textContent = "Something specific is going on";
    document.getElementById("situations-card-sub").textContent = "Skip the filters — tell us the situation.";
    document.getElementById("situations-title").textContent = "What's going on?";
  } else {
    document.getElementById("hero-h1").innerHTML = 'Something good just happened? <span class="accent-green">Celebrate it, quick.</span>';
    document.getElementById("hero-lede").textContent = "Tell us how big it is and who's around — we'll hand you one way to mark it. Not ten. One.";
    document.getElementById("filter-label-1").textContent = "How big";
    document.getElementById("filter-label-2").textContent = "Who's in";
    document.getElementById("find-btn-label").textContent = "Find a way to celebrate";
    document.getElementById("surprise-card-sub").textContent = "Skip the filters — pick a way to mark it right now.";
    document.getElementById("browse-card-title").textContent = "Browse by vibe";
    document.getElementById("browse-card-sub").textContent = "See every way to celebrate, sorted by what it takes to do it.";
    document.getElementById("browse-title").textContent = "Browse every way to celebrate";
    document.getElementById("situations-card").hidden = false;
    document.getElementById("situations-card-title").textContent = "Something specific to mark";
    document.getElementById("situations-card-sub").textContent = "Skip the filters — tell us the occasion.";
    document.getElementById("situations-title").textContent = "What's the occasion?";
  }

  renderChips();
}

document.getElementById("find-btn").onclick = () => {
  if (appMode === "lift") suggestFromFilters(true);
  else suggestCelebrate(true);
};
document.getElementById("swap").onclick = () => {
  if (appMode === "lift") suggestFromFilters(false);
  else suggestCelebrate(false);
};
document.getElementById("do-it").onclick = () => {
  const btn = document.getElementById("do-it");
  btn.textContent = "Nice.";
  setTimeout(() => { btn.textContent = "I'll do it"; }, 1800);
};
document.getElementById("surprise-card").onclick = () => suggestRandom();
document.getElementById("browse-card").onclick = () => {
  if (appMode === "lift") renderBrowse();
  else renderCelebrateBrowse();
  showBrowsePage();
};
document.getElementById("home-btn").onclick = () => showHome();
document.getElementById("back-btn").onclick = () => showHome();
document.getElementById("situations-card").onclick = () => {
  renderSituations();
  showSituationsPage();
};
document.getElementById("situations-back-btn").onclick = () => showHome();
document.getElementById("mode-lift-tab").onclick = () => switchMode("lift");
document.getElementById("mode-celebrate-tab").onclick = () => switchMode("celebrate");
document.getElementById("pick-for-me-btn").onclick = () => {
  const cards = document.getElementById("option-cards");
  cards.scrollIntoView({ behavior: "smooth", block: "center" });
  cards.classList.add("pulse");
  setTimeout(() => cards.classList.remove("pulse"), 900);
};

renderChips();
