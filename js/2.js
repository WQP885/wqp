// JavaScript Document

window.onload = chooseImg;

	var adImage = new Array("img/1.jpg","img/2.jpg","img/3.jpg");
	var thisAd = 0;
	function chooseImg(){
	thisAd = Math.floor((Math.random() * adImage.length));
	document.getElementById("adBanner1").src = adImage[thisAd];
	rotate()}

	function rotate(){	
	thisAd++;
	if (thisAd === adImage.length){thisAd = 0;}
	document.getElementById("adBanner1").src= adImage[thisAd];
	setTimeout(rotate, 3000);
	}
