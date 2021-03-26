$('#email-input').on('input', checkInput);
$('#password-input').on('input', checkInput);

function checkInput(){
  var email = $('#email-input').val();
  var password = $('#password-input').val();
  
  if (email === '' || password === ''){
    $('#submit-btn').css('background-color', '#9B9B9B')
  }else{
    $('#submit-btn').css('background-color', '#FF5733')
  }
}

$('#find-pass').on('click', popupFadeIn);

function popupFadeIn () {
  $('#popup').fadeIn(500);
};

$('#close-btn').on('click', popupFadeOut);

function popupFadeOut () {
    $('#popup').fadeOut(500);
};

$(document).on('keydown', pushEscKey);

function pushEscKey(event) {
    if(event.which=='27') { // ESC KEY
        $('#popup').fadeOut(500);
    }
};