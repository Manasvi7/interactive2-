// when you click on the page 'body' apply .gradient to it from the CSS

var n = 1;
var left;
var top;


if (window.location.href.indexOf("instagram") > -1) {

	setInterval(function(){

		var left = Math.floor(Math.random()*$(window).width());
		var top = Math.floor(Math.random()*$(window).height());


		//$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> this is my '+n+' message</div>');

		if (n == 1) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> What are you lurking on?  </div>');

		}

		if (n == 2) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> I know you are creeping my profile. </div>');

		}

		if (n == 3) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Careful not to like anything!! </div>');

		}

		if (n == 4) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Do you ever lurk so hard and get pissed over a hoe from 3 years ago? </div>');

		}

		if (n == 5) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> If lurking was a job, Instagram would be printing your ass a W-2. </div>');

		}

		if (n == 6) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Dont foret to check out the comments!! </div>');

		}

		if (n == 7) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> My profile is public. How u doing?! </div>');

		}


		if (n == 8) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Is your phone only used for lurking and music? </div>');

		}


		if (n == 9) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Where did your social life disappear? </div>');

		}


		if (n == 11) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> On a scale of 0 to 10,  how good are your lurking skills? </div>');

		}


		if (n == 12) {
			$('body').append('<div class="message" style="left: '+left+'px; top: '+top+'px;"> Congratulations on becoming the person who does not follow but lurks on hourly basis!  </div>');

		}

		// if (n%10 == 13) {
		// 	$('body').append('<div class="special-message"> Keep lurking, I am doing good. </div>');			
		// }
		
		if (n == 13) {
			n = 1;
		}

		n++;

	},15000);
    
}

// $('div').click(function() {
// 	$(this).addClass('gradient');
// });

$('.coreSpriteDesktopNavLogoAndWordmark, .coreSpriteDesktopNavProfile, .coreSpriteDirectHeart, .coreSpriteDismissLarge, .coreSpriteDismissSmall').css('background-image', 'url("https://manasvi7.github.io/interactive1/p3/Asset1.png")');

//.src = "p3/asset 1.png";



$('body').prepend('<div id="time"></div>');

var x = 1;

setInterval(function(){
	x++;

	$('#time').html(x + ' minutes have passed');

},60000);



// var startTime = new Date().getTime();

// setTimeout(myCallback, 200);

// function myCallback(event) {

//   var endTime = new Date().getTime();
//   var timeSpent = endTime - startTime;

//   console.log(timeSpent + ' time has elapsed');

//   //_gaq.push(['_trackTiming', 'Test', 'callback_timeout', timeSpent, 'animation']);
// }


// $('img').load(function(){
// 	$(this).addClass('Print')
// }








