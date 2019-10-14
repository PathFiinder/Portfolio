window.addEventListener("DOMContentLoaded", event => {
  //Handle navigation bars
  const navBars = document.querySelector(".header__iconBars");
  const nav = document.querySelector(".header__nav");
  const header = document.querySelector(".header");

  navBars.addEventListener("click", () => {
    header.classList.toggle("header--active");
    console.log(header.classList.contains("header--active"));
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
    { name: "JavaScript", level: "Advanced" },
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
});
