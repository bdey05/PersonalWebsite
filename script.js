

var index = 0;
var text = 'Welcome To My Site!';

function getText() {
  if (index < text.length) {
    document.getElementById("updateText").innerHTML += text.charAt(index);
    index++;
    setTimeout(getText, 80);
  }

}


function getColor(){
  document.getElementById('pic').style.filter = "grayscale(0%)";
}


function getTextColor(){
  document.getElementById('logo').style.color = "#66FCF1";
}