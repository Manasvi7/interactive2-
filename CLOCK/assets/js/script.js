$(document).ready(function(){

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
        $('#clock').css('transform', 'rotate('+ s * 6 +'deg');
        $('.tri').css('transform', 'rotate('+ s * 40 +'deg');
        $('.tri2').css('transform', 'rotate('+ s * 83 +'deg');
        $('.tri3').css('transform', 'rotate('+ s * 20 +'deg');
        $('.tri4').css('transform', 'rotate('+ s * 107 +'deg');
        $('.tri5').css('transform', 'rotate('+ s * 38 +'deg');
        $('.tri6').css('transform', 'rotate('+ s * 10 +'deg');
        $('.tri7').css('transform', 'rotate('+ s * 1000 +'deg');
        $('.tri8').css('transform', 'rotate('+ s * 75 +'deg');
        $('.tri9').css('transform', 'rotate('+ s * 90 +'deg');
        $('.tri10').css('transform', 'rotate('+ s * 60 +'deg');
        $('.tri11').css('transform', 'rotate('+ s * 56 +'deg');
        $('.tri12').css('transform', 'rotate('+ s * 17 +'deg');
        $('.tri13').css('transform', 'rotate('+ s * 61 +'deg');
        $('.tri14').css('transform', 'rotate('+ s * 90 +'deg');
        $('.tri15').css('transform', 'rotate('+ s * 100 +'deg');
        $('.tri16').css('transform', 'rotate('+ s * 500 +'deg');
        $('.tri17').css('transform', 'rotate('+ s * 346 +'deg');
        $('.tri18').css('transform', 'rotate('+ s * 756 +'deg');
        $('.tri19').css('transform', 'rotate('+ s * 576 +'deg');






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
    document.body.style.backgroundColor = color(); //() to execute the function!
}, 1000);


});