img="";
status="";
object=[];
function preload(){
img=loadImage("b1.jpg");
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function draw() {
    image(img, 0, 0, 640, 420);
    if (status != "") {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        for (i = 0; i < object.length; i++) {
            fill = "red";
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x+15, object[i].y+15);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}
function modelLoaded() {
    console.log("Model is loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        object = results;
    }
}