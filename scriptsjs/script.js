document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.querySelector(".navbar-collapse").classList.remove("show");
        });
    });
});

const phrases = [
    "Garantimos sofás,",
    "colchões,",
    "tapetes,",
    "estofados automotivos",
    "impecáveis, protegidos",
    "e com impermeabilização",
    "de alta qualidade!"
  ];
  const element = document.getElementById("typewriter-text");
  let i = 0, j = 0;
  let isDeleting = false;
  let currentPhrase = [];

  function typeWriter() {
    const speed = isDeleting ? 30 : 70;
    
    if (j < phrases.length) {
      if (!isDeleting && i < phrases[j].length) {
        currentPhrase.push(phrases[j].charAt(i));
        i++;
      } else if (isDeleting && i > 0) {
        currentPhrase.pop();
        i--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) j++;
        if (j === phrases.length) j = 0;
      }
      
      element.innerHTML = currentPhrase.join('') + '<span class="blinking-cursor">|</span>';
      setTimeout(typeWriter, speed);
    }
  }

  window.onload = function() {
    const style = document.createElement('style');
    style.innerHTML = `
      .blinking-cursor {
        animation: blink 1s infinite;
        opacity: 1;
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    typeWriter();
  };
