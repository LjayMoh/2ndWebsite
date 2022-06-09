document.ready(function() {
    $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow:$('.next'),
      prevArrow:$('.prev'),  
    });
    
});

document.addEventListener("keypress", getKey);

function getKey(press)
{
    var keycode = press.which;
    character = String.fromCharCode(keycode);
    var key_out = document.getElementById("keys");
    key_out.innerHTML += character;
}

function mousealert() {
    alert("Checkbox menu");
}

document.getElementsByClassName("check").addEventListener("click", mousealert);

function addComment() {
    //the element
    let comment = document.getElementsByClassName("info");

    //array
    let info = [];

    //setting the info
    info[0] = "";
    info[1] = "";
    info[2] = "";

    let i = Math.floor(Math.random() * info.length);

    //Set the info
    comment.innerHTML = info[i];
}