$(function()
{
    $('a.page-scroll').bind('click', function(event) {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#main-nav').affix({
        offset: {
            top: 200
        }
    });

	$(document).on('scroll', function (e) {
		$('.navbar-default').css('opacity', (0.4 + $(document).scrollTop() / 800));
	});
	
    $('.progress .progress-bar').css("width", function() {
            return $(this).attr("aria-valuenow") + "%";
	});

    new WOW().init();
});
