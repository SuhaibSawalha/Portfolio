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
          lineNav.style.left = `${rect.left - 20}px`;
          lineNav.style.width = `${rect.width}px`;
          lineNav.style.height = `3px`;
          lineNav.style.top = `45px`;
          return;
        }
        const backNav = document.getElementById("backNav");
        backNav.style.display = "block";
        const rect = a.getBoundingClientRect();
        backNav.style.left = `${rect.left - 30}px`;
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
        lineNav.style.left = `${rect.left - 20}px`;
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
      backNav.style.left = `${rect.left - 30}px`;
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
    if (this.window.scrollY > a.offsetTop - 350) {
      a.style.animation = "slideFromBottom 1s ease forwards";
    }
  }
}

window.addEventListener("scroll", sectionsMove);
window.addEventListener("load", sectionsMove);
