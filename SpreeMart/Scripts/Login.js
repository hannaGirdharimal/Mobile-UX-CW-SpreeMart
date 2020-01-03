$(document).ready(function () {

    $("#login-btn").click(function () {
        var email = document.getElementsByName('text-line-email')[0].value

        var password = document.getElementsByName('text-line-pass')[0].value

        if(email="JaneDoe@gmail.com" && password=="janedoe12"){
            window.location.href = 'Landing page-iPhone.html';
        } else{
            alert("Incorrect Details")
        }

    });

});