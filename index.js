
//Detecting word 

for(var i=0;i<(document.querySelectorAll(".drum").length) ;i++)
{document.querySelectorAll("button")[i].addEventListener("click",handleclick);

function handleclick(){
    var buttonInnerHTML = this.innerHTML ;
    makesound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);
}
}

//Detecting KeyboardPress
document.addEventListener("keydown",function(event)
{ 
    makesound(event.key);
    addAnimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2= new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3= new Audio('tom-3.mp3');
            tom3.play();
            break;  
        case "d":
            var tom4= new Audio('tom-4.mp3');
            tom4.play();
            break; 
        case "j":
            var crash= new Audio('crash.mp3');
            crash.play();
            break;             
        case "k":
            var kickbass= new Audio('kick-bass.mp3');
            kickbass.play();
            break;   
        case "l":
            var snare= new Audio('snare.mp3');
            snare.play();
            break;           
        default:
            console.log(buttonInnerHTML);
     }

}

function addAnimation(word)
{
    var pres= document.querySelector("."+word);
    pres.classList.add("pressed");
    setTimeout(function(){
      pres.classList.remove("pressed");
    },100);
}   
