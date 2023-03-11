// variables
// let whatProject;
// let projectPoster;
// let projectPosterTitle;
// let projectDescription;
// let closeProjectButton;

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// VERSIÓN PARA MÓVIL
const showDescription = projectClicked => {
  // variables
  let whatProject = projectClicked.srcElement.id;
  let projectPoster = document.getElementById(whatProject + '-poster');
  let projectDescription = document.getElementById(
    whatProject + '-description'
  );
  let closeProjectButton = document.getElementById(whatProject + '-close');

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
  let whatProjectD = projectHovered.srcElement.id;
  let projectPosterD = document.getElementById(whatProjectD + '-poster');
  let projectPosterTitleD = document.getElementById(
    whatProjectD + '-title-hover'
  );
  let projectDescriptionD = document.getElementById(
    whatProjectD + '-description'
  );
  let closeProjectButtonD = document.getElementById(whatProjectD + '-close');

  // mostrar el titulo del proyecto con hover
  projectPosterTitleD.classList.remove('hide');

  projectPosterTitleD.addEventListener('mouseout', hideTitle => {
    projectPosterTitleD.classList.add('hide');
  });

  // mostrar la descripción del proyecto con click
  projectPosterTitleD.addEventListener('click', e => {
    if (whatProjectD == 'diversidad') {
      projectPosterD.classList.add('hide');
      projectDescriptionD.classList.remove('hide');

      closeProjectButtonD.addEventListener('click', () => {
        projectPosterD.classList.remove('hide');
        projectDescriptionD.classList.add('hide');
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
