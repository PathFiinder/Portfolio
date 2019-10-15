window.addEventListener("DOMContentLoaded", event => {
  //Handle navigation bars
  const navBars = document.querySelector(".header__buttonIcon--bars");
  const nav = document.querySelector(".header__nav");
  const header = document.querySelector(".header");

  navBars.addEventListener("click", () => {
    header.classList.toggle("header--active");
    if (header.classList.contains("header--active") == true) {
      nav.classList.add("nav--active");
    } else if (header.classList.contains("header--active") == false) {
      nav.classList.remove("nav--active");
    }
  });

  //Technologies

  const technologiesName = [
    { name: "HTML5", level: "Intermediate" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Beginner" },
    { name: "jQuery", level: "Intermediate" },
    { name: "RWD", level: "Intermediate" },
    { name: "SASS", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Node", level: "Beginner" },
    { name: "Webpack", level: "Beginner" },
    { name: "Git", level: "Intermediate" }
  ];
  const mainList = document.querySelector(".mainList");
  const skillsContainerImage = document.querySelector(
    ".aboutMe__skillsTechImage"
  );
  const skillsContainerSkillsName = document.querySelector(
    ".aboutMe__skillsName"
  );
  const skillsContainerSkillsLevel = document.querySelector(
    ".aboutMe__skillsLevel--level"
  );

  mainList.addEventListener("click", event => {
    if (event.target.dataset) {
      technologiesName.forEach(singleTech => {
        if (event.target.dataset.id == singleTech.name) {
          document
            .querySelector(`[data-id='${singleTech.name}']`)
            .classList.add("mainList__item--active");
          skillsContainerImage.src = `images/technologies/${singleTech.name}.png`;
          skillsContainerSkillsName.textContent = singleTech.name;
          skillsContainerSkillsLevel.textContent = singleTech.level;
        } else {
          document
            .querySelector(`[data-id='${singleTech.name}']`)
            .classList.remove("mainList__item--active");
        }
      });
    }
  });

  //Projects

  const projects = [
    {
      id: 0,
      name: "League of Legends stats checker",
      describe:
        "App let user to receive information about the user's game history based on the username.",
      urlGithub:
        "https://github.com/PathFiinder/League-of-Legends-StatsChecker",
      urlLive: "https://pathfiinder.github.io/League-of-Legends-StatsChecker",
      techUsed: [
        "HTML5",
        "BEM",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript",
        "RioT API"
      ],
      category: ["app", "all"]
    },
    {
      id: 1,
      name: "Interactive Map",
      describe:
        "App 'Interactive map' is created using jVectorMap - http://jvectormap.com/. App let the user to choose countries from all over the world which they have visited.",
      urlGithub: "https://github.com/PathFiinder/Interactive-Map",
      urlLive: "https://pathfiinder.github.io/Interactive-Map",
      techUsed: [
        "HTML5",
        "BEM",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript",
        "jQuery",
        "jVectorMap"
      ],
      category: ["app", "all"]
    },
    {
      id: 2,
      name: "Ticket Machine",
      describe:
        "App is an implementation of ticket machine used in public transport in Cracow. It let user to choose ticekts, add money and get the change.",
      urlGithub: "https://github.com/PathFiinder/Ticket-Machine-Javascript",
      urlLive: "https://pathfiinder.github.io/Ticket-Machine-Javascript",
      techUsed: [
        "HTML5",
        "BEM",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript (ES6,Classes)",
        "Chart.js"
      ],
      category: ["app", "all"]
    },
    {
      id: 3,
      name: "To do List - React",
      describe: "App is an implementation of To-do-List",
      urlGithub: "https://github.com/PathFiinder/To-Do-List-React",
      urlLive: "https://pathfiinder.github.io/To-Do-List-React/",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "React"],
      category: ["app", "all"]
    },
    {
      id: 4,
      name: "MoGo",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/MoGo-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/MoGo-PSD-to-HTML",
      techUsed: [
        "HTML5",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript",
        "Bootstrap 4",
        "jQuery"
      ],
      category: ["web", "all"]
    },
    {
      id: 5,
      name: "Ceatr",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Ceatr-5-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Ceatr-5-PSD-to-HTML",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript", "jQuery"],
      category: ["web", "all"]
    },
    {
      id: 6,
      name: "Smiley",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Smiley-3-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Smiley-3-PSD-to-HTML",
      techUsed: ["HTML5", "CSS3", "SASS", "RWD", "JavaScript", "jQuery"],
      category: ["web", "all"]
    },
    {
      id: 7,
      name: "Agency",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Agency-4-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Agency-4-PSD-to-HTML",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript"],
      category: ["web", "all"]
    },
    {
      id: 8,
      name: "Cahee",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Cahee-2-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Cahee-2-PSD-to-HTML/",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript", "jQuery"],
      category: ["web", "all"]
    },
    {
      id: 9,
      name: "Memory Game",
      describe: "In game 'Memory Game' user have to find two same cards",
      urlGithub: "https://github.com/PathFiinder/Memory-Game",
      urlLive: "https://pathfiinder.github.io/Memory-Game",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript"],
      category: ["app", "all"]
    },
    {
      id: 10,
      name: "Paper-Rock-Scissors",
      describe:
        "Game 'Paper-Rock-Scissors' let user to choose one of three  option and play with computer",
      urlGithub: "https://github.com/PathFiinder/Game-Paper-Rock-Scissors",
      urlLive: "https://pathfiinder.github.io/Game-Paper-Rock-Scissors",
      techUsed: ["HTML5", "CSS3", "SASS", "RWD", "JavaScript"],
      category: ["app", "all"]
    }
  ];
  let typeOfSort = "all";

  const createSingleTech = techUsed => {
    let innerHTML = "";
    techUsed.forEach(singleTech => {
      innerHTML += `<li class="workSingleProject__techItem">${singleTech}</li>`;
    });
    return innerHTML;
  };

  const createElement = (
    name,
    describe,
    techUsed,
    urlGit,
    urlLive
  ) => {
    const element = `
      <h3 class="workSingleProject__name">${name}</h3>
      <hr class="workSingleProject__hr"/>
      <p class="workSingleProject__describe">${describe}</p>
      <ul class="workSingleProject__techList">
          ${createSingleTech(techUsed)}
      </ul>
      <div class="workSingleProject__linkList">
        <a class="workSingleProject__linkItem" href="${urlGit}"><span class="fab fa-github-square workSingleProject__linkIcon"></span></a>
        <a class="workSingleProject__linkItem" href="${urlLive}"><span class="fas fa-eye workSingleProject__linkIcon"></span></a>
      </div>
      `;

    return element;
  };

  const projectsContainer = document.querySelector(".projects__workContainer");

  const filterProjects = () => {
    projects.filter(singleProject => {
      if (
        singleProject.category[1] === typeOfSort ||
        singleProject.category[0] === typeOfSort
      ) {
        const div = document.createElement("div");
        div.classList.add("workContainer__element", "workSingleProject");
        div.dataset.id = singleProject.id;
        div.innerHTML += createElement(
          singleProject.name,
          singleProject.describe,
          singleProject.techUsed,
          singleProject.urlGithub,
          singleProject.urlLive
        );
        projectsContainer.appendChild(div);
      }
    });
  };
  filterProjects();

  const buttonsTypeOfSort = document.querySelectorAll(
    ".projects__sortSingleType"
  );

  const removeActiveSortType = () => {
    [...buttonsTypeOfSort].forEach(single => {
      single.classList.remove("projects__sortSingleType--active");
    });
  };

  [...buttonsTypeOfSort].forEach(singleButton => {
    singleButton.addEventListener("click", event => {
      typeOfSort = event.target.dataset.sorttype;
      removeActiveSortType();
      while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.firstChild);
      }
      document
        .querySelector(`[data-sortType='${typeOfSort}']`)
        .classList.add("projects__sortSingleType--active");
      filterProjects();
    });
  });
});
