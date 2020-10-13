export default function () {
  const { body } = document;
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  const header = document.createElement('h2');

  const titleGroup = document.createElement('div');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');

  const duedateGroup = document.createElement('div');
  const duedateLabel = document.createElement('label');
  const duedateInput = document.createElement('input');

  const priorityGroup = document.createElement('div');
  const priorityLabel = document.createElement('label');
  const priorityInput = document.createElement('select');
  const priorityHigh = document.createElement('option');
  const priorityMedium = document.createElement('option');
  const priorityLow = document.createElement('option');

  const descriptionGroup = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  const descriptionInput = document.createElement('textarea');

  const submit = document.createElement('button');
  const closeBtn = document.createElement('span');

  formContainer.className = 'form-container';
  form.classList.add('position-relative');
  titleGroup.className = 'form-group';
  titleInput.className = 'form-control';
  duedateGroup.className = 'form-group';
  duedateInput.className = 'form-control';
  priorityGroup.className = 'form-group';
  priorityInput.className = 'form-control';
  descriptionGroup.className = 'form-group';
  descriptionInput.className = 'form-control';
  submit.className = 'btn btn-primary';
  closeBtn.className = 'close-btn';

  titleLabel.setAttribute('for', 'title');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  duedateLabel.setAttribute('for', 'due-date');
  duedateInput.setAttribute('type', 'date');
  duedateInput.setAttribute('name', 'due-date');
  priorityLabel.setAttribute('for', 'priority');
  priorityInput.setAttribute('name', 'priority');
  priorityHigh.setAttribute('value', 'high');
  priorityMedium.setAttribute('value', 'medium');
  priorityLow.setAttribute('value', 'low');
  descriptionLabel.setAttribute('for', 'description');
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('rows', '5');
  submit.setAttribute('type', 'submit');

  formContainer.id = 'todo-form';
  titleInput.id = 'title';
  duedateInput.id = 'due-date';
  priorityInput.id = 'priority';
  descriptionInput.id = 'description';
  submit.id = 'todo-submit';

  header.textContent = 'New Todo';
  titleLabel.textContent = 'Title';
  duedateLabel.textContent = 'Due Date';
  priorityLabel.textContent = 'Priority';
  priorityHigh.textContent = 'High';
  priorityMedium.textContent = 'Medium';
  priorityLow.textContent = 'Low';
  descriptionLabel.textContent = 'Description';
  submit.textContent = 'Submit';

  form.appendChild(header);

  titleGroup.appendChild(titleLabel);
  titleGroup.appendChild(titleInput);
  form.appendChild(titleGroup);

  duedateGroup.appendChild(duedateLabel);
  duedateGroup.appendChild(duedateInput);
  form.appendChild(duedateGroup);

  priorityGroup.appendChild(priorityLabel);
  priorityInput.appendChild(priorityHigh);
  priorityInput.appendChild(priorityMedium);
  priorityInput.appendChild(priorityLow);
  priorityGroup.appendChild(priorityInput);
  form.appendChild(priorityGroup);

  descriptionGroup.appendChild(descriptionLabel);
  descriptionGroup.appendChild(descriptionInput);
  form.appendChild(descriptionGroup);

  form.appendChild(submit);
  form.appendChild(closeBtn);
  formContainer.appendChild(form);
  body.appendChild(formContainer);

  function removeForm2(e) {
    if (e.key === 'Escape') {
      formContainer.remove();
    }

    document.removeEventListener('keydown', removeForm2);
  }

  function removeForm(e) {
    formContainer.remove();
    e.target.removeEventListener('click', removeForm);
    document.removeEventListener('keydown', removeForm2);
  }

  closeBtn.addEventListener('click', removeForm);
  document.addEventListener('keydown', removeForm2);
}