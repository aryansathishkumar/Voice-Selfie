var WebAPI = window.webkitSpeechRecognition;
var Speech = new WebAPI();

function Photo()
{
    document.getElementById("voice-display").innerHTML = "";
    Speech.start();
}
Speech.onresult=function run(events)
{
    console.log(events);
    var spoke = events.results[0][0].transcript;
    document.getElementById("voice-display").innerHTML = spoke;
    console.log(spoke);
    if(spoke == "take my selfie")
    {
        console.log("taking selfie in a moment");
        repeat();
    }
    else
    {
        console.log("repeat function will not be called");
    }
}

function repeat()
{
    synthesis = window.speechSynthesis;
    spoken_data = "Taking your selfie in 5 seconds";
    utter = new SpeechSynthesisUtterance(spoken_data);
    synthesis.speak(utter);
    Webcam.attach(camera);

    setTimeout(function()
    {
        snap_shot();
        save_snap();
    },5000);
}


Webcam.set({
    width:275,
    height:370,
    image_format:"png",
    png_quality:95
});
camera=document.getElementById("webcam-display");

function snap_shot()
{
    Webcam.snap(function(data_photo){
    document.getElementById("show-photo").innerHTML='<img id="snap_img" src="'+data_photo+'"/>';
    });
}

function save_snap()
{
    link=document.getElementById("download-my-pic");
    img=document.getElementById("snap_img").src;
    link.href=img;
    link.click()
}



