// $('document').ready(function(){
//   new CircleType(document.getElementById('circle1'));
//   new CircleType(document.getElementById('circle2'));
//   new CircleType(document.getElementById('circle3'));
//   new CircleType(document.getElementById('circle4'));
//   new CircleType(document.getElementById('circle5'));
//   new CircleType(document.getElementById('circle6'));
// });


$(document).ready(function(){


$(".circle").click(function(){
    $('body').addClass('activate');

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
        var d = new Date();
        
        // get hours, minutes, and seconds
        var h = (d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());
        
        // update the clock's text
        // $('.tri8').html(h + ":" + m + ":" + s);

        // rotate clock based on the minute
        





        // detect a specific time
        // if(m == 00){
        //  $('body').addClass('noon');
        // } else {
        //  $('body').removeClass('noon');
        // }
    }

    // call getTime every 1 second
    setInterval(function() {



      getTime();
    }, 1000);


    var color = function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(function() { 
    document.body.style.backgroundColor = color();
    // document.".c1, .c2, .c3, .c4, .c5, .c6".style.Color = color(); //() to execute the function!
}, 3000);



});


});