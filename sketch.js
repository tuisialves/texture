 var colorList = ['#283A85','#AF4EC6','#38C17F','#F2E714'];
function setup() {
 createCanvas(800,600);
 background(256)
  frameRate(3)
  
}

function draw() {
 
 for(var x=10 ; x < width ; x+=10){
 for(var y=20 ; y < height ; y+=10){
 noStroke()
 var index = floor(random() * colorList.length);
 var colorHex = colorList[index];
 fill(color(colorHex));
  if (x==10) {
        fill(color('#F2E714'));
      } 

  rect(x,y,x+10,y+50);
   noStroke();
   var index = floor(random() * colorList.length);
   var colorHex = colorList[index];
   fill(color(colorHex));
   
   rect (x,y,x+10,y+50)
   noStroke();
   fill(color(colorHex));
    
   
 }
 }
   
}