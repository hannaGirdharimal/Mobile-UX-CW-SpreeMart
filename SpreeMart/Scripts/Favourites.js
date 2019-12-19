$(document).ready(function () {

  let FavouriteIDList = localStorage.getItem("FavouritesList");

  for (favouriteID of FavouriteIDList) {
    for (var i = 0; i < Products.length; i++) {
      if (Products[i].product_id === favouriteID) {

        console.log(Products[i]);

        const CartHTML = '<div class="ui-grid-b card">'+
        '<div class="ui-block-a left-wrapper">'+
          '<div class="heart-wrapper">'+
            '<img id="heart" src="Icons/heart.png">'+
          '</div>'+
          '<div class=" ui-checkbox"><input type="checkbox" name="checkbox-mini-0" id="checkbox-select-all" data-mini="true">'+
          '</div>'+
        '</div>'+
        '<div class="ui-block-b middle-wrapper">'+
          '<img id="nutella" src="'+Products[i].img_url+'">'+
        '</div>'+
        '<div class="ui-block-c right-wrapper">'+
          '<span class="producttitle">'+Products[i].title+'</span>'+
          '<img id="share-2" src="Icons/share.png">'+
          '<br>' +
          '<span class="price">'+Products[i].price+'</span>'+
          '<span class="rating1">'+
            '<img id="rating-star1" src="Icons/rating star.png">'+
            '<img id="rating-star1" src="Icons/rating star.png">'+
            '<img id="rating-star1" src="Icons/rating star.png">'+
            '<img id="rating-star1" src="Icons/rating star.png">'+
            '<img id="rating-star1" src="Icons/rating star half-filled.png">'+
          '</span>'+
          '<div class="quantity1">'+
            '<fieldset class="ui-grid-b">'+
              '<div class="ui-block-a">'+
                '<a href="#temporary" data-role="button" id="minus1" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">-'+'</a>'+
              '</div>'+
              '<div class="ui-block-b">'+
                '<div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">'+'<input type="number" name="quantity" id="quantity1" value="1">'+'</div>'+
              '</div>'+
              '<div class="ui-block-c">'+
                '<a href="temporary.html" data-role="button" id="plus1" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">+'+'</a>'+
              '</div>'+
            '</fieldset>'+
          '</div>'+
          '<a href="#temporary" data-role="button" id="add-to-cart1" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">ADD TO CART'+'</a>'+
          '<a href="#temp" data-role="button" id="BuyNow1" class="ui-link ui-btn ui-shadow ui-corner-all" role="button">BUY NOW'+'</a>'+
        '</div>'+
     '</div>'

        document.getElementsByClassName('card-area')[0].innerHTML += CartHTML;
        break;
      }

    }

  }

});
