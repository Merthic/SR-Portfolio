$(document).ready(function () {
    $('.text_container').animate({
        'marginTop': "+=100px",
        opacity: 0
    }, 0);

    $('.case_container, .contact_container').animate({
        'marginTop': "+=200px",
        opacity: 0
    }, 0);

    $('.text_container').stop().delay(300).animate({
        'marginTop' : "-=100px",
        opacity: 1,
    }, 2000);

    $('.mywork_btn').stop().delay(700).animate({
        opacity: 1
    }, 1000);

    $(".mywork_btn").on('click', function () {
        $('html, body').animate({scrollTop: window.innerHeight}, 1000);
    });

    $('html, body').animate({scrollTop: 0}, 100);

    setTimeout(function () {
        window.wasScrolled = false;
        $(window).bind('scroll',function(){
            if (!window.wasScrolled){ $('html, body').animate({scrollTop: window.innerHeight}, 1000)}
            window.wasScrolled = true;
        });

        $.fn.isInViewport = function () {
            let elementTop = $(this).offset().top;
            let elementBottom = elementTop + $(this).outerHeight()*0.01;

            let viewportTop = $(window).scrollTop()+100;
            let viewportBottom = viewportTop + $(window).height();

            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        var contact_animated;
        var case_animated;

        $(window).scroll(function () {
            if ($('.contact_container ').isInViewport() && contact_animated !== true) {
                $('.contact_container').stop().animate({
                    'marginTop': "-=200px",
                    opacity: 1
                }, 1000);
                console.log('success.')
                contact_animated = true;
                this.stop()
            }

            if ($('.case_container ').isInViewport() && case_animated !== true) {
                $('.case_container').stop().animate({
                    'marginTop': "-=200px",
                    opacity: 1
                }, 1000);
                console.log('success.')
                case_animated = true;
                this.stop()
            }
        });
    }, 1000);
});
