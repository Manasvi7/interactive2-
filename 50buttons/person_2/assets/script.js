$(document).ready(function(){

	// $('#button-3').click(function() {
	// 	$(this).animate({
	// 		opacity: 0.4,
	// 		marginLeft: '125px',
	// 		fontSize: '24px',
	// 		borderWidth: '10px'
	// 	}, 200 );
	// });

	$('#button-1').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-2').click(function() {
		$(this).toggleClass('background-color');
	});

    $('#button-3').hover(function() {
		$('#button-3, #button-6, #button-8, #button-9').css("background-color", "plum");
		}, function(){
        $('#button-3, #button-6, #button-8, #button-9').css("background-color", "#ed3e2d");

	});

	$('#button-4').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-5').click(function(e) {
		e.stopPropagation();
		$('#bee').show();


	});

	$('#button-6').click(function() {
		$('#bee').hide();
		$('#button-3, #button-6, #button-8, #button-9').toggleClass('transform');
	});


	$('#button-7').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-8').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-9').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-10').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-11').click(function() {
		$(this).toggleClass('leaf');
	});

	$('#button-12').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-13').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-14').click(function(){
		alert("In case you haven't noticed it yet, this is a flower");
	});

	// document.getElementById("#button-14").onclick = function() {myFunction()};

 //    function myFunction() {
 //        alert("In case you haven't noticed it yet, this is a flower");
 //    }

	// $('#button-14').click(function() {
	// 	$(this).toggleClass('background-color');
	// });

	$('#button-15').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-16').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-17').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-18').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-19').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-20').click(function() {
		$(this).toggleClass('background-color');
	});

	// $('#button-21').click(function() {
	// 	$(this).toggleClass('background-color');
	// });

	$('#button-21').click(function(e) {
		e.stopPropagation();
		$('#worm').show();
	});

	

// 	$(function() {
//     var img = $("#plane"),
//         width = img.get(0).width,
//         screenWidth = $(window).width(),
//         duration = 5000;
//
//     function animatePlane() {
//         img.css("left", -width)
//            .animate({
//                 "left": screenWidth
//             }, duration, animatePlane);
//     }
//
//     animatePlane();
// });​

	$('#button-22').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-23').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-24').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-25').click(function() {
		$(this).toggleClass('background-color');
	});

	$('#button-26').click(function() {
		$(this).toggleClass('background-color');
	});

	// $('#button-3').hover(function(){
	// 	$('button-3, button-6, button-8, button-9').css('hover');
	// });









	// $('#button-5').click(function() {
	// 	$(this).next('.item').toggleClass('circle');
	// });


	// check when the mouse moves
	// $('#button-6').mousemove(function(e){

	// 	// update mouse x and y position
	// 	var xPos = e.pageX-125;
	// 	var yPos = e.pageY-125;

	// 	$(this).css({
	// 		'position' : 'absolute',
	// 		'top' :  yPos+'px',
	// 		'left' :  xPos+'px',
	// 	});


	// });

	// $('#button-7').click(function(){
	// 	$(this).toggleClass('break');
	// });

	// $()



});
