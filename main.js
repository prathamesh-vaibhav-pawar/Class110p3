
 Predication_1 = ""
 Predication_2 = ""

 Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:100
 })
 Webcam.attach("#Camera")

 function CaptureImg(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id ='ImageCap' src ="+data_uri+">"
    })
}
Classify = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5Mu8mWTqf/model.json",Model)
function Model(){
    console.log("Model loaded")
}
function Verify(){
    img = document.getElementById("imageCap")
    Classify.classify(img,getresult)
}
  function getresult(error,result){
      if(error){
          console.error(error)
      }
      else{
          Predication_1 = result[0].label
          Predication_2 = result[1].label
          document.getElementById("result_gesture_name").innerHTML = per1
          document.getElementById("result_gesture_name2").innerHTML = per2

        
          if(Predication_1== "Thumbs up!!!"){
            document.getElementById("result_gesture_name").innerHTML=Predication_1
            document.getElementById("Emoji").innerHTML = "&#128078;"
          }
          if(Predication_1== "Thumbs down!!!"){
            document.getElementById("result_gesture_name").innerHTML=Predication_1
            document.getElementById("Emoji").innerHTML = "&#128406;"
          }
          if(Predication_1== "Jaddu's sign!!"){
            document.getElementById("result_gesture_name").innerHTML=Predication_1
            document.getElementById("Emoji").innerHTML = "&#129304;"
          }
          if(Predication_1== "Cool dude!!"){
            document.getElementById("result_gesture_name").innerHTML=Predication_1
            document.getElementById("Emoji").innerHTML = "&#128076;"
          }
          if(Predication_1== "Jhakkas"){
            document.getElementById("result_gesture_name").innerHTML=Predication_1
            document.getElementById("Emoji").innerHTML = "&#9994;"
          }
          if(Predication_1== "Plam"){
            document.getElementById("result_gesture_name").innerHTML=Predication_1
            document.getElementById("Emoji").innerHTML = "&#9995;"
          }
          if(Predication_1== "victory"){
            document.getElementById("result_gesture_name").innerHTML=Predication_1
            document.getElementById("Emoji").innerHTML = "&#9996;"
          }

          //predication2//
          if(Predication_2== "Thumbs up!!!"){
            document.getElementById("result_gesture_name2").innerHTML=Predication_1
            document.getElementById("Emoji-2").innerHTML = "&#128078;"
          }
          if(Predication_2== "Thumbs down!!!"){
            document.getElementById("result_gesture_name2").innerHTML=Predication_1
            document.getElementById("Emoji-2").innerHTML = "&#128406;"
          }
          if(Predication_2== "Jaddu's sign!!"){
            document.getElementById("result_gesture_name2").innerHTML=Predication_1
            document.getElementById("Emoji-2").innerHTML = "&#129304;"
          }
          if(Predication_2== "Cool dude!!"){
            document.getElementById("result_gesture_name2").innerHTML=Predication_1
            document.getElementById("Emoji-2").innerHTML = "&#128076;"
          }
          if(Predication_2== "Jhakkas"){
            document.getElementById("result_gesture_name2").innerHTML=Predication_1
            document.getElementById("Emoji-2").innerHTML = "&#9994;"
          }
          if(Predication_2== "Plam"){
            document.getElementById("result_gesture_name2").innerHTML=Predication_1
            document.getElementById("Emoji-2").innerHTML = "&#9995;"
          }
          if(Predication_2== "victory"){
            document.getElementById("result_gesture_name2").innerHTML=Predication_1
            document.getElementById("Emoji-2").innerHTML = "&#9996;"
          }
      }
  }