import './projects.scss';

export default function renderProjects(projects) {
  // const colors = ['red', 'blue', 'green', 'purple', 'orange', 'black'];

  const container = document.getElementById('projects-container');

  container.innerHTML = '';

  projects.forEach((proj, index) => {
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

    projectTitle.textContent = proj.title;
    projectTodos.textContent = proj.todos.length;
    projectColor.style.background = proj.color;

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
  });
}