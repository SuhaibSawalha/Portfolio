const hrefs = ["#Home", "#About", "#Projects", "#Competitions", "#Contact"];
function applyHoverOnNavbar() {
  if (window.innerWidth > 991.5) {
    for (let i = 0; i < hrefs.length; ++i) {
      const a = document.querySelector(`.nav-item a[href="${hrefs[i]}"]`);
      a.addEventListener("mouseover", () => {
        if (window.scrollY <= 10) {
          const lineNav = document.getElementById("lineNav");
          lineNav.style.display = "block";
          const rect = a.getBoundingClientRect();
          lineNav.style.left = `${rect.left - 10}px`;
          lineNav.style.width = `${rect.width}px`;
          lineNav.style.height = `3px`;
          lineNav.style.top = `45px`;
          return;
        }
        const backNav = document.getElementById("backNav");
        backNav.style.display = "block";
        const rect = a.getBoundingClientRect();
        backNav.style.left = `${rect.left - 20}px`;
        backNav.style.width = `${rect.width + 20}px`;
        backNav.style.height = `${rect.height + 10}px`;
        backNav.style.top = `${rect.top - 5}px`;
      });
      a.addEventListener("mouseleave", () => {
        hoverOnNavbar();
      });
    }

    function hoverOnNavbar() {
      const backNav = document.getElementById("backNav");
      const lineNav = document.getElementById("lineNav");
      if (window.scrollY <= 10) {
        backNav.style.display = "none";
        lineNav.style.display = "block";
        const a = document.querySelector(`.nav-item a[href="#Home"]`);
        a.style.textDecoration = "none";
        a.style.opacity = "1";
        const rect = a.getBoundingClientRect();
        lineNav.style.left = `${rect.left - 10}px`;
        lineNav.style.width = `${rect.width}px`;
        lineNav.style.height = `3px`;
        lineNav.style.top = `45px`;
        return;
      }
      backNav.style.display = "block";
      lineNav.style.display = "none";
      let index = 0;
      for (let i = hrefs.length - 1; i > 0; --i) {
        if (
          window.scrollY >=
          document.querySelector(hrefs[i]).offsetTop - 300
        ) {
          index = i;
          break;
        }
      }
      const a = document.querySelector(`.nav-item a[href="${hrefs[index]}"]`);
      a.style.textDecoration = "none";
      a.style.opacity = "1";
      const rect = a.getBoundingClientRect();
      backNav.style.left = `${rect.left - 20}px`;
      backNav.style.width = `${rect.width + 20}px`;
      backNav.style.height = `${rect.height + 10}px`;
      backNav.style.top = `${rect.top - 5}px`;
    }
    hoverOnNavbar();
  } else {
    document.getElementById("backNav").style.display = "none";
    document.getElementById("lineNav").style.display = "none";
    for (let i = 0; i < hrefs.length; ++i) {
      const a = document.querySelector(`.nav-item a[href="${hrefs[i]}"]`);
      a.addEventListener("click", function () {
        for (let j = 0; j < hrefs.length; ++j) {
          const a2 = document.querySelector(`.nav-item a[href="${hrefs[j]}"]`);
          a2.classList.remove("active-link");
        }
        a.classList.add("active-link");
      });
    }
  }
}
applyHoverOnNavbar();

let index = 0;
for (let i = hrefs.length - 1; i > 0; --i) {
  if (window.scrollY >= document.querySelector(hrefs[i]).offsetTop - 300) {
    index = i;
    break;
  }
}
const a = document.querySelector(`.nav-item a[href="${hrefs[index]}"]`);
if (!a.classList.contains("active-link")) {
  for (let j = 0; j < hrefs.length; ++j) {
    const a2 = document.querySelector(`.nav-item a[href="${hrefs[j]}"]`);
    a2.classList.remove("active-link");
  }
  a.classList.add("active-link");
}
window.addEventListener("resize", applyHoverOnNavbar);
window.addEventListener("scroll", applyHoverOnNavbar);
window.addEventListener("load", applyHoverOnNavbar);

function NavbarBackground() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.style.backgroundColor = "var(--mainGray)";
    return;
  }
  nav.style.backgroundColor = "transparent";
}
window.addEventListener("scroll", NavbarBackground);
for (let i = 0; i < hrefs.length; ++i) {
  const a = document.querySelector(hrefs[i]);
}
const currentScroll = window.scrollY;
function sectionsMove() {
  for (let i = 1; i < hrefs.length; ++i) {
    const a = document.querySelector(hrefs[i]);
    if (this.window.scrollY > a.offsetTop - 500) {
      a.style.animation = "slideFromBottom 1s ease forwards";
    }
  }
}

window.addEventListener("scroll", sectionsMove);
window.addEventListener("load", sectionsMove);

function customizeHeadLines() {
  document.querySelectorAll(".headerLine").forEach((line) => {
    const span = document.createElement("span");
    span.textContent = line.previousElementSibling.textContent.trim();
    span.style.fontSize = getComputedStyle(
      line.previousElementSibling
    ).fontSize;
    span.style.visibility = "hidden";
    document.body.appendChild(span);
    line.style.width = `${span.offsetWidth + 20}px`;
    document.body.removeChild(span);
  });
}

window.addEventListener("resize", customizeHeadLines);
window.addEventListener("load", customizeHeadLines);

const mySkills = [
  { name: "C++", level: "95%", image: "./../assets/img/skills/c++.png" },
  { name: "C", level: "90%", image: "./../assets/img/skills/c.png" },
  { name: "HTML", level: "95%", image: "./../assets/img/skills/html.png" },
  { name: "CSS", level: "90%", image: "./../assets/img/skills/css.png" },
  {
    name: "JavaScript",
    level: "80%",
    image: "./../assets/img/skills/javascript.png",
  },
  {
    name: "Bootstrap",
    level: "95%",
    image: "./../assets/img/skills/bootstrap.png",
  },
  { name: "Java", level: "75%", image: "./../assets/img/skills/java.png" },
  { name: "Python", level: "65%", image: "./../assets/img/skills/python.png" },
  { name: "Dart", level: "50%", image: "./../assets/img/skills/dart.png" },
  { name: "Kotlin", level: "30%", image: "./../assets/img/skills/kotlin.png" },
  {
    name: "Flutter",
    level: "65%",
    image: "./../assets/img/skills/flutter.png",
  },
  { name: "React JS", level: "30%", image: "./../assets/img/skills/react.png" },
  {
    name: "React Native",
    level: "20%",
    image: "./../assets/img/skills/react.png",
  },
  { name: "Django", level: "20%", image: "./../assets/img/skills/django.png" },
];

for (const skill of mySkills) {
  const div = document.createElement("div");
  div.className = "skill col-12 col-md-6 col-lg-4 col-xl-3";
  div.innerHTML = `
    <div class="skill-body">
      <div class="skill-image">
      <img src="${skill.image}" alt="${skill.name}" width="60" height="60"/>
      </div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-level d-flex align-items-center">
        <div class="skill-level-bar" style="width: ${skill.level}"></div>
        <div class="skill-level-percentage">${skill.level}</div>
      </div>
    </div>
  `;
  document.querySelector("#skills").appendChild(div);
}
