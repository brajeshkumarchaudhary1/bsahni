// Fuction for menu button;

let mContainer = document.querySelector("#mContainer");
let menubtn = document.querySelector(".menu-btn");
let main = document.querySelector("#main");
let navBar = document.querySelector(".nav")
let isClick = false;
let clickCount = 0;

console.log(clickCount);
mContainer.addEventListener('click', function() {
        clickCount =clickCount+1;
        isClick = true;
        if (clickCount === 1) {
                console.log(clickCount)
                menubtn.classList.add('menu-open');
                navBar.classList.add('nav-open');
//    restart menu on main click;  
                  main.addEventListener('click', function() {   
                  menubtn.classList.remove('menu-open');
                  navBar.classList.remove('nav-open')
                  
                            clickCount =0; 
                            })
        } 
        if (clickCount === 2) {
                console.log(clickCount)
                menubtn.classList.remove('menu-open');
                navBar.classList.remove('nav-open');
                
                clickCount = 0;
          }
})


// Fuction for Scroll bar
let header = document.querySelector('.header');
let nav = document.querySelector(".nav")
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;

        // Log scroll direction and position
        const scrollDirection = currentScrollPos > prevScrollPos ? 'down' : 'up';
        console.log(`Scroll Direction: ${scrollDirection}`);
        console.log(`Scroll Position: ${currentScrollPos}`);

        // Hide/show navbar based on scroll direction
        
        if (scrollDirection === 'down') {
         nav.classList.add("nav-scroll") 

                if (currentScrollPos > 250) {
                        header.classList.add('header-scroll');
               
               
                }       
        } 
        if(scrollDirection==="up"){
         nav.classList.remove("nav-scroll") 
          header.classList.remove('header-scroll');
        }

        prevScrollPos = currentScrollPos;
});


//
