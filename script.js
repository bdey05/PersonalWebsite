
//Typewriter
var index = 0;
var text = 'Welcome To My Site!';

function getText() {
  if (index < text.length) {
    document.getElementById("updateText").innerHTML += text.charAt(index);
    index++;
    setTimeout(getText, 80);
  }

}


//Word rotation
var words = document.getElementById('text').getElementsByTagName('span');

var i = 0;

function rotator(){
  words[i].style.display = 'none';
  i = (i+1) % words.length;
  words[i].style.display = 'inline';
}

setInterval(rotator, 1400);



//grayscale color effect
function getColor1(){
  document.getElementById("vinceS").style.filter = "grayscale(0%)";
}

function getColor2(){
  document.getElementById("conway").style.filter = "grayscale(0%)";
}

function getColor3(){
  document.getElementById("benny").style.filter = "grayscale(0%)";
}

