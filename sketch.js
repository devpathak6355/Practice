var topic;
var underline;

function preload(){

}

function setup(){
    createCanvas(windowWidth,1000);

    topic=createSprite(windowWidth/2,50,windowWidth,100);
    topic.shapeColor="lime";

    underline=createSprite(windowWidth/2+15,80,600,5);
    underline.shapeColor="black";   


}

function draw(){
    background(World.mouseX,World.mouseX,World.mouseY);

    drawSprites();

    fill(0,0,225);
    stroke(10);
    strokeWeight(1);
    textSize(50);
    text("Science Integrated Project",400,60);

}
