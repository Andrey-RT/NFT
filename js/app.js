
/*Slider-1*/ 

$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:6,
		autoplay:false,
		speed:800,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1050,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow:1
				}
			}
			
		]
	});
});
/*Slider-2*/ 

$(document).ready(function(){
	$('.slider-2').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:false,
		speed:800,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1050,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

/*Sort */


function callback(evt) {

	var list = document.getElementById('wrapper');
  
	var items = list.childNodes;
	var itemsArr = [];
	for (var i in items) {
	  if (items[i].nodeType == 1) {
		itemsArr.push(items[i]);
	  }
	}
  
	itemsArr.sort(function(a, b) {
	  return parseFloat(a.getAttribute('price')) == parseFloat(b.getAttribute('price')) ?
		0 :
		(parseFloat(a.getAttribute('price')) > parseFloat(b.getAttribute('price')) ? 1 : -1);
	});
  
	for (i = 0; i < itemsArr.length; ++i) {
	  list.appendChild(itemsArr[i]);
	}
  }
  
  document.getElementById('sort').addEventListener('click', callback);

/*Menu*/ 
const hamburger = document.querySelector('.btn-adp');
const navMenu = document.querySelector('.nav-memu-adp');

hamburger.addEventListener('click',()=>{
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})


/*AOS */




AOS.init({
	once:true
});


/*SEE ALL*/ 







const seeAll = document.querySelector('.thirth-btn');
const wrapperHiden = document.querySelector('.list');


seeAll.addEventListener("click",function(){


 if (wrapperHiden.classList.toggle('add')){
    seeAll.textContent = "See All Collection";
 } else{
    seeAll.textContent= "Close";
 }



})
