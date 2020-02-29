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
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Intermediate" },
    { name: "Angular", level: "Beginner"},
    { name: "jQuery", level: "Beginner" },
    { name: "RWD", level: "Intermediate" },
    { name: "SASS", level: "Intermediate" },
    { name: "Bootstrap", level: "Beginnner" },
    { name: "Node", level: "Beginner" },
    { name: "Webpack", level: "Beginner" },
    { name: "Git", level: "Beginner" }
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
      name: "League of Legends stats checker using React",
      describe:
        "App created using React. The application lets the user receive information about the player's game history based on the username. App is using Riot API.",
      urlGithub:
        "https://github.com/PathFiinder/League-Of-Legends-Stats-REACT",
      urlLive: "https://pathfiinder.github.io/League-Of-Legends-Stats-REACT",
      techUsed: [
        "HTML5",
        "BEM",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript",
        "React",
        "RioT API"
      ],
      category: ["app", "all"]
    },
    {
      id: 1,
      name: "The Movie",
      describe:
        "App created using React (React Router). App let user receive information about the most popular, newest movies in database. Also user can search for selected movie or series and add favourites movies to 'My List' stored in Local Storage",
      urlGithub:
        "https://github.com/PathFiinder/TheMovie",
      urlLive: "https://pathfiinder.github.io/TheMovie/",
      techUsed: [
        "HTML5",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript",
        "React",
        "React Router"
      ],
      category: ["app", "all"]
    },
    {
      id: 2,
      name: "League of Legends stats checker",
      describe:
        "The application lets the user receive information about the player's game history based on the username.",
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
      id: 3,
      name: "Portfolio",
      describe: "Personal portfolio.",
      urlGithub: "https://github.com/PathFiinder/Portfolio",
      urlLive: "https://pathfiinder.github.io/Portfolio/",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript", "jQuery"],
      category: ["web", "all"]
    },
    {
      id: 4,
      name: "Interactive Map",
      describe:
        "The application allows the user select countries from around the world that he has visited. App 'Interactive map' is created using jVectorMap - http://jvectormap.com/. ",
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
      id: 5,
      name: "Weather APP ",
      describe:
        "The application allows the user to receive information about the current weather and for the next 5 days in the selected location or through the enabled location module. Application made as part of the CodersCamp course. ",
      urlGithub: "https://github.com/PathFiinder/Weather-App-JS",
      urlLive: "https://pathfiinder.github.io/Weather-App-JS/",
      techUsed: [
        "HTML5",
        "BEM",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript",
        "OpenWeather Api",
        "OpenCage Geocorder" 
      ],
      category: ["app", "all"]
    },
    {
      id: 6,
      name: "Ticket Machine",
      describe:
        "The application is an implementation of ticket machine used in public transport in Cracow. App lets user choose ticekts, add money and get the change.",
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
      id: 7,
      name: "To do List - React",
      describe: "The application is an implementation of To-do-List",
      urlGithub: "https://github.com/PathFiinder/To-Do-List-React",
      urlLive: "https://pathfiinder.github.io/To-Do-List-React/",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "React"],
      category: ["app", "all"]
    },
    {
      id: 8,
      name: "Dev",
      describe:
        "Project implemented as part of the course 'Coders Camp' (PSD TO HTML)",
      urlGithub: "https://github.com/PathFiinder/CodersCamp-Project-1",
      urlLive: "https://pathfiinder.github.io/CodersCamp-Project-1/",
      techUsed: [
        "HTML5",
        "BEM",
        "CSS3",
        "SASS",
        "RWD",
        "JavaScript",
      ],
      category: ["web", "all"]
    },
    {
      id: 9,
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
      id: 10,
      name: "Ceatr",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Ceatr-5-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Ceatr-5-PSD-to-HTML",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript", "jQuery"],
      category: ["web", "all"]
    },
    {
      id: 11,
      name: "Smiley",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Smiley-3-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Smiley-3-PSD-to-HTML",
      techUsed: ["HTML5", "CSS3", "SASS", "RWD", "JavaScript", "jQuery"],
      category: ["web", "all"]
    },
    {
      id: 12,
      name: "Agency",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Agency-4-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Agency-4-PSD-to-HTML",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript"],
      category: ["web", "all"]
    },
    {
      id: 13,
      name: "Cahee",
      describe:
        "A project carried out to create a website using free template (PSD to HTML)",
      urlGithub: "https://github.com/PathFiinder/Cahee-2-PSD-to-HTML",
      urlLive: "https://pathfiinder.github.io/Cahee-2-PSD-to-HTML/",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript", "jQuery"],
      category: ["web", "all"]
    },
    {
      id: 14,
      name: "Memory Game",
      describe: "In game 'Memory Game' user have to find two same cards",
      urlGithub: "https://github.com/PathFiinder/Memory-Game",
      urlLive: "https://pathfiinder.github.io/Memory-Game",
      techUsed: ["HTML5", "BEM", "CSS3", "SASS", "RWD", "JavaScript"],
      category: ["app", "all"]
    },
    {
      id: 15,
      name: "Paper-Rock-Scissors",
      describe:
        "Game 'Paper-Rock-Scissors' lets user choose one of three option and play with computer",
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
    counter,
    describe,
    techUsed,
    urlGit,
    urlLive
  ) => {
    const element = `
      <h3 class="workSingleProject__name">${name}</h3>
      <p class="workSingleProject__counter">${
        counter < 10 ? "0" + counter : counter
      }</p>
      <hr class="workSingleProject__hr"/>
      <p class="workSingleProject__describe">${describe}</p>
      <ul class="workSingleProject__techList">
          ${createSingleTech(techUsed)}
      </ul>
      <div class="workSingleProject__linkList">
        <a class="workSingleProject__linkItem" target="_blank" href="${urlGit}"><span class="fab fa-github-square workSingleProject__linkIcon"></span></a>
        <a class="workSingleProject__linkItem" target="_blank" href="${urlLive}"><span class="fas fa-eye workSingleProject__linkIcon"></span></a>
      </div>
      `;

    return element;
  };

  const projectsContainer = document.querySelector(".projects__workContainer");

  const filterProjects = () => {
    let counterOfProjects = 1;
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
          counterOfProjects,
          singleProject.describe,
          singleProject.techUsed,
          singleProject.urlGithub,
          singleProject.urlLive
        );
        projectsContainer.appendChild(div);
        counterOfProjects++;
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

  //Scoll

  function toScroll(PosTop, navH) {
    $("body, html").animate(
      {
        scrollTop: PosTop - navH
      },
      1000
    );
    header.classList.remove("header--active");
    nav.classList.remove("nav--active");
  }

  let headerHeight = $(".header").height();
  let showcasePosTop = $(".showcase").offset().top;
  let aboutMePosTop = $(".aboutMe").offset().top;
  let projectsPosTop = $(".projects").offset().top;
  let contactPosTop = $(".contact").offset().top;

  $(".nav__link--top").on("click", function() {
    toScroll(showcasePosTop, headerHeight + 130);
  });

  $(".header__link").on("click", function() {
    toScroll(showcasePosTop, headerHeight + 130);
  });

  $(".nav__link--aboutMe").on("click", function() {
    toScroll(aboutMePosTop, headerHeight);
  });

  $(".nav__link--projects").on("click", function() {
    toScroll(projectsPosTop, headerHeight);
  });

  $(".nav__link--contact").on("click", function() {
    toScroll(contactPosTop, headerHeight);
  });

  window.onresize = () => {
    headerHeight = $(".header").height();
    showcasePosTop = $(".showcase").offset().top;
    aboutMePosTop = $(".aboutMe").offset().top;
    projectsPosTop = $(".projects").offset().top;
    contactPosTop = $(".contact").offset().top;
  };
});
