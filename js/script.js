//Slider
var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $(".slider").append( "<img class='slides' src='"+ folder + val +"'>" );
            } 
        });
        showSlide(slideIndex);
    }
});

var slideIndex = 1;

function showSlide(x) {
	var slides = document.getElementsByClassName('slides');
	for (var i = 0; i < slides.length; i ++) {
		slides[i].style.opacity = "0";
		slides[i].style.visibility = "hidden";
	}
	if (x < 1) {
		slideIndex = slides.length;
	}
	if (x > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex-1].style.opacity = "1";
	slides[slideIndex-1].style.visibility = "visible";
}

function slide(n) {
	showSlide(slideIndex += n);
	
}



