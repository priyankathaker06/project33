const Engine = Matter.Engine; 
const World= Matter.world; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;
var background;
function preload(){
  backgroundImage = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow = new Snow(400,200); 
}

function draw() {
  background(backgroundImage);  
  snow.display();
  drawSprites();
}