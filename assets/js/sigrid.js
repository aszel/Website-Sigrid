
var amountheadslide = 0;
var curhead = 1;
var slideinterval = "";
//var target = depth + 'ajax.php';

var relpos;

$(document).ready( function () {
	
	//restore_orgnavhigh();

	//$("#innernav a").mouseenter(function () {
	//	$("#innernav a").removeClass("highlight");
	//	$(this).addClass("highlight");
	//});

	//$("#innernav").mouseleave(function () {
	//	restore_orgnavhigh();
	//});
	//
	//

	// slide more/less text	init close
	$(".moreless_container").slideToggle("slow");

	// slide more/less text
	$("[id^=moreless_]").click(function () {
		// Container aufklappen
		$("#" + $(this).attr('id') + "_container").slideToggle("slow");
    });

	$(".firsthidden").hide();
	
	$(".mehrtext").click(function () {
		$(this).parent().children(".firsthidden").fadeIn(500);
		$(this).remove();
		return false;
	});
	
	if ($("#praxis_slideshow_wrapper img").length > 0) {
		
		$("#praxis_slideshow_wrapper").each(function () {
		
			if ($(this).children("img").length > 1) {
				var bilder = $(this).children("img");
				bilder.hide();
				bilder.parent().css({ position:'relative' });
				bilder.css({ position:'absolute', top:'0px' });
				bilder.eq(0).show();
			}
		
		});
		
		slideinterval = window.setInterval("slideme()",3500);
	}
});

function slideme() {
	
	$("#praxis_slideshow_wrapper").each(function () {
		
		if ($(this).children("img").length > 1) {
			var curimage = $(this).children("img:visible").first();
			var lookin = $("#praxis_slideshow_wrapper").children();
			var curindex = curimage.index();
			curindex++;
			if (curindex == $(this).children("img").length) {
				curindex = 0;
			}
			var nextimage = $(this).children("img").eq(curindex);
			
			curimage.fadeOut(2000);
			nextimage.delay(100).fadeIn(1900);
		}
		
	});
	
}


function restore_orgnavhigh() {
	$("#innernav a").removeClass("highlight");
	$(".orgnavhigh").addClass("highlight");
}