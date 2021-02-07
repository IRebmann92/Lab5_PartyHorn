// notes     ***************************

// === is strict compare for types
// use document obj to write to webpage
// general structure of DOM -> Vars->getters->functions->events

// end notes ***************************


// set const var for varables used throughout
const airHorn = 'airHorn';
const carHorn = 'carHorn';
const partyHorn = 'partyHorn';

// create audios
let airHorn_audio = new Audio("./assets/media/audio/air-horn.mp3");
let carHorn_audio = new Audio("./assets/media/audio/car-horn.mp3");
let partyHorn_audio = new Audio("./assets/media/audio/party-horn.mp3");
let curAudio = airHorn;
let volumeLevel = 100;

// get honk audio on click
document.getElementById("honk-btn").onclick = function(e) {
  e.preventDefault(); 
  pushAudio()
};
// get air horn on click and update atributes
document.getElementById("radio-air-horn").onclick = function(e) {
  curAudio = airHorn;
  updateImage(curAudio);
  console.log("air horn selected");
};
// get car horn on click and update atributes
document.getElementById("radio-car-horn").onclick = function(e) {
  curAudio = carHorn;
  updateImage(curAudio);
  console.log("car horn selected");
};
// get party horn on click and update atributes
document.getElementById("radio-party-horn").onclick = function(e) {
  curAudio = partyHorn;
  updateImage(curAudio);
  console.log("party horn selected");
};
/*
 * Function name: pushAudio
 * Description: output audio
 * @param [type] [name]: none
 * @return [type]: none
 */
function pushAudio() {
    if (curAudio === airHorn) {
      if(volumeLevel>=100){volumeLevel=100;}
      if(volumeLevel<=0){volumeLevel=0;} 
      airHorn_audio.volume = volumeLevel/100;
      airHorn_audio.play();
    }
    else if (curAudio === carHorn) {
      if(volumeLevel>=100){volumeLevel=100;}
      if(volumeLevel<=0){volumeLevel=0;} 
      carHorn_audio.volume = volumeLevel/100;
      carHorn_audio.play();
    }
    else {
      if(volumeLevel>=100){volumeLevel=100;}
      if(volumeLevel<=0){volumeLevel=0;} 
      partyHorn_audio.volume = volumeLevel/100;
      partyHorn_audio.play(); 
    }
}
/*
 * Function name: updateImage
 * Description: read name
 * @param [type] [name]: newImage
 * @return [type]: none
 */
function updateImage(newImage) {
  if (newImage === airHorn) {
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg"
  }
  else if (newImage === carHorn) {
    document.getElementById("sound-image").src = "./assets/media/images/car.svg"
  }
  else {
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg"  
  }
}
/*
 * Function name: updateVolBar
 * Description: read name
 * @param [type] [name]: none
 * @return [type]: none
 */
function updateVolBar( ){
    let volSlider = document.getElementById("volume-slider");
    volSlider.value = volumeLevel;
}
/*
 * Function name: updateVolImage
 * Description: read name
 * @param [type] [name]: none
 * @return [type]: none
 */
function updateVolImage( ){
  let volImage = document.getElementById("volume-image");
  if(volumeLevel === 0){volImage.src = "./assets/media/icons/volume-level-0.svg"}
  else if(volumeLevel < 34){volImage.src = "./assets/media/icons/volume-level-1.svg"}
  else if(volumeLevel < 67){volImage.src = "./assets/media/icons/volume-level-2.svg"}
  else {volImage.src = "./assets/media/icons/volume-level-3.svg" }
}

/*
 * Function name: mute
 * Description: no sound on vol = 0 -> disable audio button
 * @param [type] [name]: none
 * @return [type]: none
 */
function mute(){
  if (volumeLevel <= 0) {
    document.getElementById("honk-btn").disabled = true;
  }  
  else {
    document.getElementById("honk-btn").disabled = false;    
  }
}
/*
 * Function name: updateVolValue
 * Description: read name
 * @param [type] [name]: none
 * @return [type]: none
 */
function updateVolValue(){
  document.getElementById("volume-number").value = volumeLevel; 
}

// Events

document.getElementById("volume-number").addEventListener('focusout', (event) => {
  volumeLevel = event.target.value;
  if(volumeLevel>=100){
    document.getElementById("volume-number").value=100;
  }
  if(volumeLevel<=0){
    document.getElementById("volume-number").value=0;
  } 
  updateVolImage();
  updateVolBar();
  mute();
});

document.getElementById("volume-slider").addEventListener('mousemove', (event) => {
  volumeLevel = event.target.value;
  updateVolImage();
  updateVolValue();
  mute();
});
