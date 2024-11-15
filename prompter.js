const content = document.querySelector("#content");

const words = (tokens) =>
  tokens.flatMap((t) =>
    t
      .split("\n")
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
  );

const subject = words`
    teacher
    doctor
    nurse
    police officer
    firefighter
    chef
    farmer
    carpenter
    mechanic
    electrician
    plumber
    engineer
    scientist
    pilot
    astronaut
    lawyer
    judge
    actor
    musician
    artist
    photographer
    writer
    librarian
    soldier
    sailor
    architect
    dentist
    veterinarian
    baker
    butcher
    tailor
    barber
    gardener
    accountant
    cashier
    bus driver
    taxi driver
    waiter
    receptionist
    cleaner
    delivery driver
    construction worker
    security guard
    painter
    social worker
    counselor
    journalist
    editor
    scientist
    zookeeper
    dog
    cat
    bird
    fish
    dolphin
    elephant
    tiger
    lion
    bear
    snake
    horse
    cow
    sheep
    goat
    pig
    chicken
    rabbit
    frog
    kangaroo
    crocodile
    squirrel
    wolf
    fox
    deer
    owl
    bee
    ant
    butterfly
    spider
    monkey
    panda
    giraffe
    whale
    shark
    octopus
    crab
    turtle
    eagle
    bat
    penguin
    seal
    raccoon
    koala
    parrot
    flamingo
    hedgehog
    hedge
    robot
    alien
    wizard
`;

const adjective = words`
    a beautiful
    a brave
    a bright
    a calm
    a charming
    a clever
    a colorful
    a curious
    a dangerous
    a dark
    a delicious
    a dizzy
    a dramatic
    an elegant
    an energetic
    an enthusiastic
    an exciting
    an expensive
    a famous
    a fast
    a friendly
    a generous
    a gentle
    a glorious
    a graceful
    a happy
    a hardworking
    a heavy
    a helpful
    a horrible
    a hot
    a hungry
    an important
    an incredible
    an intelligent
    a jealous
    a joyful
    a lazy
    a lucky
    a magical
    a mysterious
    a nervous
    an old
    a playful
    a rich
    a romantic
    a scary
    a shiny
    a short
    a skinny
    a slow
    a smart
    a strong
    a tall
    a terrible
    a tiny
    a tough
    an ugly
    an unique
`;

const namedThings = words`
    Paris
    Tokyo
    New York
    London
    Berlin
    Moscow
    Rio de Janeiro
    Istanbul
    Stockholm
    Helsinki
    Marrakech
    Shanghai
    Fortnite
    bubblegum
    hyper
    afro
    anime
    ethnic
`;

const genericPlace = words`
    park
    beach
    mountain
    forest
    river
    lake
    desert
    island
    valley
    cave
    cliff
    canyon
    meadow
    garden
    village
    town
    city
    bridge
    farm
    harbor
    market
    temple
    library
    museum
    castle
    cathedral
    church
    school
    hospital
    office
    bank
    theater
    stadium
    zoo
    aquarium
    restaurant
    café
    bakery
    hotel
    motel
    airport
    train station
    bus stop
    highway
    plaza
    square
    alley
    mall
    factory
    warehouse
    dock
    lighthouse
    port
    market
    playground
    gym
    pool
    courtyard
    cemetery
    university
    prison
    cabin
    ranch
    resort
    waterfall
    volcano
    hill
    swamp
    prairie
    jungle
    glacier
    peninsula
    fjord
    rainforest
    beachfront
    lagoon
    observatory
    mine
    power plant
    dam
    arena
    skyscraper
    village square
    courthouse
    city hall
    library
    fortress
    pier
    archipelago
    subway station
    ferry terminal
    campsite
    vineyard
    orchard
    amphitheater
    monument
    barracks
    dockyard
    sanctuary
`;

const verb = words`
    smells
    tastes
    runs to
    walks to
    jumps to
    eats
    drinks with
    sleeps with
    reads to
    writes to
    speaks to
    listens to
    swims with
    flies with
    dances with
    sings to
    laughs with
    cries with
    thinks about
    learns about
    teaches about
    builds with
    creates
    breaks
    fixes
    cooks with
    bakes with
    paints
    draws
    opens
    closes
    lifts
    carries
    catches
    kicks
    punches
    hugs
    kisses
    smiles to
    claps with
    waves to
    shouts to
    whispers to
    runs from
    jumps over
    digs with
    climbs over
    crawls over
    hides from
    plays with
    watches
    cleans
    drives with
    rides with
    teaches
    washes
    buys
    sells
    gives
    takes
    spins
    folds
    cuts
    grows
    shrinks
    wins
    loses to
    fights with
    screams to
    slides to
    swims with
    plans with
    organizes with
    celebrates with
    agrees with
    disagrees with
    waits
    helps
    hurts
    relaxes with
    believes to
    shares
    searches
    follows
    leads
    protects
`;

const thing = words`
    a table
    a chair
    a lamp
    a book
    a pen
    a pencil
    a phone
    a laptop
    a cup
    a bottle
    a spoon
    a fork
    a knife
    a plate
    a bowl
    a clock
    a television
    a mirror
    a towel
    a soap
    a shampoo
    a comb
    glasses
    a wallet
    a key
    a door
    a window
    a carpet
    a curtain
    a refrigerator
    a microwave
    a hat
    shoes
    socks
    a shirt
    a jacket
    a dress
    a scarf
    gloves
    a watch
    a ring
    a necklace
    a bracelet
    a bag
    a couch
    a desk
    a calendar
    a notebook
    scissors
    a tape
    a paper
    a magazine
    a newspaper
    a puzzle
    a game
    a toy
    a ball
    a flashlight
    a speaker
    headphones
    a tablet
    a calculator
    a box
    a screwdriver
    a nail
`;

