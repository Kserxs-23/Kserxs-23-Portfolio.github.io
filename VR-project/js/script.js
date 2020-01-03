

/*stopping video after closing modal window*/
$(document).ready(function() {
  'use strict';

  var close_btn = document.getElementById('pause_video');
  var close_btn_2 = document.getElementById('pause_video_2');

  var click = close_btn.addEventListener('click', ()=> {


    var my_video = $(".watch-the-video-youtube");
    var my_video = $("iframe")[0].contentWindow;

    $("#pause_video").on("click", function() {
        
          my_video.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");
          
        });

  })

  var click_2 = close_btn_2.addEventListener('click', ()=> {


    var my_video = $(".watch-the-video-youtube");
    var my_video = $("iframe")[0].contentWindow;

    $("#pause_video_2").on("click", function() {
        
          my_video.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");
          
        });

  })



});

/*forms appearing*/

$(document).ready(function() {

        $('.header-link__order-link').on('click', function(event) {
           event.preventDefault();
           $('.request-display').addClass('request-block');
           $('html').css('overflow', 'hidden');
        });

        $('.ask-manager').on('click', function(event) {
          event.preventDefault();
          $('.ask-display').addClass('ask-block');
          $('html').css('overflow', 'hidden');
        });

        $('.main-trigger-content__btn').on('click', function(event) {
          event.preventDefault();
          $('.order-display').addClass('order-block');
          $('html').css('overflow', 'hidden');
        });

        $('.games-btn').on('click', function(event) {
          event.preventDefault();
          $('.order-display').addClass('order-block');
          $('html').css('overflow', 'hidden');
        });

        $('.about-btn').on('click', function(event) {
          event.preventDefault();
          $('.choose-display').addClass('choose-block');
          $('html').css('overflow', 'hidden');
        });

        $('.form-select').focusin(function() {
          $('.wrap-arrow').addClass('wrap-arrow-focus');
        });
        $('.form-select').focusout(function() {
          $('.wrap-arrow').removeClass('wrap-arrow-focus');
        });

        $('.close-btn-icon').on('click', function(event) {
          event.preventDefault();
          $('.request-display').removeClass('request-block');
          $('.ask-display').removeClass('ask-block');
          $('.order-display').removeClass('order-block');
          $('.choose-display').removeClass('choose-block');
          $('input[name="user_phone"]').val("");
          $('input[name="user_name"]').val("");
          $('html').css('overflow', 'scroll');
        });

        $('.thank-btn').on('click', function(event) {
          event.preventDefault();
          $('.thank').css('display', 'none');
          $('html').css('overflow', 'scroll');
  });
});


/*send message and after submitting effects*/
$(document).ready(function() {

  $('#call-request').trigger('reset');
  $(function() {
    'use strict';
    $('#call-request').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        url: '../mailer/send.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function(msg) {
          console.log(msg);
          if (msg == 'ok') {
            alert('Сообщение отправлено');
            $('#call-request').trigger('reset'); // очистка формы
            $('.request-display').removeClass('request-block');
            $('.thank').css({
              display: 'block',
              overflow: 'hidden'
            });
          } else {
            alert('Ошибка');
          }
        }
      });
    });
  });

  $('#get-answers').trigger('reset');
  $(function() {
    'use strict';
    $('#get-answers').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        url: '../mailer/send.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function(msg) {
          console.log(msg);
          if (msg == 'ok') {
            alert('Сообщение отправлено');
            $('#get-answers').trigger('reset'); // очистка формы
            $('.ask-display').removeClass('ask-block');
            $('.thank').css({
              display: 'block',
              overflow: 'hidden'
            });
          } else {
            alert('Ошибка');
          }
        }
      });
    });
  });

  $('#order-vr').trigger('reset');
  $(function() {
    'use strict';
    $('#order-vr').on('submit', function(e) {
      e.preventDefault();
      $.ajax({
        url: '../mailer/send.php',
        type: 'POST',
        contentType: false,
        processData: false,
        data: new FormData(this),
        success: function(msg) {
          console.log(msg);
          if (msg == 'ok') {
            alert('Заявка подана');
            $('#order-vr').trigger('reset'); // очистка формы
            $('.order-display').removeClass('order-block');
            $('.thank').css({
              display: 'block',
              overflow: 'hidden'
            });
          } else {
            alert('Ошибка');
          }
        }
      });
    });
  });

  $('#call-back-1').trigger('reset');
    $(function() {
      'use strict';
      $('#call-back-1').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
          url: '../mailer/send.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: new FormData(this),
          success: function(msg) {
            console.log(msg);
            if (msg == 'ok') {
              alert('Заявка подана');
              $('#call-back-1').trigger('reset'); // очистка формы
              $('.thank').css({
                display: 'block',
                overflow: 'hidden'
              });
            } else {
              alert('Ошибка');
            }
          }
        });
      });
    });

    $('#call-back-2').trigger('reset');
    $(function() {
      'use strict';
      $('#call-back-2').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
          url: '../mailer/send.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: new FormData(this),
          success: function(msg) {
            console.log(msg);
            if (msg == 'ok') {
              alert('Заявка подана');
              $('#call-back-2').trigger('reset'); // очистка формы
              $('.thank').css({
                display: 'block',
                overflow: 'hidden'
              });
            } else {
              alert('Ошибка');
            }
          }
        });
      });
    });

    $('#call-back-3').trigger('reset');
    $(function() {
      'use strict';
      $('#call-back-3').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
          url: '../mailer/send.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: new FormData(this),
          success: function(msg) {
            console.log(msg);
            if (msg == 'ok') {
              alert('Заявка подана');
              $('#call-back-3').trigger('reset'); // очистка формы
              $('.thank').css({
                display: 'block',
                overflow: 'hidden'
              });
            } else {
              alert('Ошибка');
            }
          }
        });
      });
    });

    $('#call-back-4').trigger('reset');
    $(function() {
      'use strict';
      $('#call-back-4').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
          url: '../mailer/send.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: new FormData(this),
          success: function(msg) {
            console.log(msg);
            if (msg == 'ok') {
              alert('Заявка подана');
              $('#call-back-4').trigger('reset'); // очистка формы
              $('.thank').css({
                display: 'block',
                overflow: 'hidden'
              });
            } else {
              alert('Ошибка');
            }
          }
        });
      });
    });

    $('#complectation').trigger('reset');
    $(function() {
      'use strict';
      $('#complectation').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
          url: '../mailer/send-complectation.php',
          type: 'POST',
          contentType: false,
          processData: false,
          data: new FormData(this),
          success: function(msg) {
            console.log(msg);
            if (msg == 'ok') {
              alert('Заявка подана');
              $('#complectation').trigger('reset'); // очистка формы
              $('.choose-display').removeClass('choose-block');
              $('.thank').css({
                display: 'block',
                overflow: 'hidden'
              });
            } else {
              alert('Ошибка');
            }
          }
        });
      });
    });


});

/*youtube block*/

$(document).ready(function() {
        
  $('.video-word-link').on('click', function(event) {
    event.preventDefault();
    $('.watch-wrapper').css('display', 'block');
    $('html').css('overflow', 'hidden');
  });

  $('.video-link').on('click', function(event) {
    event.preventDefault();
    $('.watch-wrapper').css('display', 'block');
    $('html').css('overflow', 'hidden');
  });

  $('.watch-the-video').on('click', function(event) {
    event.preventDefault();
    $('.watch-wrapper').css('display', 'none');
    $('html').css('overflow', 'scroll');
  });    
});

/*masked input*/

jQuery(function($){
  $("input[name='user_phone']").mask("+ 9 (999) 999-99-99");
});


