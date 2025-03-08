
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Toggle navbar and menu icon
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Close navbar on scroll
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Typed.js initialization (for text animation)
var typed = new Typed(".multiple-text", {
  strings: [
    "Consultant Engineer",
    "Software Engineer",
    "Project manager",
    "Database Administrator",
    
  ],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});


/* testimonial links */
document.getElementById('t1').addEventListener('click', function (){
  window.location = 'https://www.lieamra.com/';
  });

  document.getElementById('t2').addEventListener('click', function (){
    window.location = 'https://www.miesite.com/' ;
    });

    document.getElementById('t3').addEventListener('click', function (){
      window.location = 'https://www.modernschoolelnozha2.com/';
      });

      document.getElementById('t4').addEventListener('click', function (){
        window.location = 'https://www.elresalaschool.com/about.html';
        });

        document.getElementById('t5').addEventListener('click', function (){
          window.location = 'https://aldyaaschools.com/';
          });

          document.getElementById('t6').addEventListener('click', function (){
            window.location = 'https://www.alsharkalawsatschool.com/';
            });

            /* contact me section */
            
            document.getElementById('cb').addEventListener('click', function (){
              alert('data sent sucsessfully');
              });
                 
            
