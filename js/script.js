// La idea es que el código funcione con cualquier proyecto cuando todos tengan imágenes y descripción

const showProject = projectClicked => {
  let whatProject = projectClicked.srcElement.id;

  let projectPoster = document.getElementById(whatProject + '-poster');
  let projectDescription = document.getElementById(
    whatProject + '-description'
  );
  let closeProjectButton = document.getElementById(whatProject + '-close');

  projectPoster.classList.add('hide');
  projectDescription.classList.remove('hide');

  closeProjectButton.addEventListener('click', () => {
    projectPoster.classList.remove('hide');
    projectDescription.classList.add('hide');
  });
};

document
  .getElementById('diversidad-poster')
  .addEventListener('click', showProject);
