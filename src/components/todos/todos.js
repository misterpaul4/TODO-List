import './todos.scss';

export default function todos(tdList) {
  const container = document.getElementById('todos');

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

  tdList.forEach((td, index) => {
    accordion = document.createElement('div');
    card = document.createElement('div');
    cardHeader = document.createElement('div');
    header = document.createElement('h2');
    seperator = document.createElement('div');
    checkbox = document.createElement('input');
    todoTitle = document.createElement('span');
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

    accordion.id = 'accordionExample';
    cardHeader.id = `heading-${index}`; // should be generated
    collapse.id = `collapse-${index}`; // should be generated

    accordion.className = 'accordion pb-2 border-bottom border-grey';
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
    todoPriority.className = 'todo-priority';
    todoDate.className = 'd-flex align-item-center';
    dateIcon.className = 'date-icon bg-icon mr-1';
    dateValue.className = 'due-date-input';

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('name', 'todo-checkbox');
    expandBtn.setAttribute('type', 'button');
    expandBtn.setAttribute('data-toggle', 'collapse');
    expandBtn.setAttribute('data-target', `#collapse-${index}`); // value should target collapse ID
    expandBtn.setAttribute('aria-expanded', 'true');
    expandBtn.setAttribute('aria-controls', `collapse-${index}`); // value should target collapse contaier
    collapse.setAttribute('aria-labelledby', `heading-${index}`); // value should target cardheader ID
    collapse.setAttribute('data-parent', '#accordionExample');

    // tests
    todoTitle.textContent = td.title;
    todoPriority.textContent = td.priority;
    dateValue.textContent = td.dueDate;
    todoDescription.textContent = td.description;
    // test end
    seperator.appendChild(checkbox);
    seperator.appendChild(todoTitle);
    header.appendChild(seperator);
    expandBtn.appendChild(barIcon);
    header.appendChild(expandBtn);
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
  });
}