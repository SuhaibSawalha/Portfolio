document.querySelector(".navbar-toggler").addEventListener("click", () => {
  const resume = document.getElementById("resume");
  resume.style.display = "none";
  setTimeout(() => {
    resume.style.display = "inline-block";
  }, 350);
});

const hrefs = ["#Home", "#About", "#Projects", "#competitions", "#Contact"];
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
  { name: "C++", level: "95%", image: "./assets/img/skills/c++.png" },
  { name: "C", level: "90%", image: "./assets/img/skills/c.png" },
  { name: "HTML", level: "95%", image: "./assets/img/skills/html.png" },
  { name: "CSS", level: "90%", image: "./assets/img/skills/css.png" },
  {
    name: "JavaScript",
    level: "80%",
    image: "./assets/img/skills/javascript.png",
  },
  {
    name: "Bootstrap",
    level: "95%",
    image: "./assets/img/skills/bootstrap.png",
  },
  { name: "Git", level: "75%", image: "./assets/img/skills/git.png" },
  {
    name: "Postman",
    level: "65%",
    image: "./assets/img/skills/postman.png",
  },
  { name: "Java", level: "75%", image: "./assets/img/skills/java.png" },
  { name: "Python", level: "65%", image: "./assets/img/skills/python.png" },
  { name: "Dart", level: "50%", image: "./assets/img/skills/dart.png" },
  { name: "Kotlin", level: "30%", image: "./assets/img/skills/kotlin.png" },
  {
    name: "Flutter",
    level: "65%",
    image: "./assets/img/skills/flutter.png",
  },
  { name: "React JS", level: "30%", image: "./assets/img/skills/react.png" },
  {
    name: "React Native",
    level: "20%",
    image: "./assets/img/skills/react.png",
  },
  { name: "Django", level: "20%", image: "./assets/img/skills/django.png" },
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

const projects = [
  {
    name: "Birzeit Sport",
    description:
      "Birzeit Sport is a website made for a competition, it's mainly about healthy lifestyle, healthy food and various trainings.",
    image: "./assets/img/projects/birzeit-sport.png",
    link: "https://suhaibsawalha.github.io/Sport/",
  },
  {
    name: "Tourism in Palestine",
    description:
      "Tourism in Palestine is a website that gives information about Palestine and the most important places to visit.",
    image: "./assets/img/projects/tourism.png",
    link: "https://suhaibsawalha.github.io/Tourism/",
  },
  {
    name: "Blog",
    description:
      "Blog is webiste that lets the users to create accounts and post their blogs, and also like and comment on other blogs.",
    image: "./assets/img/projects/blog.png",
    link: "https://suhaibsawalha.github.io/Blog/",
  },
  {
    name: "Quiz",
    description:
      "Quiz is website that lets the users to take a quiz and get their results, and also make their own quizzes.",
    image: "./assets/img/projects/quiz.png",
    link: "https://suhaibsawalha.github.io/Quiz/",
  },
  {
    name: "News Website",
    description:
      "News Website is a website made for a competition, it's mainly about the latest news and articles about various topics.",
    image: "./assets/img/projects/news-website.png",
    link: "https://suhaibsawalha.github.io/News__WebSite/",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Tic-Tac-Toe is a game made using HTML, CSS and JavaScript, you can play agaist other people or against the smart computer.",
    image: "./assets/img/projects/tic-tac-toe.png",
    link: "https://suhaibsawalha.github.io/Tic-Tac-Toe/",
  },
];

