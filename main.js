object_status="";
objects=[];
function setup(){
    canvas=createCanvas(360,360);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,360,360);
    if(object_status !=""){
        objectDectector.detect(video,gotResult);
        r=random(255);
        g=random(255);
        b=random(255);
        for(var i=0; i<objects.length; i++){
            document.getElementById("object_status").innerHTML="Status: Objects Detected";
            document.getElementById("name_objects").innerHTML="Number of Objects:"+objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
            }
}
function start(){
    objectDectector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("object_status").innerHTML="Status: Detecting objects";
    if(object[i].label==object_name){
    document.getElementById(object_status).innerHTML=name_object+"Found";
    object_name_holds_webcamLiveView.stop();
    objectDectector.detect(gotResult);
    }
}
function modelLoaded(){
    console.log("Model is Loaded!!!");
    object_status=true;
    
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
