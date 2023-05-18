//variable to hold the status of detector
var status = "";
//preloading the images on canvas
function preload() {
    living = loadImage("living2.jpg");
}
//setting up the canvas and initializing cocossd model
function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(445, 230);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
//function to check if the model is loaded
function modelLoaded() {
    console.log("Model Loaded Successfully!");
    status = true;
    objectDetector.detect(living, gotResult);
}
//drawing components on canvas
function draw() {
    image(living, 0, 0, 400, 300);
    text("Couch", 70, 180);
    noFill();
    stroke('#0000ff');
    rect(60, 170, 130, 90);
    noFill();
    stroke('#E75480 ');
    rect(60, 80, 110, 85);
    noFill();
    stroke('#FFFF00');
    rect(215, 150, 100, 70);
}
//function to print the result
function gotResult(results, error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}