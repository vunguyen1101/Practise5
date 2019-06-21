/////event for hamburger
$(document).ready(function(){
	$('.nav__hamburger').click(function(){
        $('.nav__mobile').slideToggle(300);
        $('.nav__hamburger').toggleClass('open');
        $('header').toggleClass('darken');
	});
});

////isotope

$(document).ready(function(){
    var content=$(".isotope .row"),tabs=$(".isotope__tag");
    tabs.on('click', function(){
  
      tabs.removeClass('active').filter(this).addClass('active');
      var filter=$(this).data('filter');
      
      content.isotope({
        filter: filter
      });
      return false;
    });
  });