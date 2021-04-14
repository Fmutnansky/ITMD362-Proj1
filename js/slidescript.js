window.onload = changeImg;//Automatic Slideshow
var images = [
  "media/Gaming.jpg",
  "media/hw.jpg",
  "media/LMG.jpg",
  "media/WaterBottle.jpg"],
  curIndex = 0;
  imgDuration = 8000; // Images Array

// Change Image
function changeImg() {
  document.getElementById('slider').className += "fadeOut";
    setTimeout(function() {
      document.getElementById('slider').src = images[curIndex];
      document.getElementById('slider').className = "";
    },1000);
  curIndex++;
  if (curIndex == images.length) { curIndex = 0; }
  setTimeout(changeImg, imgDuration);
}

window.onload = changeImg;