$(document).ready(function(){



var bgcolorlist=new Array('#ff3333', '#33cc33', '#ffd11a', '#00b8e6')

  $("#button-1").click(function(){

	$('body').css({'background-color' : ''});

    $('body').css("background-color",bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)])
  
});


// function generate() {

//   var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
//   function populate(a) {
//     for ( var i = 0; i < 6; i++ ) {
//       var x = Math.round( Math.random() * 14 );
//       var y = hexValues[x];
//       a += y;
//     }
//     return a;
//   }
  
//   var newColor1 = populate('#');
//   var newColor2 = populate('#');
//   // var angle = Math.round( Math.random() * 360 );
  
//   var gradient = "linear-gradient(" + newColor1 + ", " + newColor2 + ")";


    

//   // document.getElementById("container").style.background = gradient;
//   // document.getElementById("output").innerHTML = gradient;
  
// }

// $("#button-2").hover(function(){
// 	generate();
//       $('body').css("background-color",gradient);
  
//  });

function generate() {

  var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  
  function populate(a) {
    for ( var i = 0; i < 6; i++ ) {
      var x = Math.round( Math.random() * 14 );
      var y = hexValues[x];
      a += y;
    }
    return a;
  }
  
  var newColor1 = populate('#');
  var newColor2 = populate('#');
  var angle = Math.round( Math.random() * 360 );

  var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
  

	$('body').css({'background-color' : ''});

  $('body').css("background", gradient);

  
}

$("#button-2").click(function(){
	generate();

});


// document.onload = generate();


// // $("button-2").hover(function(){

// // 	$('body').css("background-color", "orange")
// // });





});