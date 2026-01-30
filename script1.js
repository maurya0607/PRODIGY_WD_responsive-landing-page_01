// const navbar = document.getElementById("navbar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });


//*********************************************** */
// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  setActiveLink();
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


// ================= ACTIVE LINK ON SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function setActiveLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}


// ================= HERO BUTTON SCROLL =================
const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {
  document.getElementById("features").scrollIntoView({
    behavior: "smooth"
  });
});


// ================= CONTACT BUTTON ACTION =================
const contactBtn = document.querySelector(".contact button");

contactBtn.addEventListener("click", () => {
  alert("Thank you! We will contact you soon 🚀");
});
