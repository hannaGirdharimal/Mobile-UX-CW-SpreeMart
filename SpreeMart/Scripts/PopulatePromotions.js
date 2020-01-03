$(document).ready(function () {
  
  let eventData;

  var path = window.location.pathname;
  var page = path.split("/").pop();
  
  if (page ==="Promotions%20page-%20iPhone%20Portrait.html") {
    populatePromotioniPhone();
  }else 
  populatePromotioniPad();

  $("#scrollToBest").click(function () {
    var elmnt = document.getElementById("bestSellers");
    elmnt.scrollIntoView();
  });
  $("#scrollToPersonalized").click(function () {
    var elmnt = document.getElementById("personalized");
    elmnt.scrollIntoView();
  });
  $("#scrollToEnding").click(function () {
    var elmnt = document.getElementById("ending");
    elmnt.scrollIntoView();
  });
  $("#scrollToDiscount").click(function () {
    var elmnt = document.getElementById("discounted");
    elmnt.scrollIntoView();
  });
  $("#scrollToSpecial").click(function () {
    var elmnt = document.getElementById("special");
    elmnt.scrollIntoView();
  });
  $("#scrollToUpcoming").click(function () {
    var elmnt = document.getElementById("upcoming");
    elmnt.scrollIntoView();
  });

});

function populatePromotioniPhone() {
  var cardNum = document.getElementsByClassName("promos");
  var images = document.querySelectorAll("[id='poster']");
  for (var i = 0; i < cardNum.length; i++) {
    document.getElementsByClassName("promotion-id").innerHTML = Promotions.promotion_id;
  }
}

function populatePromotioniPad() {
  var cardNum = document.getElementsByClassName("promos");
  var images = document.querySelectorAll("[id='poster']");
  for (var i = 0; i < cardNum.length; i++) {
    document.getElementsByClassName("promotion-id")[i].innerHTML = Promotions[i].promotion_id;
  }
}
