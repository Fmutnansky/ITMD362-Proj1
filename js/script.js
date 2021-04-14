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
  success.removeAttribute("hidden");

  event.preventDefault();
}

};
