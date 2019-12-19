$(document).ready(function () {
    let eventData;
    populatePromotion()
});

 function populatePromotion(){
  var cardNum= document.getElementsByClassName("promos");
  var images = document.querySelectorAll("[id='poster']");
    for(var i=0;i<cardNum.length;i++){
      document.getElementsByClassName("promotion-id")[i].innerHTML=Promotions[i].promotion_id;
    }
}

// function createProductCard(data) {
//     var card = [
//         '<img id="product-image" src="', data.img_url, '">',
//         '<div class="product-title">', data.title, '</div>',
//         '<div class="price">Rs.', data.price, '</div>'    
//     ];

//     return card.join

// }