
// let menuVisible = false; 

// // Add event listener to the button
// // menuBtn.addEventListener('click', () => {
// //     if (menuVisible) {
// //         menu.style.right = '-60%'
// //         document.querySelector('nav i').style.transform = 'rotate(90deg)'
// //     } else {
// //         menu.style.right = '0%'; 
        
// //     }
// //     menuVisible = !menuVisible;
// //     // btn.classList.toggle('rotate');
// // });
 

var body = document.querySelector('body')
 
const cursor = document.getElementById('cursor')

let projectCards = document.querySelectorAll('#projects');


        body.addEventListener('mousemove', (e) => {
             
          cursor.style.left = e.pageX + 'px';
          cursor.style.top = e.pageY + 'px';
          
        });
    
 
        //projectCards.addEventListener('mouseenter', () => {
          // cursor.style.transform = 'scale(2)'; // Increases size by 2x 
          alert('zan he jah')
      });

      //projectCards.addEventListener('mouseleave', () => {
          cursor.style.width = '20px';
          cursor.style.height = '20px';
      });






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

gsap.from('nav',{
    y: -100,
    opacity: 0,
    duration: .5,
}) 
gsap.from('#content',{
    y: +150,
    opacity: 0,
    duration: .9,
    delay: .5,
})


gsap.from('#projects',{
    y: +110,
    opacity: 0,
    scrollTrigger: {
        trigger: "#projects",
        scroller: "body",
        start: "top 90%",
        end: "top 80%",
        scrub: 1,
    }
})



