function setup() {
    canvas = createCanvas(280,280);
canvas.center();
video=createCapture(VIDEO);
video.size(380, 380);
video.hide();
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded() {
    document.getElementById
}