function preload(){
}
function setup(){
canvas=createCanvas(640,480);
canvas.position(710,250);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video,0,0,640,480);
    fill("red");
    stroke("pink");
    circle(50, 50, 80);
circle(50, 430, 80);
circle(590, 50, 80);
circle(590, 430, 80);
fill("brown")
stroke("aqua");
rect(90, 40, 460, 20);
rect(90, 420, 460, 20);
rect(40, 90, 20, 300);
rect(580, 90, 20, 300);
}
function takeSnapshot(){
    save("YourImage.png");
}