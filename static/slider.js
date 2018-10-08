let numOfPic = 0;
let slides = document.getElementById("slider-pic").getElementsByTagName("img");
let dots = document.getElementsByClassName("dot");

const plusSlides = () => {
	for (const value of dots) {
		value.classList.remove("active");
	}
	switch (numOfPic) {
		case 0:
			slides[0].style.transform = "perspective(100px) translate3d(5%,0,-15px)";
			slides[0].style.zIndex = "0";
			slides[1].style.transform = "perspective(100px) translate3d(0,0,0)";
			slides[1].style.zIndex = "1";
			slides[2].style.transform = "perspective(100px) translate3d(-5%,0,-15px)";
			slides[2].style.zIndex = "-1";
			dots[numOfPic].classList.add("active");
			break;
		case 1:
			slides[0].style.transform = "perspective(100px) translate3d(228%,0,-15px)";
			slides[0].style.zIndex = "-1";
			slides[1].style.transform = "perspective(100px) translate3d(-113%,0,-15px)";
			slides[1].style.zIndex = "0";
			slides[2].style.transform = "perspective(100px) translate3d(-103%,0,0)";
			slides[2].style.zIndex = "1";
			dots[numOfPic].classList.add("active");
			break;
		case 2:
			slides[0].style.transform = "perspective(100px) translate3d(102%,0,0)";
			slides[0].style.zIndex = "1";
			slides[1].style.transform = "perspective(100px) translate3d(113%,0,-15px)";
			slides[1].style.zIndex = "-1";
			slides[2].style.transform = "perspective(100px) translate3d(-230%,0,-15px)";
			slides[2].style.zIndex = "0";
			dots[numOfPic].classList.add("active");
			break;
	}
	numOfPic = (numOfPic + 1) % 3;
}
plusSlides();
setInterval(plusSlides, 4000);