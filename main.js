lip_x=0;
lip_y=0;
function preload() {
    lip=loadImage("lip.png");
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(lip, lip_x-20, lip_y+15, 40, 40)
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(440, 150);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet = ml5.poseNet(video, model_ready);
    posenet.on("pose", gotResults)
}

function Snapshot() {
    save("filter.jpg");
}

function model_ready() {
    console.log("success");

}

function gotResults(result){
    if(result.length>0){
        console.log(result);
        lip_x=result[0].pose.nose.x;
lip_y=result[0].pose.nose.y;
    }


}