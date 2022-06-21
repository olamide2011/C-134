
img= "";
object= [];
status= "";


function preload() {
    img=loadImage("dog_cat.jpg")
}



function setup() {
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,400);
    video.hide();
    obejectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : detecting objects";
}

function modelLoaded() {
    console.log("modelIsLoaded");
    status="true";
}


    


function gotResult (error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object=results;
}



function draw() {
    image(video ,0,0,640,440);
    if(status !="")
   {
    objectDetector.detect(video,gotResult);
       for(i=0; i<object.length; i++){
           document.getElementById("status").innerHTML="status : objectDetected";
           fill("red");
           text(object[i].label,object[i].x +15,object[i].y +15);
           noFill();
           stroke("red");
           rect(object[i].x,object[i].y,object[i].width,object[i].height)
          
       }
   }
}
