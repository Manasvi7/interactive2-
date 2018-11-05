$(document).ready(function(){



var bgcolorlist=new Array('#ff3333', '#33cc33', '#ffd11a', '#00b8e6')

  $("#button-1").hover(function(){

    $('body').css("background-color",bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)])
  
});










});