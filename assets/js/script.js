$(document).ready(function(){ 
  if ($(window).width() < 981) {
    $(".descriptor").css({
      'display': 'block',
      'text-align': 'center',
      'margin-top': '3%',
      'font-weight': '700',
    });
  };

  $(".pink").hover(
    function(){
      $("#animation").fadeIn('slow');
    },
    function(){
      $("#animation").fadeOut('slow');
    }
  );

  $(".blue").hover(
    function(){
      $("#design").fadeIn('slow');
    },
    function(){
      $("#design").fadeOut('slow');
    }
  );

  $(".yellow").hover(
    function(){
      $("#others").fadeIn('slow');
    },
    function(){
      $("#others").fadeOut('slow');
    }
  );
});

