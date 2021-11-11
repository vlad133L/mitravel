const nav = document.querySelector('.nav');
window.addEventListener("scroll",function(){
	let scrollFix=window.scrollY;
	if(scrollFix > 0){
		nav.classList.add('fix');
	}else{
		nav.classList.remove('fix');
	}
});

let swiper = new Swiper('.slider-container',
{
	centeredSlides: true,
	slidesPerView:'auto',
	loop: true,
	spaceBetween:105,
	
});

// const burger = document.querySelector('.header__menu');
// const close = document.querySelector('.burger__close');
// const menu = document.querySelector('.burger');
// burger.addEventListener('click',() => {
// 	menu.classList.add('burger--visible');
// });
// close.addEventListener('click',() => {
// 	menu.classList.remove('burger--visible');
// });


const burger = document.querySelector('.menu');
const close = document.querySelector('.burger__close');
const menu = document.querySelector('.burger');
burger.addEventListener('click',function(){
	menu.classList.toggle('active');
})
close.addEventListener('click',function(){
	menu.classList.remove('active');
})

document.querySelectorAll(".burger__link").forEach(burger__link => 
	burger__link.addEventListener("click", () => menu.classList.remove('active'))
)

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
  		e.preventDefault()
    
   	const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
   })
})
}

const storybtn = document.querySelector('.stories__btn');
const stories = document.querySelector('.featured-stories');
storybtn.addEventListener('click',function(){
	stories.classList.toggle('featured-stories--active');
})

