img="";
status="";
function preload(){
img=loadImage("b1.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
    }
    function draw(){
    image(img,0,0,640,420);
    }
    function modelLoaded(){
        console.log("Model is loaded");
        status=true;
        objectDetector.detect(img,gotResults);
    }
    function gotResults(results,error){
        if(error){
            console.log(error);
        }
        else{
            console.log(results);
        }
    }