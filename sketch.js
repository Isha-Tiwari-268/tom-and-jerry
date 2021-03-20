var cat , mouse;
var catImg1 ,catImg2 ,catImg3 ,catImg4 , mouseImg1, mouseImg2 ,mouseImg3, mouseImg4; 
 
var garden , gardenImg

function preload() {
   catImg1 = loadAnimation("cat1.png");
   catImg2 = loadAnimation("cat2.png");
   catImg3 = loadAnimation("cat3.png");
   catImg4 = loadAnimation("cat4.png");
   mouseImg1 = loadAnimation("mouse1.png");
   mouseImg2 = loadAnimation("mouse2.png");
   mouseImg3 = loadAnimation("mouse3.png");
   mouseImg4 = loadAnimation("mouse4.png");
   gardenImg = loadAnimation("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     cat = createSprite(200,200);
     sacle = 1;
     cat.addAnimation("restCat",catImg1);

     mouse = createSprite(800,200);
     sacle = 1;
     mouse.addAnimation("restMouse",mouseImg1);

     garden = createSprite(500,400);
     sacle = 1;
     garden.addAnimation("garden",gardenImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.colloid(cat)){
    cat.addAnimation("catsitting",catImg4);
    cat.changeAnimation("catsitting"); 

    mouse.addAnimation("mouse",mouseImg4);
    mouse.changeAnimation("mouse");
    }
    keyPressed();
    drawSprites();

    
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
   cat.velocityX= -5;
   cat.addAnimation("catrunning",catImg2);
   cat.changeAnimation("catrunning");

   
   }

   if(cat.x - mouse.x <(cat.width - mouse.width)/2){
      cat.addAnimation("catLastImage", catImg3);
      cat.changeAnimation("catLastImage");

   }


}
