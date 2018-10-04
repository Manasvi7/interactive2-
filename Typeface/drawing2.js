$(document).ready(function(){

	// $('body').css('background');
	// $('.l, .l2, .i, .n1, .n2, .n4, .E. E1, .E2').css('border-color', '#ffde00', '#ff0000', '#0000ff', '#00ff00');
     

    var bgcolorlist=new Array('#ff3333', '#33cc33', '#ffd11a', '#00b8e6')

    $("body").css("background-color",bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)])
    // $(".l2").css("body");

    var bgColor = bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)];

    $("body").css("background-color", bgColor);
    $(".l").css("border-color", bgColor);
    $(".l2").css("border-color", bgColor);
    $(".i").css("border-color", bgColor);
    $(".n1").css("border-color", bgColor);
    $(".n2").css("border-color", bgColor);
    $(".n3").css("border-color", bgColor);
    $(".E").css("border-color", bgColor);
    $(".E1").css("border-color", bgColor);
    $(".E2").css("border-color", bgColor);

    // var child = $('.l');

    //  child.css({
    //  'border-color': child.body().css('background-color')
    //  });

	context = document.getElementById("canvas").getContext('2d');

	context.canvas.width  = $(document).width();
	context.canvas.height = $(document).height();

	$('#canvas').mousedown(function(e){
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
			
		paint = true;
		
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);

		redraw()
	});


	$('#canvas').mousemove(function(e){
	  if(paint){
	    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
	    redraw();
	  }
	});

	$('#canvas').mouseup(function(e){
	  paint = false;
	});


	$('#canvas').mouseleave(function(e){
	  paint = false;
	});

	var clickX = new Array();
	var clickY = new Array();
	var clickDrag = new Array();
	var paint;

	// var color = ['#ffde00', '#ff0000', '#0000ff', '#00ff00'];

	function addClick(x, y, dragging)
	{
	  // color = '#ffde00';
	  // color = color [Math.floor(Math.random()*color.length)];
	  clickX.push(x);
	  clickY.push(y);
	  clickDrag.push(dragging);
	}

	function redraw(){
		context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

		context.strokeStyle = '#ffffff';
		context.lineJoin = "round";
		context.lineWidth = 80;
				
		for(var i=0; i < clickX.length; i++) {		
		context.beginPath();
		if(clickDrag[i] && i){
		  context.moveTo(clickX[i-1], clickY[i-1]);
		 }else{
		   context.moveTo(clickX[i]-1, clickY[i]);
		 }
		 context.lineTo(clickX[i], clickY[i]);
		 context.closePath();
		 context.stroke();
		}
	}


});