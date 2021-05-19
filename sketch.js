var cj, cop1,cop2, bullet, cjS, cjD, CjA, CjW, copIMG, cop1Bullet, cop2Bullet, bullet1
var bulletGroup, cop1bGroup, cop2bGroup

function preLoad()
{
  cjS=loadImage("CJ.png");
  cjD=loadImage("sprites/cjright.png");
  cjA=loadImage("sprites/cjleft.png");
  cjW=loadImage("sprites/cjup.png");
  copIMG=loadImage("sprites/cop.pngS/cop down.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  cj=createSprite(50,50,20,20);
  //cj.addImage("cj",cjS)
  cop1=createSprite(windowWidth-50,windowHeight/2-200,20,20);
  cop2=createSprite(windowWidth-50,windowHeight-50,20,20);
  copMove();
 bulletGroup=createGroup()
 cop1bGroup=createGroup()
 cop2bGroup=createGroup()

  
}

function draw() {
  background("black");
  cjMove();
  shootBullet();
  copShoot();
  touching();

  
  var edges=createEdgeSprites()
  cj.bounceOff(edges)
  cop1.bounceOff(edges)
  cop2.bounceOff(edges)
  



  drawSprites();

}

function cjMove() 
{
    if (keyDown("D")) {
      cj.x=cj.x+2;
    }
    if (keyDown("A")) {
      cj.x=cj.x-2;
    }
    if (keyDown("W")) {
      cj.y=cj.y-2;
    }
    if (keyDown("S")) {
      cj.y=cj.y+2;
     
    }

 
  }
function shootBullet()
{
    if (keyWentDown("RIGHT_ARROW")){
    bullet=createSprite(cj.x,cj.y,5,5);
    bullet.velocityX=+7;
    }

    if (keyWentDown("LEFT_ARROW")){
      bullet1=createSprite(cj.x,cj.y,5,5);
      bullet1.velocityX=-7;
      }
   bulletGroup.add(bullet)
   bulletGroup.add(bullet1)
}

 
function copMove()
{
  cop1.velocityX=-2
  cop1.velocityY=2

  cop2.velocityX=-2
  cop2.velocityY=-2
  
}



function copShoot()
{
    if(frameCount%30===0)
    {
      cop1Bullet=createSprite(cop1.x,cop1.y,5,5)
      cop1Bullet.shapeColor="red"
     
      cop2Bullet=createSprite(cop2.x,cop2.y,5,5)
      cop2Bullet.shapeColor="red"

      cop1Bullet.velocityX=-2
      cop1Bullet.velocityY=2
      cop2Bullet.velocityX=-2
      cop1Bullet.velocityY=-2

      cop1bGroup.add(cop1Bullet);
      cop2bGroup.add(cop2Bullet);
    }

}

function touching()
{
  if (bulletGroup.isTouching(cop1)||bulletGroup.isTouching(cop2)) 
  {
    cop1.destroy()
    cop2.destroy()
  }

  if (cop1bGroup.isTouching(cj)||cop2bGroup.isTouching(cj))
  {
    cj.destroy()
  }
}