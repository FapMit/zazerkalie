$(function () {
    $('.hero__slider').slick({
        arrows: true,
        dots: true,
        swipe: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    swipe: true
                }
            }
        ]
    });

    $('.mirror__product-slider').slick({
        arrows: false,
        dots: true,
        swipe: true
    });

    $('.menu__buttons-link--more').on('click', function (e) {
        e.preventDefault()
        $('.menu__nav').addClass('menu__nav-open')
    })

    $('.burger').on('click', function (e) {
        e.preventDefault()
        $('.menu__nav').removeClass('menu__nav-open')
    })


    let arrowWidth = 25;

    $.fn.resizeselect = function (settings) {
        return this.each(function () {

            $(this).change(function () {
                let $this = $(this);

                // get font-weight, font-size, and font-family
                let style = window.getComputedStyle(this)
                let { fontWeight, fontSize, fontFamily } = style

                
                let text = $this.find("option:selected").text();
                let $test = $("<span>").html(text).css({
                    "font-size": fontSize,
                    "font-weight": fontWeight,
                    "font-family": fontFamily,
                    "visibility": "hidden" // prevents FOUC
                });

                
                $test.appendTo($this.parent());
                let width = $test.width();
                $test.remove();

                
                $this.width(width + arrowWidth);

                // run on start
            }).change();

        });
    };

    setTimeout(function() { 
        if ($(window).width() > 500) {
            $("select.mirror__filtres-mobile").resizeselect();
        }  
        else {
            $("select.mirror__filtres-mobile").width($(".container").width()-40);
        }       
    }, 100); 

    $(window).resize(function() {
            if ($(window).width() > 500) {
                $("select.mirror__filtres-mobile").resizeselect();
            }
            else {
                $("select.mirror__filtres-mobile").off();
                $("select.mirror__filtres-mobile").width($(".container").width()-40);
            }
        });
})