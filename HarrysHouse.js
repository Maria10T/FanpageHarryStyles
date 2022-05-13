var activeSong;
var imgrotire;
//Plays the song. Just pass the id of the audio element.
function play(id){
  //Sets the active song to the song being played. All other functions depend on this.
  activeSong = document.getElementById(id);
  //Plays the song defined in the audio tag.
  activeSong.play();
  //Calculates the starting volume percentage of the song.
  var percentageOfVolume = activeSong.volume / 1;
  var percentageOfVolumeMeter = document.getElementById('volumeMeter').offsetWidth * percentageOfVolume;

  //Fills out the volume status bar.
  
document.getElementById('volumeStatus').style.width = Math.round(percentageOfVolumeSlider) + "px";
}

function pause(){
    activeSong.pause();
  }

  function playPause(id){
  
    //Sets the active song since one of the functions could be play.
    activeSong = document.getElementById(id);
    
    //Checks to see if the song is paused, if it is, play it from where it left off otherwise pause it.
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

  //Updates the current time function so it reflects where the user is in the song.
//This function is called whenever the time is updated. This keeps the visual in sync with the actual time.
function updateTime(){
    var currentSeconds = (Math.floor(activeSong.currentTime % 60) &lt; 10 ? '0' : '') + Math.floor(activeSong.currentTime % 60);
    var currentMinutes = Math.floor(activeSong.currentTime / 60);
  
    //Sets the current song location compared to the song duration.
    document.getElementById('songTime').innerHTML = currentMinutes + ":" + currentSeconds + ' / ' + Math.floor(activeSong.duration / 60) + ":" + (Math.floor(activeSong.duration % 60) &lt; 10 ? '0' : '') + Math.floor(activeSong.duration % 60);
  
    //Fills out the slider with the appropriate position.
    var percentageOfSong = (activeSong.currentTime/activeSong.duration);
    var percentageOfSlider = document.getElementById('songSlider').offsetWidth * percentageOfSong;
  
    //Updates the track progress div.
    document.getElementById('trackProgress').style.width = Math.round(percentageOfSlider) + "px";
  }
  
  /*
  Gets the percentage of the click on the slider to set the song position accordingly.
  Source for Object event and offset: http://website-engineering.blogspot.com/2011/04/get-x-y-coordinates-relative-to-div-on.html
  */
  //Sets the location of the song based off of the percentage of the slider clicked.
  function setLocation(percentage){
    activeSong.currentTime = activeSong.duration * percentage;
  }
  /*
  Gets the percentage of the click on the slider to set the song position accordingly.
  Source for Object event and offset: http://website-engineering.blogspot.com/2011/04/get-x-y-coordinates-relative-to-div-on.html
  */
  function setSongPosition(obj,e){
    //Gets the offset from the left so it gets the exact location.
    var songSliderWidth = obj.offsetWidth;
    var evtobj=window.event? event : e;
    clickLocation = evtobj.layerX - obj.offsetLeft;
  
    var percentage = (clickLocation/songSliderWidth);
    //Sets the song location with the percentage.
    setLocation(percentage);
  }