//Скрипты на запуск слайдера с изображениями 
$(document).ready(function() {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

    $('.reviews').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
                }
            }
        ]
    });

    $('.documents').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
                }
            }
        ]
    });
});

//Скрипты за пуск слайдера с ползунками
$(document).ready(function() {
    var handle = $("#custom-handle");
	$("#slider").slider({
        animate: "slow",
        range: "min",    
        min: 1000,
        max: 10000,
		create: function() {
			handle.text($(this).slider("value"));
		},
		slide: function(event, ui) {
			handle.text( ui.value );
		}
	});
    
    var rashod = $('#custom-rashod');
    $("#rashod").slider({
        animate: "slow",
        range: "min",    
        min: 5,
        max: 15,
		create: function() {
			rashod.text($(this).slider("value"));
		},
		slide: function(event, ui) {
			rashod.text( ui.value );
		}
	});
}); 