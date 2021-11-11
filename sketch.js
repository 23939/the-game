var bird
var obstacles1,obstacles2,obstacles3,obstacles4,obstacles5,obstacles6,obstacles7,obstacles8,obstacles9,obstacles10
var bg,bgImg
var bImg

function preload(){
bgImg=loadImage("background.png")
bImg=loadImage("bird.png")
}

function setup(){
    createCanvas(885,885)
    bg=createSprite(0,0,885,885)
    bg.addImage(bgImg)
    bird=createSprite(440,440,35,35)
    bird.addImage(bImg)
    
}

function draw() {
    background("black")
    if (keyDown ("UP_ARROW")) {
        bird.y=bird.y-10
    }
    bg.velocityX=-3
    drawSprites()

}