const musicStyle = words`
    rock
    pop
    jazz
    blues
    classical
    hip-hop
    rap
    country
    reggae
    funk
    soul
    r&b
    disco
    punk
    heavy metal
    electronic
    house
    techno
    trance
    dubstep
    ambient
    synthwave
    industrial
    grunge
    ska
    reggaeton
    latin
    salsa
    flamenco
    tango
    bossa nova
    samba
    opera
    minimalism
    avant-garde
    noise
    drone
    boom bap
    lo-fi
    vaporwave
    synthpop
    dream pop
    dancehall
    chiptune
    breakbeat
    jungle
    drum and bass
    hardcore
    hardstyle
    psytrance
    goa trance
    downtempo
    chillwave
    electro swing
    eurodance
    metal
`;

const venues = words`
    airports
    theaters
    stadiums
    opera houses
    nightclubs
    bars
    elevators
    cafes
    restaurants
    art galleries
    museums
    weddings
    racetracks
    skate parks
    rooftop terraces
    farm barns
    gardens
    campgrounds
    castles
    monasteries
    cathedrals
    cruise ships
    yacht clubs
    mansions
    libraries
    military bases
    corporate offices
    business centers
    rehabilitation centers
    casinos
    community pools
    ranches
    observatories
    botanical gardens
    bowling alleys
`;

const musicalElement = words`
    guitar
    bassline
    piano
    drum machine
    synth
    bongo
    handclap
    tambourine shake
    string
    brass
    violin
    cello
    saxophone
    trumpet
    flute
    oboe
    clarinet
    harmonica
    organ
    harp
    accordion
    triangle
    marimba
    vibraphone
    glockenspiel
    steel drum
    conga
    cowbell
    snare roll
    cymbal
    sub-bass
    moog synth
    arpeggiator pattern
    breakbeat
    polyrhythm
    drone
    key change
    dissonance
    slide guitar
    power chord
    arpeggio
    falsetto
    vocal
    rap
    beatboxing
    scat singing
    chanting
    shouting
    whisper vocal
    spoken word
    synth pad
    ambient soundscape
`;

const musicalElementCont = words`
    chaos
    mayhem
    section
    part
    ending
    intro
    solo
`;

const musicalAdjective = words`
    a beautiful
    a brave
    a bright
    a calm
    a dark
    a dizzy
    a dramatic
    an energetic
    a fast
    a gentle
    a happy
    a heavy
    a horrible
    an intelligent
    a joyful
    a lazy
    a loud
    a mysterious
    a nervous
    a noisy
    a peaceful
    a playful
    a powerful
    a quick
    a quiet
    a romantic
    a scary
    a simple
    a slow
    a smooth
    a soft
    a sweet
    a terrible
`;

const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

const createPlaceholder = () => {
  const placeholder = document.createElement("span");
  content.appendChild(placeholder);
  return placeholder;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let spacePressed = false;
let drawRunning = false;
document.body.addEventListener("keydown", (event) => {
  switch (event.key) {
    case " ":
      spacePressed = true;
      return;
    case "1":
      if (!drawRunning) {
        drawRunning = true;
        drawMusicPrompt();
      }
      return;
    case "2":
      if (!drawRunning) {
        drawRunning = true;
        drawGraphicsPrompt();
      }
      return;
  }
});

const identity = (a) => a;

const drawWord = async (list, mapFn = identity) => {
  const elem = createPlaceholder();
  spacePressed = false;
  while (!spacePressed) {
    await sleep(50);
    elem.innerText = " " + mapFn(pickRandom(list));
  }
};

const blinkWordIn = async (word) => {
  const elem = createPlaceholder();
  elem.innerText = " " + word;
  for (let i = 0; i < 3; i++) {
    elem.style.opacity = "100%";
    await sleep(50);
    elem.style.opacity = "0";
    await sleep(50);
  }
  elem.style.opacity = "100%";
};

const typeWordIn = async (word) => {
  const elem = createPlaceholder();
  let text = " ";
  for (let char of word.split("")) {
    text += char;
    elem.innerText = text;
    await sleep(50);
  }
};

const addWords = async (words) => {
  const tokens = words.split(" ");
  console.log(tokens);
  for (let i in tokens) {
    if (i === "0") {
      await blinkWordIn(tokens[i]);
    } else {
      await typeWordIn(tokens[i]);
    }
  }
};

const stripArticle = (w) => w.replace(/^an?\s/, "");

const capitalize = (w) => w.slice(0, 1).toUpperCase() + w.slice(1);

const drawMusicPrompt = async () => {
  await addWords("Music for the");
  await drawWord(venues);
  await addWords("with");
  await drawWord(musicalAdjective);
  await drawWord(musicalElement);
  await drawWord(musicalElementCont);
  await addWords("– and");
  await drawWord([
    "a hint of",
    "a section of",
    "a part of",
    "occassionally appearing",
    "a middle part of",
    "a cursed amount of",
  ]);
  await drawWord(musicalAdjective, stripArticle);
  await drawWord(namedThings);
  await drawWord(musicStyle);
};

const drawGraphicsPrompt = async () => {
  await drawWord(adjective, capitalize);
  await drawWord(subject);
  await drawWord(verb);
  await drawWord(adjective);
  await drawWord(thing, stripArticle);
  await addWords("at the");
  await drawWord(genericPlace);
};
