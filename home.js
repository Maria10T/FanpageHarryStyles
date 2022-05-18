
var countDownDate = new Date("May 20, 2022 00:00:00").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Enjoy!";
  }
}, 1000);

var photo = document.getElementById('photo');
photo.addEventListener('mouseover', function (photo) {
  photo.target.src = "home2.jpg"
})
photo.addEventListener('mouseout', function (photo) {
  photo.target.src = "main.jpg"
})

photo.addEventListener('mouseover', function (photo) {
  photo.target.src = "home2.jpg"
})