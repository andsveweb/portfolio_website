

var mixer = mixitup('.portfolio-gallery');

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50)
});

let menuIcon = document.querySelector('#menu-icon');
let navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navList.classList.toggle("open");
}

window.onscroll = () => {
    menuIcon.classList.remove("bx-x")
    navList.classList.remove("open");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) =>observer.observe(el));


document.addEventListener('DOMContentLoaded', function() {
    const cursorLight = document.getElementById('cursorLight');
  
    document.addEventListener('mousemove', (e) => {
      // Show the light effect when the mouse moves
      cursorLight.style.display = 'block';
      // Update the position of the light effect based on the mouse coordinates
      cursorLight.style.left = `${e.clientX}px`;
        cursorLight.style.top = `${e.clientY}px`;
    });
  
    document.addEventListener('mouseout', () => {
      // Hide the light effect when the mouse leaves the window
      cursorLight.style.display = 'none';
    });
  });

  let mysBtn = document 
  .getElementById('scrollbuttonid'); 

window.addEventListener('scroll', function () { 
  if (document.body.scrollTop > 20 
      || document.documentElement.scrollTop > 20) { 
      mysBtn.style.display = 'block'; 
  } else { 
      mysBtn.style.display = 'none'; 
  } 
});
  


  








