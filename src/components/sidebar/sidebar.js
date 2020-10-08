// import projectsRender from '../projects/projects';
import './sidebar.scss';

export default function render() {
  const { body } = document;
  const main = document.createElement('main');
  const nav = document.createElement('nav');
  const projectHeader = document.createElement('div');
  const projectTitle = document.createElement('div');
  const arrow = document.createElement('div');
  const project = document.createElement('div');
  const actionPlus = document.createElement('div');
  const projects = document.createElement('div');

  main.className = 'panel';
  nav.className = 'action-panel';
  projectHeader.className = 'project-header';
  projectTitle.className = 'project-title';
  arrow.className = 'arrow bg-icon';
  actionPlus.className = 'action-plus bg-icon';
  projects.className = 'projects';
  projects.id = 'projects-container';

  project.textContent = 'Projects';

  projectTitle.appendChild(arrow);
  projectTitle.appendChild(project);
  projectHeader.appendChild(projectTitle);
  projectHeader.appendChild(actionPlus);
  nav.appendChild(projectHeader);
  nav.appendChild(projects);
  main.appendChild(nav);
  body.appendChild(main);
}
