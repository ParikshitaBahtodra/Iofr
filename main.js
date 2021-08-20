var cam=document.getElementById("cam");
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#cam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version= ",ml5.version);

var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LGfy5J97U/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
 function check(){
     img=document.getElementById("captured_image");
     classifier.classify(img,gotResult);
 }

 function gotResult(error,results){
     if(error){
        console.error(error);
     }

     else{
         console.log(results);
     }
 }