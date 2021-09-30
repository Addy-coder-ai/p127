song1 = "";
song2 = "";

function preload()
{
	song1 = loadSound("music.mp3");
	song2 = loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(600,400);
	canvas.center();
    canvas.position(470, 270);
	video = createCapture(VIDEO);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('PoseNet Is Initialized');
  }

 



  function draw(){
	image(video, 0, 0, 600, 400);
  }
  
 