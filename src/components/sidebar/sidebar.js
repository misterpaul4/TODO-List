// import projectsRender from '../projects/projects';
import './sidebar.scss';
import renderProjects from '../projects/projects';
import Project from '../../utils/project';

function renderForm(projects) {
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  const header = document.createElement('h2');
  const titleContainer = document.createElement('div');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');
  const descriptionContainer = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  const descriptionInput = document.createElement('textarea');
  const submitBtn = document.createElement('button');

  formContainer.id = 'project-form';
  titleInput.id = 'title';
  descriptionInput.id = 'description';
  submitBtn.id = 'project-submit';

  formContainer.className = 'form-container';
  titleContainer.className = 'form-group';
  titleInput.className = 'form-control';
  descriptionContainer.className = 'form-group';
  descriptionInput.className = 'form-control';
  submitBtn.classList.add('btn', 'btn-primary');

  titleLabel.setAttribute('for', 'title');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  descriptionLabel.setAttribute('for', 'description');
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('rows', '5');
  submitBtn.setAttribute('type', 'submit');


  titleLabel.textContent = 'Title';
  descriptionLabel.textContent = 'Description';
  submitBtn.textContent = 'Submit';
  header.textContent = 'New Project';

  formContainer.appendChild(form);
  form.appendChild(header);
  form.appendChild(titleContainer);
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(titleInput);
  form.appendChild(descriptionContainer);
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(descriptionInput);
  form.appendChild(submitBtn);
  document.body.appendChild(formContainer);
}

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

  main.className = 'panel';
  nav.className = 'action-panel';
  projectHeader.className = 'project-header';
  projectTitle.className = 'project-title';
  arrow.className = 'arrow bg-icon';
  actionPlus.className = 'action-plus bg-icon';
  projectsContainer.className = 'projects';
  projectsContainer.id = 'projects-container';

  project.textContent = 'Projects';

  projectTitle.appendChild(arrow);
  projectTitle.appendChild(project);
  projectHeader.appendChild(projectTitle);
  projectHeader.appendChild(actionPlus);
  nav.appendChild(projectHeader);
  nav.appendChild(projectsContainer);
  main.appendChild(nav);
  body.appendChild(main);

  actionPlus.addEventListener('click', () => {
    renderForm(projects);
    // const newProject = new Project('test', 'description');
    // projects.push(newProject);
    // renderProjects(projects);
  });

  renderProjects(projects);
}
