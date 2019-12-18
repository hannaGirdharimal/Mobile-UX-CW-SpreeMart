$(document).ready(function () {

    $(".product-title").click(function () {
        const SelectedID = $(this).next(".product-id").text();
        console.log(SelectedID);
        localStorage.setItem("selectedProductID", SelectedID);
        window.location.href = 'Product detail-iPhone.html';
    });

    var addButtons = document.querySelectorAll("[id='add-to-cart']");

    for (addBtn of addButtons) {
        addBtn.addEventListener("click", function () {
            const addtoCartID = $(this).prevAll(".product-id").text();
            let addtocartlist = localStorage.getItem("addtocartList");
            let newAddtocart= '';
            if (!addtocartlist) {
                newAddtocart = `${addtoCartID}`;
            } else {
                newAddtocart= `${addtocartlist},${addtoCartID}`;
            }
        
           localStorage.setItem("addtocartList", newAddtocart);   

        });
    }
})

function addtoCart() {

}
