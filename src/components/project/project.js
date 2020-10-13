import './project.scss';
import todos from '../todos/todos'

export default function (project) {
  const projectContainer = document.getElementById('project-body');
  projectContainer.innerHTML = '';

  const projectBody = document.createElement('div');
  const projectTitle = document.createElement('div');
  const projectCircle = document.createElement('span');
  const projectDescription = document.createElement('div');
  const todosContainer = document.createElement('div');

  todosContainer.id = 'todos';

  projectBody.className = 'project-body';
  projectTitle.className = 'project-title';
  projectCircle.className = 'project-icon';
  projectCircle.style.backgroundColor = project.color;
  projectDescription.className = 'project-description';
  todosContainer.className = 'todos';

  projectTitle.appendChild(projectCircle);
  projectTitle.innerHTML += ` ${project.title}`;
  projectDescription.textContent = project.description;

  projectBody.appendChild(projectTitle);
  projectBody.appendChild(projectDescription);
  projectBody.appendChild(todosContainer);
  projectContainer.appendChild(projectBody);

  todos(project.todos);
}