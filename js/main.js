$( document ).ready(function() {
    calc();
    
    var proizN = $("#col-cil :selected").val();
    $(".proiz").removeClass("active_pr");
    $("#proiz"+proizN).addClass("active_pr");
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
    if(window.matchMedia('(max-width: 992px)').matches) {
        gbo = $(".price_gbo").val();
        if(gbo == null) {
            gbo = 29000;
        }
    }
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

function dannie () {
    $("#product").val($(".okup-name").text());
    $("#priceform").val($(".price").text());
    $("#probeg").val($(".probeg_inp").text());
    $("#benz").val($(".benz_inp").val());
    $("#gaz").val($(".gaz_inp").val());
};