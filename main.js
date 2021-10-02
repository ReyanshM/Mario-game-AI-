world_start="";
function preload() {
	world_start=loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_kill=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('game');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(340,350);
	video.parent('console');
	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', results)
}
function modelLoaded(){
	console.log("The model is loaded");
}
function results(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}
function draw(){
	game();
}