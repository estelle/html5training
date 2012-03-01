// The provided function will execute when the document is ready
$(document).ready(function(){
  
  // If the canvas element is supported by the browser
  if (!!$('<canvas/>')[0].getContext) {
    
    // Variables defining the color, the radius and the coordinates of our circle
    var color="#F00";
    var size=5;
    var x=0;
    var y=0;
    
    // Global variable for the rest of the code
    var draw=false;
    // This gets the canvas on the page
    var $canvas = $('#drawing_area');
    
    // TODO 1: Get the 2D context of the canvas here
    // NOTE FOR JQUERY: The canvas DOM object can be accessed with: $canvas[0]
    var context = 
    
    // Called when the user selects a different color
    function changeColor(element) {
      color=element.value;
    }
    
    // Called when the user selects a different size
    function changeSize(element) {
      size=element.value;
    }
    
    // TODO 2: With these given parameters, write a function that draws a filled circle on the canvas
    // The circle should have a radius (use the size variable defined above), a color (use the color variable defined above)
    // and a center being x and y
    function drawCircle(x,y,context) {
    
    }
  
    // The following creates the tools for our drawing application (color and size selection)
    var $controls = $('<div/>',{ 'id':'tools' });
    
    $controls.html('<div id="color_div">'+
		      '<span>choose a color:</span>'+
		      '<fieldset id="color_selection">'+
			'<input type="radio" name="color" value="#F00" checked>red</input>'+
			'<input type="radio" name="color" value="#0F0">green</input>'+
			'<input type="radio" name="color" value="#00F">blue</input>'+
			'<input type="radio" name="color" value="#FFF">Eraser</input>'+
		      '</fieldset>'+
		    '</div>'+
		    '<div id="size_div">'+
		      '<span>choose a size for your pencil:</span>'+
		'<fieldset id="size_selection">'+
			'<input type="radio" name="size" value="5" checked>small</input>'+
			'<input type="radio" name="size" value="10">medium</input>'+
			'<input type="radio" name="size" value="20">large</input>'+
		      '</fieldset>'+
		    '</div>');
    
    // This adds the previously created controls below the canvas element
    $canvas.parent().append($controls);
    
    // On click event handler when the user changes the color
    $('input[name="color"]').click(function(){
      changeColor($(this)[0]);
    });
    
    // On click event handler when the user changes the size
    $('input[name="size"]').click(function(){
      changeSize($(this)[0]);
    });
    
    // We need to add mouse events on our canvas
    $canvas.bind('mousedown', function(e){
      draw = true;
      x = e.pageX - this.offsetLeft;
      y = e.pageY - this.offsetTop;
      drawCircle(x,y,context);
    });
    
    $canvas.bind('mouseup mouseout', function(){
      draw=false;
    });
    
    $canvas.bind('mousemove', function(e){
      x = e.pageX - this.offsetLeft;
      y = e.pageY - this.offsetTop;
      if(draw) {
	drawCircle(x,y,context);
      }
    });
  }
});