//variables
var objectDetector= "";
var dine = "";
var objects = [];
var status = "";
//preloading the images on canvas
function preload() {
    dine = loadImage("dining.webp");
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
    objectDetector.detect(dine, gotResult);
}
//function to print the result
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
    objects = results;
    console.log(objects);
}
//drawing components on canvas
function draw() {
    image(dine, 0, 0, 400, 300);
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            fill('#00FF00');
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke('#00FF00');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}