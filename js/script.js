// variables
let whatProject;
let projectPoster;
let projectPosterTitle;
let projectDescription;
let closeProjectButton;

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// VERSIÓN PARA MÓVIL
const showDescription = projectClicked => {
  // variables
  whatProject = projectClicked.srcElement.id;
  projectPoster = document.getElementById(whatProject + '-poster');
  projectDescription = document.getElementById(whatProject + '-description');
  closeProjectButton = document.getElementById(whatProject + '-close');

  // mostrar la descripción del proyecto con click
  projectPoster.classList.add('hide');
  projectDescription.classList.remove('hide');

  closeProjectButton.addEventListener('click', () => {
    projectPoster.classList.remove('hide');
    projectDescription.classList.add('hide');
  });
};

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// VERSIÓN PARA DESKTOP
const showTitle = projectHovered => {
  // variables
  whatProject = projectHovered.srcElement.id;
  projectPoster = document.getElementById(whatProject + '-poster');
  projectPosterTitle = document.getElementById(whatProject + '-title-hover');
  projectDescription = document.getElementById(whatProject + '-description');
  closeProjectButton = document.getElementById(whatProject + '-close');

  // mostrar el titulo del proyecto con hover
  projectPosterTitle.classList.remove('hide');

  projectPosterTitle.addEventListener('mouseout', hideTitle => {
    projectPosterTitle.classList.add('hide');
  });

  // mostrar la descripción del proyecto con click
  projectPosterTitle.addEventListener('click', showDescription => {
    if (whatProject == 'diversidad') {
      projectPoster.classList.add('hide');
      projectDescription.classList.remove('hide');

      closeProjectButton.addEventListener('click', () => {
        projectPoster.classList.remove('hide');
        projectDescription.classList.add('hide');
      });
    }
  });
};

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// EventListeners
document
  .getElementById('diversidad')
  .addEventListener('click', showDescription);
document.getElementById('diversidad').addEventListener('mouseover', showTitle);

// document.getElementById('zaldiko').addEventListener('click', showDescription);
document.getElementById('zaldiko').addEventListener('mouseover', showTitle);

// document
//   .getElementById('infografia')
//   .addEventListener('click', showDescription);
document.getElementById('infografia').addEventListener('mouseover', showTitle);

// document
//   .getElementById('invitaciones')
//   .addEventListener('click', showDescription);
document
  .getElementById('invitaciones')
  .addEventListener('mouseover', showTitle);
