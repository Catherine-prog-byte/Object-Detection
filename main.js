img="";
status_obj="";
function setup() {
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
}
function preload() {
    img=loadImage("dog_cat.jpg");
}
function draw() {
   image(img,0,0,640,420);
   fill("#FFB600");
   text("dog", 50 , 90);
   noFill();
   textSize(25);
   stroke("#FFB600");
   rect(30,60,400,350);

   fill("#FFB600");
   text("cat", 320 , 120);
   noFill();
   textSize(25);
   stroke("#FFB600");
   rect(300,90,270,320);
}
function modelLoaded() {
    console.log("Model Loaded");
    status_obj=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}