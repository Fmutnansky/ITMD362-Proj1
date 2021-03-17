window.onload = function(){
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

const form = document.getElementById('myForm');
const success = document.getElementById('success');

form.onsubmit = submit;

function submit(event) {
  form.setAttribute('hidden', '');
  success.removeAttribute('hidden');

  event.preventDefault();
}

//Automatic Slideshow
var images = [
  ],
  curIndex = 0;
  imgDuration = 4000; // Images Array

//Change Image
function changeImg(){
  document.getElemtentById('slider').className += "fadeOut";
    setTimeout(function() {
      document.getElementById('slider').src = images[curIndex];
      document.getElementById('slider').className = "";
    },1000);
  curIndex++;
  if (curIndex == images.length) { curIndex = 0; }
  setTimeout(changeImg, imgDuration);
}
};
window.onload = changeImg;
