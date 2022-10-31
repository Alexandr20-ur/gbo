$( document ).ready(function() {
    calc();
    
    var proizN = $("#col-cil :selected").val();
    $(".proiz").removeClass("active_pr");
    $("#proiz"+proizN).addClass("active_pr");
    
    jQuery('.parallax-layer').parallax({
        mouseport: jQuery("#head"),
        xparallax: '26px',    
        yparallax: '26px',
        yorigin: '0%'
    });
});

//jQuery(document).ready(function() {
//jQuery('.progruz').addClass("hid_a").viewportChecker({
//classToAdd: 'vis_a animated fadeIn',
//offset: 100
//});
//});

$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});



$(".pop-open").click(function(){
    var pop = $(this).data("pop");
    $( pop ).fadeToggle();
});

$(".b2-txt").click(function(){
    var current = $(this).data("white"),
        proiz = $(this).data("proiz"),
        price = $(this).data("price");
    $(".price").text(price + "₽");
    $(".okup-name").text(proiz);
    $(".b2-txt").removeClass("active");
    $(this).addClass("active");
    $(".no-w").removeClass("wite");
    $(".no-w[data-white='" + current + "']").attr('data-white', current).addClass("wite");
    $(".calc-row").removeClass("pos-1");
    $(".calc-row").removeClass("pos-2");
    $(".calc-row").removeClass("pos-3");
    $(".calc-row").addClass("pos-" + current);
    calc();
});

$(".vopr-b").click(function(){
    $(this).toggleClass('active');
    $(this).children(".otvet").slideToggle();
});

$(".tog-btn-vopr").click(function(){
    $(".togl-vopr").slideToggle();
});

$(".my-inp").change(function(){
    calc();
});

//Тут ведется подсчет
function calc() {
    var gbo = $(".b2-txt.active").data("price"),
    //тут передаются данные
        cb = $(".benz_inp").val(),
        ras = $(".rashod_inp").html(),
        cg = $(".gaz_inp").val(),
        prob = $(".probeg_inp").html(),
        calc1 = 0,
        calc2 = 0,
        calc3 = 0,
        calc4 = 0;
        var target = document.querySelector('#custom-rashod');
        let data = '';
        var observer = new MutationObserver((mutation) => {
            data = mutation[1].addedNodes[0].data
            console.log(data)
        });
        observer.observe(target,{
            childList: true,    
        })
        console.log(data)

    if(window.matchMedia('(max-width: 992px)').matches) {
        gbo = $(".active_pr :selected").val();
        if(gbo == null) {
            gbo = 29000;
        }
    }
    calc1 = gbo / (ras/100 * prob * (cb - cg));
    calc2 = ras * (cb - cg);
    calc3 = gbo / (ras/100 * (cb - cg));
    calc4 = ras/100 * prob * (cb - cg)
    $("#calc1").text(Math.floor(calc1));
    $("#calc2").text(Math.ceil(calc2));
    $("#calc3").text(Math.floor(calc3));
    $("#calc4").text(Math.ceil(calc4));
    
    dannie();
};


$("#col-cil").change(function(){
    var proizN = $("#col-cil :selected").val();
    $(".proiz").removeClass("active_pr");
    $("#proiz"+proizN).addClass("active_pr");
    calc();
    nameProiz();
});

$(".proiz").change(function(){
    calc();
    nameProiz();
});

function nameProiz () {
    var nameP = $(".active_pr :selected").data("proiz"),
        price = $(".active_pr :selected").val();
    $(".price").text(price + "₽");
    $(".okup-name").text(nameP);
};

$(function(){
  $(".tel").mask("+7(999) 999-9999");
});


function dannie () {
    $("#product").val($(".okup-name").text());
    $("#priceform").val($(".price").text());
    $("#rashod").val($(".rashod_inp").text());
    $("#probeg").val($(".probeg_inp").text());
    $("#benz").val($(".benz_inp").val());
    $("#gaz").val($(".gaz_inp").val());
};