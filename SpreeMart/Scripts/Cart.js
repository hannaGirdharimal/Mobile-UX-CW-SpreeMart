$(document).ready(function () {

    let addtocartlist = localStorage.getItem("addtocartList");

    const AddToCartIDArray = addtocartlist.split(",");
    
    const noOfItems=AddToCartIDArray.length;

    document.getElementById('delete-txt').innerHTML='('+noOfItems+')'+'Items';

    for(cartItem of AddToCartIDArray ){
        var cartProduct;
        console.log(cartItem);
         for(var i=0;i<Products.length;i++){
             if(Products[i].product_id===cartItem){              
                 const CartHTML='<div class="ui-grid-b card">'+
                 '<div class="ui-block-a left-wrapper">'+
                   '<div class=" ui-checkbox">'+
                   '<input type="checkbox"  class="product-check" name="checkbox-mini-0" id="checkbox-select-all" data-mini="true">'+
                   '</div>'+
                 '</div>'+
                 '<div class="ui-block-b middle-wrapper">'+
                   '<img id="nutella" src="'+Products[i].img_url+'">'+
                 '</div>'+
                 '<div class="ui-block-c right-wrapper">'+
                   '<span class="producttitle"> Rs. '+ Products[i].title+'</span>'+
                   '<img id="share-2" src="Icons/delete.png">'+
                    '<br>'+
                   '<span class="price">'+ Products[i].price+'</span>'+
                   '<span class="rating1">'+
                     '<img id="rating-star1" src="Icons/rating star.png">'+
                     '<img id="rating-star1" src="Icons/rating star.png">'+
                     '<img id="rating-star1" src="Icons/rating star.png">'+
                     '<img id="rating-star1" src="Icons/rating star.png">'+
                     '<img id="rating-star1" src="Icons/rating star half-filled.png">'+
                    '</span>'+
                 '</div>'+
               '</div>'
                document.getElementsByClassName('card-area')[0].innerHTML+=CartHTML;
                 break;
             } 
         }
         console.log(cartProduct);
    }

    var subtotal=0;
    var NetTotal=0;


    $('#delete-icon').click(function(){
      localStorage.clear('addtocartList');
      location.reload();
    });

    $(".product-check").change(function () {
       
        if(this.checked) {
            subtotal += parseInt($('.price').eq($('.product-check').index(this)).text());
            NetTotal=subtotal;
            document.getElementsByClassName('subprice')[0].innerText='Rs.'+subtotal;
            document.getElementsByClassName('subprice3')[0].innerHTML='Rs. '+NetTotal;

        }

        if(!this.checked) {
            subtotal -= parseInt($('.price').eq($('.product-check').index(this)).text());
            NetTotal=subtotal;
            
            document.getElementsByClassName('subprice')[0].innerHTML='Rs. '+subtotal;
            document.getElementsByClassName('subprice3')[0].innerHTML='Rs. '+NetTotal;
        }
        
    });
});