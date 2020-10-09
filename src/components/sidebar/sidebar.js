// import projectsRender from '../projects/projects';
import './sidebar.scss';
import renderProjects from '../projects/projects';
import Project from '../../utils/project';

function renderForm(projects) {
  const formContainer = document.createElement('div');

  formContainer.id = 'project-form';
  formContainer.className = 'form-container';

  formContainer.innerHTML = `
    <form>
      <h2>New Project</h2>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" class="form-control" id="title">
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" name="description" id="description" rows="5"></textarea>
      </div>
      <button type="submit" class="btn btn-primary" id="project-submit">Submit</button>
    </form>
  `;

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
