$(document).ready(function () {

	$('.anchor').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
    'scrollTop': $target.offset().top - 60
    }, 800, 'swing', function () {
      $('#toggle').removeClass('is-active');
     $('#navbarCollapse').removeClass('is-active');
  });
  });

	$('.jsWkBtn').click(function() {
		$('.jsWkHide').animate({'height':0}, 500, function() {
    	$('.jsWkHide').hide();
  	});
		$('.works-form').slideDown('500');
	});

  $('#toggle').click(function() {
    $(this).toggleClass('is-active');
    $('#navbarCollapse').toggleClass('is-active');
  });

})