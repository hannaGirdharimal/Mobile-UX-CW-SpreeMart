$(document).ready(function () {

    $("#login-btn").click(function () {
        var email = document.getElementsByName('text-line-email')[0].value

        var password = document.getElementsByName('text-line-pass')[0].value

        var path = window.location.pathname;
        var page = path.split("/").pop();

        if (email = "JaneDoe@gmail.com" && password == "janedoe12") {
           
            if (page === "Login-ipad.html" ||page === "Login-iPad.html") {
            
                window.location.href ='Landing page-iPad.html';
            }
            if (page === "Login-iPhone.html" || page === "Login-iphone.html") {
               
                window.location.href = 'Landing page-iPhone.html';
            }
        } else {
            document.getElementsByClassName('alert-box')[0].style.display = 'block';
        }

    });

});