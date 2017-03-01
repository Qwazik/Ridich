$(function() {
	var cl = console.log;
    /*-------------------------------------------------*/
    /*	start scripts
    /*-------------------------------------------------*/
    $('.fancybox').fancybox();
    //about
    // $('.about').height($('.about__right').height());

    /*-------------------------------------------------*/
    /*	responsive nav
    /*-------------------------------------------------*/
    $('.responsive-nav').click(function(){
    	var menu = $('.main-header .main-menu');
    	
    	if(!menu.is('.opened')){
    		openRespMenu(menu);
    	}else{
    		closeRespMenu(menu);
    	}
    });

    $('.main-menu a').click(function(){
        var menu = $('.main-header .main-menu');
        if($(this).closest('.main-menu').is('.opened')){
            closeRespMenu(menu);
        }
        
    });

    $('body').click(function(e){
    	var menu = $('.main-header .main-menu');
    	if(menu.is('.opened') && (!$(e.target).closest('.main-menu').length)){
    		closeRespMenu(menu);
    	}
    });

    function openRespMenu(menu){
    	menu.animate({
    		left: 0
    	}, 300, function(){
    		menu.addClass('opened');
    	});
    }

    function closeRespMenu(menu){
    	menu.animate({
    		left: '-100%'
    	}, 300, function(){
    		menu.removeClass('opened');
    	});
    }
    /*-------------------------------------------------*/
    /*   animate scroll
    /*-------------------------------------------------*/
    $('.main-menu a').click(function(){
        var element = $($(this).attr('href'));
        if(!!element.length){
            var target = $(element).offset().top;
            $('html, body').stop(true,true).animate({
                scrollTop: target
            }, 1000);
            return false;
        }else{
            window.location.href = '/'+$(this).attr('href');
        }
    });
    /*-------------------------------------------------*/
    /*	slider
    /*-------------------------------------------------*/
    if($('#mainSlider').find('li').length > 1){
    	
	    $('#mainSlider').owlCarousel({
	    	items: 1,
	    	loop: true,
	    	onInitialize: function(){
	    		cl(this);
	    	},
	    	onTranslated: function(e){
	    		var wrap = $('.page__main-header');
	    		var imageBlock = $('.page__main-header .slider-image');
	    		var activeElement = $('#mainSlider .active li');

	    		$(imageBlock).css('background-image', 'url('+activeElement.data('image')+')');
	    		$(imageBlock).hide().fadeIn(function(){
	    			$(wrap).css('background-image', 'url('+activeElement.data('image')+')');
	    		});

	    	}
	    });
    }
});
