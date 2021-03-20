const bodies = fetch('bodies.json').then((res) => res.json());
const driver = fetch('driver.json').then((res) => res.json());
const driverModel = fetch('driverModel.json').then((res) => res.json());
const gliders = fetch('gliders.json').then((res) => res.json());
const tires = fetch('tires.json').then((res) => res.json());
const tracks = fetch('MarioKart8Tracks.json').then((res) => res.json());

function flattenTracks(tracks) {
    let flatTracks = {};
    
    Object.keys(tracks).map((set) => {
        Object.keys(tracks[set]).map((cup) => {
            flatTracks = {
                ...flatTracks,
                ...tracks[set][cup],
            };
        });
    });
    return Object.values(flatTracks);
}

function convertToOptions(source, destination) {
    for (let i = 0; i < source.length; i++) {
        let el = document.createElement('option');
        el.value = source[i].name;
        el.textContent = source[i].name;
        destination.appendChild(el);
    }
}

Promise.all([bodies, driver, driverModel, gliders, tires, tracks])
  .then(([bodies, driver, driverModel, gliders, tires, tracks]) => {
    let flatTracks = flattenTracks(tracks);
    let trackName = document.querySelector('#track-name');
    let character = document.querySelector('#character');
    let body = document.querySelector('#body');
    let tire = document.querySelector('#tire');
    let glider = document.querySelector('#glider');
    let previous = document.querySelector('#previous');
    let next = document.querySelector('#next');
    let toJson = document.querySelector('#toJson');
    let textarea = document.querySelector('textarea');

    let currentTrack = 0;
    let storedValues = Array(flatTracks.length);

    let ls = window.localStorage.getItem('tracks');
    if (ls) {
      storedValues = JSON.parse(ls);
    }

    convertToOptions(driver, character);
    convertToOptions(bodies, body);
    convertToOptions(tires, tire);
    convertToOptions(gliders, glider);

    updateValues();

    function SaveTrack() {
      let selectedCharacter = character.selectedIndex;
      let selectedBody = body.selectedIndex;
      let selectedTire = tire.selectedIndex;
      let selectedGlider = glider.selectedIndex;
      
      storedValues[currentTrack] = {
        character: selectedCharacter,
        body: selectedBody,
        tire: selectedTire,
        glider: selectedGlider,
      };

      console.log(storedValues);

      window.localStorage.setItem('tracks', JSON.stringify(storedValues));
    }

    function updateValues() {
      if (storedValues[currentTrack] === undefined || storedValues[currentTrack] === null) {
        storedValues[currentTrack] = {
          character: 0,
          body: 0,
          tire: 0,
          glider: 0,
        };
      };

      let selectedCharacter = storedValues[currentTrack].character;
      let selectedBody = storedValues[currentTrack].body;
      let selectedTire = storedValues[currentTrack].tire;
      let selectedGlider = storedValues[currentTrack].glider;

      trackName.textContent = flatTracks[currentTrack];

      character.selectedIndex = selectedCharacter;
      body.selectedIndex = selectedBody;
      tire.selectedIndex = selectedTire;
      glider.selectedIndex = selectedGlider;
    
    }

    function handleNextClick() {
      SaveTrack();
      if (currentTrack < flatTracks.length - 1) {
        currentTrack++;
      } else {
        alert('done!');
      }
      updateValues();
    }

    function handlePreviousClick() {
      SaveTrack();
      if(currentTrack > 0) {
        currentTrack--;
      }

      updateValues();
    }

    function handleToJsonClick() {
      textarea.textContent = JSON.stringify(storedValues, null, 2);
    }

    next.addEventListener('click', handleNextClick);
    previous.addEventListener('click', handlePreviousClick);
    toJson.addEventListener('click', handleToJsonClick);




    
  });
