console.log("Hello world");
var escapedText1 = 'He said: "Yes!", that\'s for sure';
function menuToggle() {
  var x = document.getElementById("myNavtoggle");
  if (x.className === "navtoggle") {
    x.className += " responsive";
  } else {
    x.className = "navtoggle ";
  }
}
