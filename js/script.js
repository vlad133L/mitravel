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

const burger = document.querySelector('.menu');
const close = document.querySelector('.burger__close');
const menu = document.querySelector('.burger');
const overflow = document.querySelector('body');
burger.addEventListener('click',function(){
	menu.classList.toggle('active');
	overflow.classList.toggle('body--scroll');
	nav.classList.add('nav--visibility');
})
close.addEventListener('click',function(){
	menu.classList.remove('active');
	overflow.classList.remove('body--scroll');
	nav.classList.remove('nav--visibility');
})

document.querySelectorAll(".burger__link").forEach(burger__link => 
	burger__link.addEventListener("click", () => menu.classList.remove('active') )
)
document.querySelectorAll(".burger__link").forEach(burger__link => 
	burger__link.addEventListener("click", () => overflow.classList.remove('body--scroll'))
)
document.querySelectorAll(".burger__link").forEach(burger__link => 
	burger__link.addEventListener("click", () => nav.classList.remove('nav--visibility'))
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
const storyclose = document.querySelector('.stories__btn-line');
storybtn.addEventListener('click',function(){
	stories.classList.toggle('featured-stories--active');
	storyclose.classList.toggle('stories__btn-line--active');
})

