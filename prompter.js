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
    a cold
    a colorful
    a creative
    a curious
    a dangerous
    a dark
    a delicate
    a delicious
    a dizzy
    a dramatic
    an easy
    an efficient
    an elegant
    an energetic
    an enthusiastic
    an exciting
    an expensive
    a famous
    a fast
    a fierce
    a friendly
    a generous
    a gentle
    a glorious
    a graceful
    a happy
    a hardworking
    a harsh
    a healthy
    a heavy
    a helpful
    a honest
    a horrible
    a hot
    a humble
    a hungry
    an important
    an incredible
    an intelligent
    an interesting
    a jealous
    a joyful
    a kind
    a lazy
    a light
    a lonely
    a loud
    a lucky
    a magical
    a mysterious
    a narrow
    a neat
    a nervous
    a noisy
    an old
    an optimistic
    an organized
    a passionate
    a peaceful
    a playful
    a powerful
    a proud
    a quick
    a quiet
    a rare
    a realistic
    a reliable
    a rich
    a romantic
    a rough
    a safe
    a scary
    a sensitive
    a serious
    a shiny
    a short
    a silent
    a simple
    a skinny
    a slow
    a smart
    a smooth
    a soft
    a strong
    a sweet
    a talented
    a tall
    a terrible
    a tiny
    a tough
    an ugly
    an unique
    a warm
    a wise
`;

const namedPlace = words`
    paris
    tokyo
    new york
    london
    sydney
    rome
    beijing
    cairo
    berlin
    moscow
    venice
    dubai
    rio de janeiro
    barcelona
    los angeles
    istanbul
    amsterdam
    bangkok
    athens
    singapore
    madrid
    hong kong
    mexico city
    buenos aires
    cape town
    toronto
    san francisco
    delhi
    seoul
    prague
    mumbai
    lisbon
    vienna
    reykjavik
    florence
    zurich
    honolulu
    stockholm
    dublin
    kuala lumpur
    helsinki
    marrakech
    shanghai
    milan
    brussels
    lima
    oslo
    sydney opera house
    grand canyon
    eiffel tower
    great wall of china
    machu picchu
    niagara falls
    sahara desert
    amazon rainforest
    mount everest
    taj mahal
    bora bora
    maldives
    vatican city
    serengeti
    loch ness
    badger hall
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
    lodge
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
    throws
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
    sends
    receives
    starts with
    stops with
    turns
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
    alternative
    folk
    electronic
    house
    techno
    trance
    dubstep
    ambient
    indie rock
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
    gospel
    opera
    chamber music
    baroque
    romantic
    minimalism
    avant-garde
    experimental
    noise
    drone
    psychedelic rock
    progressive rock
    new wave
    post-punk
    math rock
    emo
    trap
    drill
    boom bap
    lo-fi
    vaporwave
    synthpop
    dream pop
    shoegaze
    dancehall
    afrobeats
    afro-cuban
    afrobeat
    highlife
    bollywood
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
    bubblegum pop
    power pop
    glam rock
    art rock
    ska punk
    thrash metal
    death metal
    black metal
    doom metal
    sludge metal
    country rock
    bluegrass
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
    vineyards
    breweries
    beachfront pavilions
    gardens
    lodges
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

const stripArticle = (w) => w.replace(/^an?\s/, "");

const addWord = (word) => {
  createPlaceholder().innerText = " " + word;
};

const drawMusicPrompt = async () => {
  await addWord("music for the");
  await drawWord(venues);
  await addWord("played with");
  await drawWord(thing);
  await addWord("– maybe with a hint of");
  await drawWord(adjective, stripArticle);
  await drawWord(namedPlace);
  await drawWord(musicStyle);
};

const drawGraphicsPrompt = async () => {
  await drawWord(adjective);
  await drawWord(subject);
  await drawWord(verb);
  await drawWord(adjective);
  await drawWord(thing, stripArticle);
  await addWord("at the");
  await drawWord(genericPlace);
};
