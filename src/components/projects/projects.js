import './projects.scss';
import renderProject from '../project/project';

export default function renderProjects(projects) {
  const container = document.getElementById('projects-container');

  container.innerHTML = '';

  projects.forEach((project, index) => {
    const projectContainer = document.createElement('div');
    const projectHeader = document.createElement('div');
    const projectColor = document.createElement('div');
    const projectTitle = document.createElement('div');
    const projectTodos = document.createElement('div');
    const trashIcon = document.createElement('div');

    projectContainer.classList.add('project-container');
    projectHeader.classList.add('project');
    projectColor.classList.add('icon');
    projectTitle.classList.add('title');
    projectTodos.classList.add('number-of-todos');
    trashIcon.className = 'remove-btn';

    projectTitle.textContent = project.title;
    projectTodos.textContent = project.todos.length;
    projectColor.style.background = project.color;

    projectHeader.appendChild(projectColor);
    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectTodos);
    projectContainer.appendChild(projectHeader);
    projectContainer.appendChild(trashIcon);
    container.appendChild(projectContainer);

    trashIcon.addEventListener('click', () => {
      projects = projects.slice(0, index).concat(projects.slice(index + 1));
      renderProjects(projects);
    });

    projectTitle.addEventListener('click', (e) => {
      const selected = document.querySelector('#projects-container .selected');
      if (selected) {
        selected.classList.remove('selected');
      }

      e.target.classList.add('selected');
      renderProject(project);
    });
  });
}