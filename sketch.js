const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var rand;
var maxDrops = 100;
var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;   

    if (frameCount%150 === 0) {
        for(var i = 0; i<maxDrops; i++) {
            drops.push(new createDrop(random(0,400),random(0,400)))
        }
    }
 
}

function draw(){
    background(rgb(33, 47, 60));
    Engine.update(engine);

    for(var i = 0; i<maxDrops; i++) {
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}   