document.addEventListener('DOMContentLoaded', function() {

// body fades in  (fadeIn) using change in opacity and display setting over interval (duration)

  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');
  var closeButton = document.querySelector('.close');
  var submitButton = document.querySelector('.submit');
  var inputs = document.querySelectorAll('input');


  // var signIn = document.querySelector('.signin');
  //
  // var modalArea = document.querySelector('.modal');
  //
  // var closePage = document.querySelector('.close');
  //
  // var submitButton = document.querySelector('.submit');
  //
  // var input = document.querySelector('.input');

  // var input = document.querySelector('#user');

  function fadeIn() {
    modalArea.style.display = 'block';
  }

  function fadeOut() {
    modalArea.style.display = 'none';
  }

  signIn.addEventListener('click', fadeIn);
  closePage.addEventListener('click', fadeOut);
});
