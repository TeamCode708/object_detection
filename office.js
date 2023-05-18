//variable to hold the status of detector
var status = "";
//preloading the images on canvas
function preload() {
    office = loadImage("office1.jpg");
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
    objectDetector.detect(office, gotResult);
}
//drawing components on canvas
function draw() {
    image(office, 0, 0, 400, 300);
    
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