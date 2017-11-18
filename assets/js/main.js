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
	
	function setMenu()
	{
		if($(document).width() < 755)
		{
			$('.navbar-default').css('opacity', 100);
			$('.navbar-default').css('background-color', '#333');
		}
		else {
			if($(document).scrollTop() <= 10)
			{
				$('.navbar-default').css('opacity', 100);
				$('.navbar-default').css('background-color', 'transparent');
			}
			else
			{
				$('.navbar-default').css('opacity', ($(document).scrollTop() / 500));
				$('.navbar-default').css('background-color', '#333');
			}
		}
	}

	$(document).on('scroll', function (e) {
		setMenu();
	});
	
    $('.progress .progress-bar').css("width", function() {
            return $(this).attr("aria-valuenow") + "%";
	});
	

	$(window).on('resize', function(){ 
		setMenu();
		if ($('#skills-list').width() > 340)
			$('#skills-list').css('font-size', $('#skills-list').width() + "px");
		else
			$('#skills-list').css('font-size', $('#skills-list').width() + 120 + "px");
		
	});
	
	setMenu();
	window.dispatchEvent(new Event('resize'));
    new WOW().init();
});
