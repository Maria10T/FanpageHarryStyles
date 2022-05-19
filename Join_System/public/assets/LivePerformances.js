var videoPlayer = document.getElementById("video-player");
var videoVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";

}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}