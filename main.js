
//Display
// function display(){
// 	var text = document.getElementsByClassName('h2__ação')
// 	console.log('test',text)

	// if ( value === ) {}
	// $('.block__ação').removeClass("active");
	// $(value).addClass("active");
	// $('#'+value).addClass("active").animate({
	// 	top: '0'
	// });
// }

//Close
// $('.close').click(function(){
// 	$('.display__container').removeClass("active");
// });;

var slideIndex = 1;
showAction(slideIndex);

function nextAction(n) {
  showAction(slideIndex += n);
}

function showAction(n) {
  var i;
  var x = document.getElementsByClassName("block__ação");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}
