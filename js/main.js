/////event for hamburger
$(document).ready(function(){


	$('.nav__hamburger').click(function(){
        $('.nav__mobile').slideToggle(300);
        $('.nav__hamburger').toggleClass('open');
        $('header').toggleClass('darken');
  });

  ////isotope
  var content=$(".isotope .row"),tabs=$(".isotope__tag");
  tabs.on('click', function(){

    tabs.removeClass('active').filter(this).addClass('active');
    var filter=$(this).data('filter');
    
    content.isotope({
      filter: filter
    });
    return false;
  });

  // scroll to section
  $("a[href^='#']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top;
  
    $("body, html").animate({
      scrollTop: position
    },1500);
  });

  ///Quantity
  $('#add').click(function () {
    if ($('#singleDish').val() < 100) {
      $('#singleDish').val(+$('#singleDish').val() + 1);
    }
  });
  $('#sub').click(function () {
    if ($('#singleDish').val() > 0) {
      if ($('#singleDish').val() > 0) $('#singleDish').val(+$('#singleDish').val() - 1);
    }
  });


  //slick
  $('.menu__bigposter--quote .container').slick({
    nextArrow: false,
    prevArrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  $('.Meal__carousel .row').slick({
    nextArrow: false,
    prevArrow: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }

    ]
  });

  // masonry
  $('.blogGrid').isotope({
    itemSelector: '.blogGrid__item',
    masonry: {
      gutter:30
    }
  });



});



	