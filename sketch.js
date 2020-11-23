//variables
var dog , Bone , Lion , Gorilla ;
var Dog_running , Bone_Image , LionImg , GorillaImg ;

gameState=0;
play=1;
end=2;



function preload(){
  Dog_running =loadAnimation("Images/sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png");
  LionImg=loadImage("Images/Lion_Image.png")
  Bone_Image=loadImage("Images/Bone Image.png")
 GorillaImg=loadImage("Images/gorilla.png")
 GameOver_Image=loadImage("Image/GameOver Image.png")
}



function setup() {
  createCanvas(400,400)
  dog=createSprite(200,350,20,20)
dog.addAnimation("running",Dog_running)
gameOver=createSprite(200,200,20,20);
gameOver.addImage(GameOver_Image)

}


function draw() {
background("blue");
  drawSprites();
 if(gameState===play){
    if(keyDown("space")) {
      dog.velocityY = -8;
    }
    if(dog.isTouching(Lion)){
   ground.velocityX=0;
   Lion.velocityX=0;
   Gorilla.velocityX=0;
   Bone.velocityX=0;
   if(dog.isTouching(Gorilla)){
    ground.velocityX=0;
    Lion.velocityX=0;
    Gorilla.velocityX=0;
    Bone.velocityX=0;
    gameOver.visible=false;
    }

     dog.collide(ground)
    //add gravity
    dog.velocityY = dog.velocityY + 0.8
 }
 
  
LionG();
BoneG();
GorillaG();
LionG();
}
function BoneG(){
  if(World.frameCount%80===0){
var Bone = createSprite(400,200,20,20) 
    Bone.addImage(Bone_Image);
    Bone.y=Math.round(random(120,130));
    Bone.velocityX=-8;
    Bone.setLifetime=50;
    Bone.scale=0.1;    
    foodGroup.add(Bone);
  }
}


  function LionG(){
  if(World.frameCount%100===0){
var Lion = createSprite(400,200,20,20) 
    Lion.addImage(LionImg);
    Lion.y=Math.round(random(170,170));
    Lion.velocityX=-8;
    Lion.setLifetime=50;
    Lion.scale=0.1;    
    obstacleGroup.add(obstacle);
  }
}
function GorillaG(){
  if(World.frameCount%100===0){
var Gorilla = createSprite(400,200,20,20) 
    Gorilla.addImage(GorillaImg);
    Gorilla.y=Math.round(random(170,170));
    Gorilla.velocityX=-8;
    Gorilla.setLifetime=50;
    Gorilla.scale=0.1;    
    obstacleGroup.add(obstacle);
  }
}



}
