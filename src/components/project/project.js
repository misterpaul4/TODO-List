import './project.scss';
import todos from '../todos/todos';
import renderForm from '../todoForm/form';

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

  const accordion = document.createElement('div');
  const card = document.createElement('card');
  const cardHeader = document.createElement('card-header');
  const header = document.createElement('h2');
  const separator = document.createElement('div');
  const action = document.createElement('div');
  const text = document.createElement('span');

  accordion.className = 'accordion pb-2';
  card.className = 'card border-0';
  cardHeader.className = 'card-header m-0 p-0 border-0 bg-white';
  header.className = 'mb-0 d-flex align-items-baseline justify-content-between';
  separator.className = 'd-flex pt-3';
  action.className = 'action-plus bg-icon';
  text.className = 'due-date text-muted ml-2';

  text.textContent = 'Add Task';

  separator.appendChild(action);
  separator.appendChild(text);
  header.appendChild(separator);
  cardHeader.appendChild(header);
  card.appendChild(cardHeader);
  accordion.appendChild(card);
  todosContainer.appendChild(accordion);

  action.addEventListener('click', () => {
    renderForm(project);
  });
}