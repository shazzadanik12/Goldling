
(function($){
	$(function(){

        
    
        if($('.sundown-wrap').length){
            $('.sundown-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay:false,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                fade: true,
            });
            $(window).on('resize', function () {
                $('.sundown-wrap').slick('resize');

            });
        }


        if ($('.thoughtfully-item-wrap').length) {
            $('.thoughtfully-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                responsive: [
                    {
                        breakpoint: 560,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                            breakpoint: 768,
                            settings: 'unslick'
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.thoughtfully-item-wrap').slick('resize');
                });
        }



       
        
        $('.cart').click(function(e){
            e.preventDefault();
            $('body').addClass('cart-show');
        }); 
        $('.cart-close').click(function(e){
            e.preventDefault();
            $('body').removeClass('cart-show');
        }); 
        if($('.age-gate-main').length){
            $('body').addClass('age-gate-page');
        }

        //cart
        /*Product Quantity*/
        $('.product-quantity').each(function(){
            const minus = $(this).find('.quantity__minus');
            const plus = $(this).find('.quantity__plus');
            const input = $(this).find('.quantity__input');
            minus.click(function(e) {
                e.preventDefault();
                var value = input.val();
                if (value > 1) {
                    value--;
                }
                input.val(value);
            });

            plus.click(function(e) {
                e.preventDefault();
                var value = input.val();
                value++;
                input.val(value);
            }) 
        });

        /*Product Quantity*/
        
        
        
        
        var mac = 0;
        if (navigator.userAgent.indexOf('Mac') > 0) {
            mac = 1;
        } else {
            mac = 0;
        }

        if (1 == mac) {
            $('body').addClass('mac-os');
        } else {
            $("body").addClass('win-os');
        }

        // Accepts any class name
        /*var rellax = new Rellax('.rellax');*/
        var rellax = new Rellax('.rellax', {horizontal: false, vertical: true});
        
        
        
//        $(window).on('scroll',function(){
//            var sunPosition = Math.round($(window).scrollTop() / $(window).height() * 100);
//            $('#sun-three figure').css('transform','translateX('+((sunPosition-100))+'%)');
//
//        });
        
        
        
        
        
        
        /*Single-product beginning*/
        $('.product-gallery-tab-triger ul li').click(function(){
            $('.product-gallery-tab-triger').removeClass('product-active');
            $(this).addClass('product-active');
            $('.product-gallery-item-wrap .product-gallery-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        if($(window).width()<769){
            if ($('.product-gallery-item-wrap').length) {
                $('.product-gallery-item-wrap').slick({
                    arrows:false,
                    infinite: true,
                    autoplay: false,
                    navigation:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    centerMode: false,
                })
                $(window).on('resize', function () {
                    $('.product-gallery-item-wrap').slick('resize');
                });
            }
        }
        
        
        
        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }
        
        
        if($('.fans-item-wrap').length){
            $('.fans-item-wrap').slick({
                arrows:false,
                infinite: true,
                autoplay:false,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: true,
                focusOnSelect: true,
                fade: false,
                responsive: [

                    {
                        
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                        },
                        
                    }
                    
                ]
            });
            $(window).on('resize', function () {
                $('.fans-item-wrap').slick('resize');

            });
        }
        /*Single-product end*/
        
        
        
        
	})// End ready function.
    
    
    
   
})(jQuery)

if ($('.instragram-wrap').length) {

    $('.instragram-wrap').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        centerPadding: "0",
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: false,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnHover: false,
        responsive: [

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $(window).on('resize', function () {
        $('.instragram-wrap').slick('resize');
    });
}   