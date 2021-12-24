img="";
function setup() {
    canvas= createCanvas(640,420);
    canvas.center();
}
function preload() {
    img=loadImage("table.jpg");
}
function draw() {
   image(img,0,0,640,420);
   fill("#FFB600");
   text("table",100,100);
   noFill();
   textSize(25);
   stroke("#FFB600");
   rect(80,80,500,400);
}