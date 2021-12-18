img="";
function setup() {
    canvas= createCanvas(640,420);
    canvas.center();
}
function preload() {
    img=loadImage("dog_cat.jpg");
}
function draw() {
   image(img,0,0,640,420);
   fill("#FFB600");
   text("dog",50,90);
   noFill();
   textSize(25);
   stroke("#FFB600");
   rect(30,60,400,350);
}