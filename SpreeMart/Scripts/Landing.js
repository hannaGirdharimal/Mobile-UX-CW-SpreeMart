$(document).ready(function () {

    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    
    $(".product-title").click(function () {
        const SelectedID = $(this).next(".product-id").text();
        console.log(SelectedID);
        localStorage.setItem("selectedProductID", SelectedID);
        
        console.log(page)
        if (page === "Products%20page-ipad.html") {
            
            window.location.href = 'Product details page - iPad.html';    
        }
        if (page === "Landing%20page-iPad.html") {
           
            window.location.href = 'Product details page - iPad.html';
        }

        if (page==-"product-iphone.html") {
            window.location.href = 'Product detail-iPhone.html';
        }
        
        if (page== "Landing%20page-iPhone.html") {
            window.location.href = 'Product detail-iPhone.html';
        }


    });

    $(".promotion-test").click(function () {
        const SelectedID = $(this).next(".promotion-id").text();
        console.log(SelectedID);
        localStorage.setItem("selectedPromotionID", SelectedID);
        window.location.href = 'Promotion detail page-iPad.html';
    });

    $("#special-promotion").click(function(){
        window.location.href = 'AR-iPhone.html';
        
    });
    var addButtons = document.querySelectorAll("[id='add-to-cart']");

    for (addBtn of addButtons) {
        addBtn.addEventListener("click", function () {
            const addtoCartID = $(this).prevAll(".product-id").text();
            let addtocartlist = localStorage.getItem("addtocartList");
            let newAddtocart = '';
            if (!addtocartlist) {
                newAddtocart = `${addtoCartID}`;
            } else {
                newAddtocart = `${addtocartlist},${addtoCartID}`;
            }

            localStorage.setItem("addtocartList", newAddtocart);

        });
    }
})

function addtoCart() {

}
