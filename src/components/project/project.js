import './project.scss';

export default function (project) {
  const projectContainer = document.getElementById('project-body');
  projectContainer.innerHTML = '';

  const projectBody = document.createElement('div');
  const projectTitle = document.createElement('div');
  const projectCircle = document.createElement('span');
  const projectDescription = document.createElement('div');
  const todosContainer = document.createElement('div');

  // const accordion = document.createElement('div');
  // const card = document.createElement('div');
  // const cardHeader = document.createElement('div');
  // const header = document.createElement('h2');
  // const seperator = document.createElement('div');
  // const checkbox = document.createElement('input');
  // const todoTitle = document.createElement('span');
  // const expandBtn = document.createElement('button');
  // const barIcon = document.createElement('span');
  // // Description collapsable part
  // const collapse = document.createElement('div');
  // const cardBody = document.createElement('div');
  // const todoDescription = document.createElement('div');
  // const todoExtras = document.createElement('div');
  // const todoPriority = document.createElement('span');
  // const todoDate = document.createElement('div');

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

  console.log(project);
}