function numberWithSpaces(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}$(document).ready(function(){function a(a,e){var i=1==a?e:$("#in2").val(),l=2==a?e:$("#in1").val();$("#in2").val(i),$("#in1").val(l),$("#slider a").html(i),$("#slider2 a").html(l),$("#calk_all").click()}function e(a,e){var i=1==a?e:$("#in2_m").val(),l=2==a?e:$("#in1_m").val();$("#in2_m").val(i),$("#in1_m").val(l),$("#slider_m a").html(i),$("#slider2_m a").html(l),$("#calk_all_m").click()}$(".progan_key").keyup(function(){$("#calk_all").click()}),$(".progan_key2").keyup(function(){$("#calk_all_m").click()}),$("#slider").slider({range:"min",animate:!0,value:10,min:4,max:35,step:1,slide:function(e,i){a(1,i.value)}}),$("#slider2").slider({range:"min",animate:!0,value:1e4,min:500,max:3e4,step:100,slide:function(e,i){a(2,i.value)}}),a(),$("#slider_m").slider({range:"min",animate:!0,value:10,min:4,max:35,step:1,slide:function(a,i){e(1,i.value)}}),$("#slider2_m").slider({range:"min",animate:!0,value:1e4,min:500,max:3e4,step:100,slide:function(a,i){e(2,i.value)}}),e(),$("#calk_all").on("click",function(){var a=parseInt($("#in2").val())/100*parseInt($("#in4").val())*parseInt($("#in1").val()),e=parseInt($("#in2").val())/100*1.15*parseInt($("#in5").val())*parseInt($("#in1").val()).toFixed(2);$("#res1").text(numberWithSpaces(Math.ceil(a-e))),$("#res2").text(numberWithSpaces(Math.ceil(12*(a-e)))),$("#res3").text(numberWithSpaces(Math.ceil(parseInt($("#in3").val())/Math.ceil(a-e)))),$("#changers").empty(),$("#changers").text(numberWithSpaces(Math.ceil(12*(a-e)))),$("#safe_price_text").val(numberWithSpaces(Math.ceil(12*(a-e)))),$("#probeg_text").val($("#in1").val()),$("#rashod_text").val($("#in2").val()),$("#benz_price_text").val($("#in4").val()),$("#gas_price_text").val($("#in5").val()),$("#type_gas").val("Пропан")}),$("#calk_all_m").on("click",function(){var a=parseInt($("#in2_m").val())/100*parseInt($("#in4_m").val())*parseInt($("#in1_m").val()),e=parseInt($("#in2_m").val())/100*.8*parseInt($("#in5_m").val())*parseInt($("#in1_m").val()).toFixed(2);$("#res1_m").text(numberWithSpaces(Math.ceil(a-e))),$("#res2_m").text(numberWithSpaces(Math.ceil(12*(a-e)))),$("#res3_m").text(numberWithSpaces(Math.ceil(parseInt($("#in3_m").val())/Math.ceil(a-e)))),$("#changers").empty(),$("#changers").text(numberWithSpaces(Math.ceil(12*(a-e)))),$("#safe_price_text").val(numberWithSpaces(Math.ceil(12*(a-e)))),$("#probeg_text").val($("#in1_m").val()),$("#rashod_text").val($("#in2_m").val()),$("#benz_price_text").val($("#in4_m").val()),$("#gas_price_text").val($("#in5_m").val()),$("#type_gas").val("Метан")}),$("#calk_all_m").click(),$("#calk_all").click(),$(".site__cal_form_name a").click(function(){return 1==$(this).hasClass("active")?($("#metan__form").show(),$("#propan__form").hide(),$(".site__cal_form_name a").removeClass("active")):($("#propan__form").show(),$("#metan__form").hide(),$(this).addClass("active")),!1})});