import './todos.scss';
// eslint-disable-next-line import/no-cycle
import addTask from '../addTask/addTask';
// eslint-disable-next-line import/no-cycle
import renderForm from '../todoForm/form';

export default function todos(project) {
  const container = document.getElementById('todos');
  container.innerHTML = '';

  let accordion;
  let card;
  let cardHeader;
  let header;
  let seperator;
  let checkbox;
  let todoTitle;
  let expandBtn;
  let barIcon;
  let collapse;
  let cardBody;
  let todoDescription;
  let todoExtras;
  let todoPriority;
  let todoDate;
  let dateIcon;
  let dateValue;
  let removeBtn;
  let editBtn;
  let div;

  project.todos.forEach((td, index) => {
    accordion = document.createElement('div');
    card = document.createElement('div');
    cardHeader = document.createElement('div');
    header = document.createElement('h2');
    seperator = document.createElement('div');
    checkbox = document.createElement('input');
    todoTitle = document.createElement('span');
    div = document.createElement('div');
    expandBtn = document.createElement('button');
    barIcon = document.createElement('span');

    collapse = document.createElement('div');
    cardBody = document.createElement('div');
    todoDescription = document.createElement('div');
    todoExtras = document.createElement('div');
    todoPriority = document.createElement('span');
    todoDate = document.createElement('div');
    dateIcon = document.createElement('span');
    dateValue = document.createElement('span');

    removeBtn = document.createElement('span');
    editBtn = document.createElement('span');

    accordion.id = 'accordionExample';
    cardHeader.id = `heading-${index}`;
    collapse.id = `collapse-${index}`;

    accordion.className = `position-relative accordion pb-2 ${td.priority} border-grey`;
    removeBtn.className = 'remove-btn';
    card.className = 'card border-0';
    cardHeader.className = 'card-header m-0 p-0 border-0 bg-white';
    header.className = 'mb-0 d-flex align-items-baseline justify-content-between todo-header';
    todoTitle.className = 'due-date font-weight-bold ml-2';
    expandBtn.className = 'btn p-0 m-0 d-flex align-items-baseline';
    barIcon.className = 'more-icon bg-icon';
    collapse.className = 'collapse';
    cardBody.className = 'card-body';
    todoDescription.className = 'todo-description text-justify border p-3';
    todoExtras.className = 'todo-priority-duedate mt-3';
    todoPriority.className = `todo-priority ${td.priority}`;
    todoDate.className = 'd-flex align-item-center';
    dateIcon.className = 'date-icon bg-icon mr-1';
    dateValue.className = 'due-date-input';
    editBtn.className = 'editBtn bg-icon mr-2';
    div.className = 'd-flex align-items-center';

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'todo-checkbox');
    expandBtn.setAttribute('type', 'button');
    expandBtn.setAttribute('data-toggle', 'collapse');
    expandBtn.setAttribute('data-target', `#collapse-${index}`); // value should target collapse ID
    expandBtn.setAttribute('aria-expanded', 'true');
    expandBtn.setAttribute('aria-controls', `collapse-${index}`); // value should target collapse contaier
    collapse.setAttribute('aria-labelledby', `heading-${index}`); // value should target cardheader ID
    collapse.setAttribute('data-parent', '#accordionExample');
    removeBtn.setAttribute('data-index', index);
    editBtn.setAttribute('data-index', index);

    todoTitle.textContent = td.title;
    todoPriority.textContent = td.priority;
    dateValue.textContent = td.dueDate;
    todoDescription.textContent = td.description;
    removeBtn.textContent = 'x';

    accordion.appendChild(removeBtn);
    seperator.appendChild(checkbox);
    seperator.appendChild(todoTitle);
    header.appendChild(seperator);
    expandBtn.appendChild(barIcon);
    div.appendChild(editBtn);
    div.appendChild(expandBtn);
    header.appendChild(div);
    cardHeader.appendChild(header);
    card.appendChild(cardHeader);
    collapse.appendChild(cardBody);
    cardBody.appendChild(todoDescription);
    cardBody.appendChild(todoExtras);
    todoExtras.appendChild(todoPriority);
    todoExtras.appendChild(todoDate);
    todoDate.appendChild(dateIcon);
    todoDate.appendChild(dateValue);
    card.appendChild(collapse);
    accordion.appendChild(card);

    container.appendChild(accordion);

    removeBtn.addEventListener('click', (e) => {
      project.todos = project.todos.filter((todo, index) => index !== Number(e.target.getAttribute('data-index')));
      todos(project);
      addTask(project);
    });

    editBtn.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      renderForm(project, index);
    });

    checkbox.addEventListener('click', () => {
      td.complete = !td.complete;
    })
  });
}