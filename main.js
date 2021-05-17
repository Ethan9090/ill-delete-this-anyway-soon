img = "";
noseX = 0;
noseY = 0;
marioX = 25;
marioY = 200;

function preload()
{
  img = loadImage("mario.png");
}

function setup() {
  createCanvas(300,300);

    camera = createCapture(VIDEO);
    camera.size(250,100);

    modEl = ml5.poseNet(camera,modelLoaded);

    modEl.on("pose",gotposes);
}

function modelLoaded(){
    console.log("yay my modal works now");
}

function gotposes(results,error){

if(results.length > 0){
  
  noseX = results[0].pose.nose.x;
    
  noseY = results[0].pose.nose.y;

  console.log(noseX);
  console.log(noseY);

  console.log(results);

}
else{
  console.error();
}

}

function draw() {
  background("#D3D3D3");
  image(img,marioX, marioY, 25,25);

  if(noseX < 125){
    marioX = marioX + 0.5;
  }

  if(noseX > 125){
    marioX = marioX - 0.5;
  }
  
  if(noseY < 25){
    marioY = marioY - 0.5;
  }

  image(camera,marioX, 1001, 40,70);
}