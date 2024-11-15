// cursor Animation 

var body = document.querySelector('body')
const uniCursor = document.getElementById('cursor');

body.addEventListener('mousemove', (e) => {
  uniCursor.style.left = e.pageX + 'px';
  uniCursor.style.top = e.pageY + 'px';

});

document.addEventListener('mousemove', (e) => {
  gsap.to(uniCursor, {
    left: e.x,
    right: e.y
  })
});


// click cursor animation 

const cursorAnime = document.querySelector(".cursor");
const cursors = document.querySelectorAll(".cursor");

document.addEventListener("click", (e) => {

  let x = e.clientX;
  let y = e.clientY;

  cursorAnime.style.left = x + "px";
  cursorAnime.style.top = y + "px";


  cursors.forEach((cursor) => {
    cursor.classList.add("active");
    uniCursor.classList.add("cursor_none");

    function removeCursorActive() {
      cursor.classList.remove("active");
    }
    
    setTimeout(removeCursorActive, 1000)
  });




  let cursorClone = cursorAnime.cloneNode(true);
  document.querySelector("body").appendChild(cursorClone);

  setTimeout(() => {
    cursorClone.remove();
  }, 1000);

})

// project cursor Animation 


// var card = document.querySelectorAll(".project_card")

// card.forEach(card => {
//   card.addEventListener('mouseenter',function(){
//      cursor.style.transform = 'scale(3.5)'
//   })
//   card.addEventListener('mouseleave',function(){
//      cursor.style.transform = 'scale(1)'
//   })
//  }); 


// mobile nav animation 
var btn = document.querySelector("#nav_btn");
var full_screen_nav = document.querySelector("nav .menu");
var flag = 0;

btn.addEventListener("click", function (d) {

  if (flag == 0) {
    full_screen_nav.style.right = "0%"
    document.querySelector("nav i").style.transform = 'rotate(90deg)'
    flag = 1
  } else {
    full_screen_nav.style.right = "-60%"
    document.querySelector("nav i").style.transform = 'rotate(0deg)'

    flag = 0;
  }
  btn.classList.toggle('rotate')
});
















// Animation Part 

var tl = gsap.timeline();

gsap.from('nav', {
  y: -100,
  opacity: 0,
  duration: .5,
})
gsap.from('#content', {
  y: +150,
  opacity: 0,
  duration: .9,
  delay: .5,
})


gsap.from('#projects', {
  y: +110,
  opacity: 0,
  scrollTrigger: {
    trigger: "#projects",
    scroller: "body",
    start: "top 88%",
    end: "top 75%",
    scrub: 1,
  }
})



