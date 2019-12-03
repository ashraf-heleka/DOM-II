
// Nest two similar events somewhere in the site and prevent the event propagation properly


// Logo-heading animation
document.querySelector('.logo-heading').addEventListener("click", () => {
    gsap.to('.logo-heading', {
         duration: 1,
         rotateY: 180,
         ease: "elastic(1, 0.75)"
        })
    })

// Navigation links (stop default + mouseover)
// FIGURE OUT HOW TO MAKE THIS WORK FOR ALL NAV - maybe using foreach
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("stopped the link");
  });

// document.querySelectorAll(".nav-link").forEach(el => {
//     el.addEventListener(e) => {
//         e.preventDefault();
//         console.log("stopped the link");    
//     }
//   })

// stopLink.addEventListener("click", () => {
//     stopLink.style.color = "red";
// } )


document.querySelectorAll(".nav-link").forEach(el => {
    el.addEventListener("mouseover", () => {
        stopLink.style.color = "red";
    })
  })

// Intro section
//Bus img 

const busImg = document.querySelector(".intro img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.2)";
})
busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1.0)";
    busImg.style.transition = "transform 1s"
})

// Intro section content
const introSec = document.querySelector(".intro p");

introSec.addEventListener("wheel", () => {
  introSec.style.transform = "scale(1.2)";
  introSec.style.color = "hotpink";
})


document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

// Content section

function logSelection(event) {
  const logTwo = document.getElementById('logTwo');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('.inputTwo');
input.addEventListener('select', logSelection);

  const busSwitch = document.querySelector(".busSwitch");

  window.addEventListener('resize', () => {
    busSwitch.src = "img/fun-bus.jpg";
    console.log("resizing");
  })

  const bottomS = document.querySelector('.destination h4');
  bottomS.addEventListener("dblclick", () => {
    bottomS.style.backgroundColor="red";
    console.log("double clikc");
  })
  

// Button animation
document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
    duration: 2.5, 
    ease: "slow(0.7, 0.7, false)", 
    y: -500,
    x: 50
      })
    })
  })

// stop propagation

const body = document.querySelector('body');

body.addEventListener("click", () => {
  body.style.backgroundColor="papayawhip";
  console.log("me last!");
})

const destination = document.querySelector(".destination");
destination.addEventListener('click', () => {
  destination.style.backgroundColor = "rebeccapurple";
  console.log("me second!");
})
const button = document.querySelector(".btn");

button.addEventListener('click', (e) => {
  button.style.backgroundColor = "pink";
  console.log("me first!");
  console.log(e);
  e.stopPropagation();
})
