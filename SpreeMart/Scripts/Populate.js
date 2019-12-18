$(document).ready(function () {
    let eventData;
    populateProductCard()
});

 function populateProductCard(){
  var cardNum= document.getElementsByClassName("card");
  var images = document.querySelectorAll("[id='product-image']");
    for(var i=0;i<cardNum.length;i++){
      images[i].src=Products[i].img_url;
      document.getElementsByClassName("product-title")[i].innerHTML=Products[i].title;
      document.getElementsByClassName("product-id")[i].innerHTML=Products[i].product_id;
      document.getElementsByClassName("price")[i].innerHTML=Products[i].price;
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