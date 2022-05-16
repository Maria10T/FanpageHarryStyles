var activeSong;
var imgrotire;

function play(id){
  
  activeSong = document.getElementById(id);

  activeSong.play();

  var percentageOfVolume = activeSong.volume / 1;
  var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;

  
document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

function pause(){
    activeSong.pause();
  }

  function playPause(id){
  
    
    activeSong = document.getElementById(id);
    
    
    if (activeSong.paused){
      activeSong.play();

    }else{
      activeSong.pause();
    }
  }

  function stopSong(){
    activeSong.currentTime = 0;
    activeSong.pause();
  }

  
function updateTime(){
    var currentSeconds = (Math.floor(activeSong.currentTime % 60) &lt; 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    var currentMinutes = Math.floor(activeSong.currentTime / 60);
  
   
    document.getElementById('songTime').innerHTML = currentMinutes + ":" + currentSeconds + ' / ' + Math.floor(activeSong.duration / 60) + ":" + (Math.floor(activeSong.duration % 60) &lt; 10 ? '0' : '') + Math.floor(activeSong.duration % 60);
 
    var percentageOfSong = (activeSong.currentTime/activeSong.duration);
    var percentageOfSlider = document.getElementById('songSlider').offsetWidth * percentageOfSong;
  
    document.getElementById('trackProgress').style.width = Math.round(percentageOfSlider) + "px";
  }
  
  
  function setLocation(percentage){
    activeSong.currentTime = activeSong.duration * percentage;
  }

  function setSongPosition(obj,e){

    var songSliderWidth = obj.offsetWidth;
    var evtobj=window.event? event : e;
    clickLocation = evtobj.layerX - obj.offsetLeft;
  
    var percentage = (clickLocation/songSliderWidth);
   
    setLocation(percentage);
  }