for (const project of projects) {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.name}" />
    </div>
    <div class="project-body">
      <div class="project-name"><h3>${project.name}</h3></div>
      <div class="project-description"><p>${project.description}<p></div>
      <a href="${project.link}" class="project-link btn btn-green" target="_blank">Visit Website <i class="bi bi-box-arrow-up-right"></i></a>
    </div>
  `;
  document.querySelector("#Projects").appendChild(div);
}

const competitions = [
  {
    name: "Games Of The Future 2024",
    description:
      "Games Of The Future is an international Competition held in Russia every year, I've participated in the first version of the competition at 2024, I've participated in the competitve programming section and got the 31st place among participants around the world.",
    images: [
      "./assets/img/competitions/gamesOfTheFuture2024/gamesOfTheFuture-suhaib.jpg",
      "./assets/img/competitions/gamesOfTheFuture2024/gamesOfTheFuture-palestine.jpg",
      "./assets/img/competitions/gamesOfTheFuture2024/gamesOfTheFuture-arab.jpg",
    ],
  },
  {
    name: "ICPC",
    description:
      "ICPC is the International Colligate Programming Contest, it's the most prestigest programming contest around the world, me and my team were the first palestinain team ever qualifing to the ICPC, it would be held in 14/4/2024.",
    images: ["./assets/img/competitions/icpc.png"],
  },
  {
    name: "ACPC 2022",
    description:
      "ACPC is the Arab and North Africa Colligate Programming Contest, it's the most prestigest programming contest in the Arab world, me and my team got the 11th place and bronze medal in 2022 and were the first palestinain team ever got a medal in the ACPC.",
    images: [
      "./assets/img/competitions/acpc2022/acpc2022-team.jpg",
      "./assets/img/competitions/acpc2022/acpc2022-all.jpg",
    ],
  },
  {
    name: "ACPC-teens 2021",
    description:
      "ACPC-teens is the ACPC but for the school students, me and my team mate paricipated in 2021 and got the 3rd place and a silver medal, it was the first and the final time a palestinian team gets a medal.",
    images: ["./assets/img/competitions/acpc2021.jpg"],
  },
  {
    name: "PCPC 2023",
    description:
      "PCPC is the Palestinain Colligate Programming Contest, it's the most prestigest programming contest in Palestine, me and my team got the first place for the 3rd time in a row.",
    images: [
      "./assets/img/competitions/pcpc2023/pcpc2023-team.jpg",
      "./assets/img/competitions/pcpc2023/pcpc2023-all.jpg",
    ],
  },
  {
    name: "PCPC 2022",
    description:
      "PCPC 2022 was held in Rawabi, me and my team got the first place for the second time in a row.",
    images: [
      "./assets/img/competitions/pcpc2022/pcpc2022-team.jpg",
      "./assets/img/competitions/pcpc2022/pcpc2022-all.jpg",
    ],
  },
  {
    name: "PCPC 2021",
    description:
      "Me and my team participated in the PCPC 2021 unofficaliy because we were at school. although, we got the first place among offical and unoffical participants.",
    images: ["./assets/img/competitions/pcpc2021.jpg"],
  },
  {
    name: "PCPC 2020",
    description:
      "PCPC 2020 was my first local contest in my competitve programming journy, me and my team participated unofficialiy and got the 6th place among all participants.",
    images: ["./assets/img/competitions/pcpc2020.jpg"],
  },
  {
    name: "IEEEXtreme 16.0 & 17.0",
    description:
      "IEEEXtreme is an international 24-hours contest. IEEEXtreme 16.0 was held in the university and we got the 35th place among all participants in the world, IEEEXtreme 17.0 was held online and we got the 31th place.",
    images: ["./assets/img/competitions/ieeextreme16.jpg"],
  },
  {
    name: "IOI 2021",
    description:
      "IOI is the International Olympiad In Informatics, it's the most prestigest programming contest around the world for school students, I've participated in IOI 2021 and got a honorable mention.",
    images: [
      "./assets/img/competitions/ioi2021/ioi2021-team.jpg",
      "./assets/img/competitions/ioi2021/ioi2021-all.jpg",
    ],
  },
  {
    name: "APIO 2021",
    description:
      "APIO 2021 is a competition that was held in Birzeit University, it was about solving problems using C++.",
    images: ["./assets/img/competitions/apio2021.png"],
  },
  {
    name: "Google Code Jam 2021",
    description:
      "I've participated in Google Code Jam 2021 and got the 3031st place.",
    images: ["./assets/img/competitions/googleCodeJam.png"],
  },
  {
    name: "Facebook Hacker Cup 2021",
    description:
      "I've participated in Facebook Hacker Cup 2021 and got 675th place in the qualification round, then the 4362nd place in round 1, then the 1467th place in round 2.",
    images: ["./assets/img/competitions/facebookHackerCup.png"],
  },
  {
    name: "Hebron Code Jam 2023",
    description:
      "Hebron Code Jam is a local competition held at hebron university every year, me and my team got the first place in 2023 among all participants from all universities.",
    images: ["./assets/img/competitions/hebronCodeJam2023.jpg"],
  },
  {
    name: "Logic Battle",
    description:
      "Logic Battle is a competition that was held online among universities, and I got the first place.",
    images: ["./assets/img/competitions/logicBattle.jpg"],
  },
  {
    name: "AFPC 2022",
    description:
      "AFPC 2022 is the Arabic Future Programmers Contest, it's a competition held in Jordan every year for school students among the Arab wolrd, me and my team got the first place.",
    images: [
      "./assets/img/competitions/afpc2022/afpc-team-cup.jpg",
      "./assets/img/competitions/afpc2022/afpc-team-cup-up.jpg",
      "./assets/img/competitions/afpc2022/afpc-all-cup.jpg",
      "./assets/img/competitions/afpc2022/afpc-all-stage.jpg",
      "./assets/img/competitions/afpc2022/afpc-all.jpg",
    ],
  },
  {
    name: "IC 2022",
    description:
      "IC 2022 is the Programming Student Contest, it's a competition held every year in Kadoorie University every year for school students among Palestine, I've got the second place.",
    images: ["./assets/img/competitions/ic2022.jpg"],
  },
  {
    name: "IC 2023",
    description: "In 2023 I was the problem setter for the IC 2023.",
    images: ["./assets/img/competitions/ic2023.jpg"],
  },
  {
    name: "Noon Competition",
    description:
      "Noon company hold a competition at Birzeit University, me and my team got the first place.",
    images: ["./assets/img/competitions/noonCompetition.jpg"],
  },
  {
    name: "Code A Thon",
    description:
      "Code A Thon is a competition that was held in Birzeit University from the computer engineering club and the computer science club, me and my team mate got the first place.",
    images: ["./assets/img/competitions/codeAThon.jpg"],
  },
  {
    name: "One To Zero",
    description:
      "One To Zero is a competition that was held in Birzeit University from the computer engineering club, me and my team mate got the first place.",
    images: ["./assets/img/competitions/oneToZero.jpg"],
  },
  {
    name: "Qatayef Code",
    description:
      "Qatayef Code is a competition that was held in Birzeit University from the IEEE club, and I've got the second place.",
    images: ["./assets/img/competitions/qatayefCode.jpg"],
  },
  {
    name: "Recruitment Day",
    description:
      "There was a competition at the Recruitment Day in Birzeit University, me and my team mate got the second place.",
    images: ["./assets/img/competitions/recruitmentDay.jpg"],
  },
  {
    name: "Frontend Bootcamp",
    description:
      "I've participated in a competition from a Frontend Bootcamp held by knowledge academy and got the second place.",
    images: ["./assets/img/competitions/frontendBootcamp.jpg"],
  },
];

for (let i = 0; i < competitions.length; ++i) {
  const competitionContainer = document.createElement("div");
  competitionContainer.className = "competition-container";

  const competition = document.createElement("div");
  competition.className = "competition";
  competition.innerHTML = `
    <div class="competition-body">
      <div class="competition-name"><h3>${competitions[i].name}</h3></div>
      <div class="competition-description"><p>${competitions[i].description}<p></div>
    </div>
  `;
  competitionContainer.appendChild(competition);
  document.getElementById("competitions").appendChild(competitionContainer);

  const div = document.createElement("div");
  div.className = "competition-img";

  const img = document.createElement("img");
  img.src = competitions[i].images[0];
  img.style.width = "100%";
  img.style.height = "100%";
  img.alt = competitions[i].name;

  img.id = `competition-${i}-0`;
  div.appendChild(img);
  competition.appendChild(div);

  if (competitions[i].images.length > 1) {
    const img2 = document.createElement("img");
    img2.src = competitions[i].images[1];
    img2.alt = competitions[i].name;
    img2.style.width = "100%";
    img2.style.height = "100%";
    img2.style.position = "absolute";
    img2.style.top = "0";
    img2.style.left = "100%";

    img2.id = `competition-${i}-1`;

    div.appendChild(img2);

    function changeImage(compIndex, imgIndex) {
      const img = document.getElementById(`competition-${compIndex}-0`);
      const img2 = document.getElementById(`competition-${compIndex}-1`);
      const newIndex = (imgIndex + 1) % competitions[compIndex].images.length;
      setTimeout(() => {
        img.classList.add("goLeft");
        img2.classList.add("goLeft");
        setTimeout(() => {
          img.src = competitions[compIndex].images[newIndex];
          img.classList.remove("goLeft");
          img2.src =
            competitions[compIndex].images[
              (newIndex + 1) % competitions[compIndex].images.length
            ];
          img2.classList.remove("goLeft");
          changeImage(compIndex, newIndex);
        }, 1000);
      }, 3000);
    }
    changeImage(i, 0);
  }
}

const accounts = [
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/Satoru",
    image: "./assets/img/accounts/codeforces.png",
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/SuhaibSawalha1/",
    image: "./assets/img/accounts/leetcode.png",
  },
  {
    name: "Github",
    link: "https://github.com/SuhaibSawalha/",
    image: "./assets/img/accounts/github.png",
  },
];

const row = document.createElement("div");
row.className = "row";
for (const account of accounts) {
  const accountContainer = document.createElement("div");
  accountContainer.className = "account-container col-12 col-sm-4";
  const a = document.createElement("a");
  a.href = account.link;
  a.target = "_blank";
  a.className = "account d-flex justify-content-center align-items-center";
  a.innerHTML = `
    <div class="d-flex justify-content-center align-items-center flex-column">
      <img src="${account.image}" alt="${account.name}" />
      <div class="account-name mt-1"><p>${account.name}</p></div>
    </div>
  `;
  accountContainer.appendChild(a);
  row.appendChild(accountContainer);
}
document.querySelector("#competitions").appendChild(row);
