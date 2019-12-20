// document.addEventListener("DOMContentLoaded", function() {
console.log("running");
//   var elem = document.querySelector(".main-carousel");
// var flkty = new Flickity(elem, {
//   // options
//   cellAlign: "left",
//   contain: true
// });

// element argument can be a selector string
//   for an individual element
// var flkty = new Flickity(".main-carousel", {});

function verifyEmail() {
  if (!document.getElementById("subscribe-email").checkValidity()) {
    //do your stuff here
    alert("Please Enter a Valid Email");
  } else {
    callMeIfValid();
  }
}

function printNumber(value) {
  return value;
}

console.log(printNumber(1));

function callMeIfValid() {
  //submit form or whatever
  alert("Thank you for Subscribing");
}

var clicks = 0;
function onClick() {
  clicks += 1;
  console.log(clicks);
  document.getElementById("clicks").innerHTML = clicks;
}
// });
