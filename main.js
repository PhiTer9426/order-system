var numOfPic = 0;
var slides=document.getElementById("slider-pic").getElementsByTagName("img");
var dots = document.getElementsByClassName("dot");

function plusSlides() {
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    switch(numOfPic)
    {
        case 0:
            slides[0].style.transform="perspective(100px) translate3d(5%,0,-15px)";
            slides[0].style.zIndex="0";
            slides[1].style.transform="perspective(100px) translate3d(0,0,0)";
            slides[1].style.zIndex="1";
            slides[2].style.transform="perspective(100px) translate3d(-5%,0,-15px)";
            slides[2].style.zIndex="-1";
            dots[numOfPic].classList.add("active");
            break;
        case 1:
            slides[0].style.transform="perspective(100px) translate3d(228%,0,-15px)";
            slides[0].style.zIndex="-1";
            slides[1].style.transform="perspective(100px) translate3d(-113%,0,-15px)";
            slides[1].style.zIndex="0";
            slides[2].style.transform="perspective(100px) translate3d(-103%,0,0)";
            slides[2].style.zIndex="1";
            dots[numOfPic].classList.add("active");
            break;
        case 2:
            slides[0].style.transform="perspective(100px) translate3d(102%,0,0)";
            slides[0].style.zIndex="1";
            slides[1].style.transform="perspective(100px) translate3d(113%,0,-15px)";
            slides[1].style.zIndex="-1";
            slides[2].style.transform="perspective(100px) translate3d(-230%,0,-15px)";
            slides[2].style.zIndex="0";
            dots[numOfPic].classList.add("active");
            break;
    }
    numOfPic=(numOfPic+1)%3;
}
plusSlides();
setInterval(plusSlides, 4000);

// var list=document.getElementById("slider-pic");
// var pics=document.getElementById("slider-pic").getElementsByTagName("img");
// function plusSlides() {
//     // body...
//     console.log("plus")
//     // list.style.left= parseInt(list.style.left,10)-20+"px";
//     console.log(list.style)
// }
// setInterval(plusSlides, 2000);

