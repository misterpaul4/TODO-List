// eslint-disable-next-line import/no-cycle
import renderForm from '../todoForm/form';

export default function (project) {
  const todosContainer = document.getElementById('todos');
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

  accordion.addEventListener('click', () => {
    renderForm(project);
  });
}