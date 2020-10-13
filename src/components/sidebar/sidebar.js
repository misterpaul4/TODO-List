// import projectsRender from '../projects/projects';
import './sidebar.scss';
import renderProjects from '../projects/projects';
import renderForm from '../projectForm/form';

export default function render(projects) {
  const { body } = document;
  const main = document.createElement('main');
  const nav = document.createElement('nav');
  const projectHeader = document.createElement('div');
  const projectTitle = document.createElement('div');
  const arrow = document.createElement('div');
  const project = document.createElement('div');
  const actionPlus = document.createElement('div');
  const projectsContainer = document.createElement('div');
  const projectDetails = document.createElement('section');

  main.className = 'panel';
  nav.className = 'action-panel';
  projectHeader.className = 'project-header';
  projectTitle.className = 'project-title';
  arrow.className = 'arrow bg-icon';
  actionPlus.className = 'action-plus bg-icon';
  projectsContainer.className = 'projects';
  projectsContainer.id = 'projects-container';
  projectDetails.className = 'project-details';
  projectDetails.id = 'project-body';

  project.textContent = 'Projects';

  projectTitle.appendChild(arrow);
  projectTitle.appendChild(project);
  projectHeader.appendChild(projectTitle);
  projectHeader.appendChild(actionPlus);
  nav.appendChild(projectHeader);
  nav.appendChild(projectsContainer);
  main.appendChild(nav);
  main.appendChild(projectDetails);
  body.appendChild(main);

  actionPlus.addEventListener('click', () => {
    renderForm(projects);
  });

  renderProjects(projects);
}
