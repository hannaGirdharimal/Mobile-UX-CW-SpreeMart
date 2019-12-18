$(document).ready(function () {

    let addtocartlist = localStorage.getItem("addtocartList");

    const AddToCartIDArray = addtocartlist.split(",");

    console.log(AddToCartIDArray[0]);
    
});