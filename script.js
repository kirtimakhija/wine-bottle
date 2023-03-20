gsap.from("#bottle",{
    y: 800,
    duration: 1
})
tl = gsap.timeline()
tl.from("#world",{
    y: 30,
    opacity: 0,
    duration: 1
})
tl.from("#one-of",{
    y: 30,
    opacity: 0,
})
tl.from("#about",{
    y: 30,
    opacity: 0,
})
gsap.from("#arrow",{
    opacity: 0,
    delay: 2
})

gsap.from("#drum",{
    y: 400,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#drum",
        scroller: "body",
        markers: false,
        start: "top 90%"

    }
})
gsap.from("#some1",{
    y: 400,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#some1",
        scroller: "body",
        markers: false,
        start: "top 90%"

    }
})
gsap.from("#some2",{
    y: 400,
    duration: 2,
    opacity: 0,
    delay: 0.2,
    scrollTrigger: {
        trigger: "#some1",
        scroller: "body",
        markers: false,
        start: "top 90%"

    }
})
gsap.from("#some3",{
    y: 400,
    duration: 2,
    opacity: 0,
    delay: 0.3,
    scrollTrigger: {
        trigger: "#some1",
        scroller: "body",
        markers: false,
        start: "top 90%"

    }
})
gsap.from("#part2arrow",{
    y: 400,
    duration: 2,
    opacity: 0,
    delay: 0.2,
    scrollTrigger: {
        trigger: "#some1",
        scroller: "body",
        markers: false,
        start: "top 90%"

    }
})
gsap.from(".swiper",{
    y: 400,
    duration: 0.5,
    opacity: 0,
    delay: 0.1,
    scrollTrigger: {
        trigger: ".swiper",
        scroller: "body",
        markers: false,
        start: "top 110%"

    }
})
gsap.from("#part3-heading",{
    y: 400,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#part3-heading",
        scroller: "body",
        markers: false,
        start: "top 90%"

    }
})
gsap.from("#part3-btn",{
    y: 400,
    duration: 1,
    opacity: 0,
    delay: 0.1,
    scrollTrigger: {
        trigger: "#part3-heading",
        scroller: "body",
        markers: false,
        start: "top 90%"

    }
})

gsap.from("#part4-top",{
    y: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#part4-top",
        scroller: "body",
        markers: false,
        start: "top 10%"

    }
})
gsap.from("#part4-left",{
    y: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#part4-left",
        scroller: "body",
        markers: false,
        start: "top 40%"

    }
})
gsap.from("#part4-right",{
    y: -100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#part4-right",
        scroller: "body",
        markers: false,
        start: "top 40%"

    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
var buy = document.querySelector("#buy");
var overlaybuy = document.querySelector("#overlay-buy");
var close1 = document.querySelector("#close1");
buy.addEventListener("click",function(){
    overlaybuy.style.transform = "translateX(0)";
})
close1.addEventListener("click",function(){
    overlaybuy.style.transform = "translateX(-100%)";
})
var menu = document.querySelector("#menu");
var overlaymenu = document.querySelector("#overlay-menu");
var close2 = document.querySelector("#close2");
menu.addEventListener("click",function(){
    overlaymenu.style.transform = "translateX(0)";
})
close2.addEventListener("click",function(){
    overlaymenu.style.transform = "translateX(100%)";
})