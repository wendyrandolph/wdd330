
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(0, 0, 300, 300);   
context.strokeRect(0, 0, 300, 300);




function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d"); 
    var img = new Image(); 
    img.src = "images/Gdb_icon.png";
    img.onload = function() { 
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 450, 450);                  
        //context.strokeRect(10, 10, 100, 100);             
    }; 
}
drawPattern(); 

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "black";
    var gradient = context.createLinearGradient(0, 0, 100, 200); 
    gradient.addColorStop(0, "purple"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(50, 20, 200, 200); 
    context.strokeRect(50, 20, 200, 200); 
}
drawGradient(); 

function drawCircle(canvas) {
    var canvas = document.getElementById("demo4");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(155, 130, 70, 0, Math.PI*2, true);
    context.closePath(); 
    context.strokeStyle = "puple";
    context.fillStyle = "magenta";
    context.lineWidth = 3; 
    context.fill(); 
    context.stroke(); 
}
drawCircle(); 
function newCircle(canvas) {
    var canvas = document.getElementById("demo5");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(155, 130, 70, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "puple";
    context.fillStyle = "magenta";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}
newCircle(); 



