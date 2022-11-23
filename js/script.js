//Скрипты на запуск слайдера с изображениями 
$(document).ready(function() {
    $('.slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        draggable: false,
        variableWidth: true,
        adaptiveHeight: false,
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

    $('.partners').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // draggable: false,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 982,
                settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                arrows: false,
                centerPadding: '60px',
                centerMode: false,
                slidesToShow: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                }
            }
        ]
    })

    $('.advantage').slick({
        centerPadding: '60px',
        slidesToShow: 3,
        draggable: false,   
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
                slidesToShow: 1
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
    })

    $('.reviews').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 2,
        draggable: false,
        variableWidth: true,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            // console.log(slider);
            return '<span>' +  (i + 1) + '</span>' + '/' + slider.slideCount;
        },
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
        draggable: false,
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
    var probeg = $('#probeg');
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
		},
        // Передаем значения в скрытый инпут
        change: function(event, ui) {
            probeg.val(ui.value);
            calc();
        }
	});
    
    var rashod = $('#custom-rashod');
    var rashod_hidden = $('#rashod');
    $(".rashod").slider({
        animate: "slow",
        range: "min",    
        min: 5,
        max: 15,
		create: function() {
			rashod.text($(this).slider("value"));
		},
		slide: function(event, ui) {
			rashod.text( ui.value );
		},
        change: function(event, ui) {
            rashod_hidden.val(ui.value)
            calc();
        }
	});

    function calc() {
        var cb = $(".benz_inp").val(),
        cg = $(".gaz_inp").val(),
        prob = $(".probeg_inp").html(),
        ras = rashod_hidden[0].value,
        gbo = $(".price_gbo").val(),
        calc1 = 0,
        calc2 = 0,
        calc3 = 0;
        calc1 = ras/100 * prob * (cb - cg)
        calc2 = calc1 * 12
        calc3 = gbo / (ras/100 * prob * (cb - cg));
        $("#calc2").text(Math.ceil(calc2)); //Экономия в год
        $("#calc3").text(Math.floor(calc3)); //Окупаемость 
        $("#calc1").text(Math.ceil(calc1)); //Экономия в месяц
    }

    //checkbox Метан/Пропан
    let checkbox = document.querySelector('#gazz');
    let text = document.getElementsByClassName('gas1');
    let input = document.getElementsByClassName('gaz_inp');
    let checked = '';
    checkbox.onchange = function() {
        checked = checkbox.checked;

        text[0].innerHTML = (checked === true)
            ? 'Цена Пропана, <span>руб.</span>'
            : 'Цена Метана, <span>руб.</span>';

        input[0].value = (checked == true)
            ? 24
            : 17.10;
        calc();
    };

    //input Цена бензина
    let price = document.getElementById('price_benz');
    price.onchange = function() {
        calc()
    }
    
    //input Цена ГБО
    let priceGBO = document.querySelector('.price_gbo');
    priceGBO.onchange = function() {
        calc()
    }

}); 
