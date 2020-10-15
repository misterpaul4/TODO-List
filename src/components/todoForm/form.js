import Todo from '../../utils/todo';
// eslint-disable-next-line import/no-cycle
import renderProjects from '../projects/projects';
import './form.scss';

export default function renderForm(project, index = false) {
  const { body } = document;
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  const header = document.createElement('h2');

  const titleGroup = document.createElement('div');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');
  const titleWarning = document.createElement('small');

  const duedateGroup = document.createElement('div');
  const duedateLabel = document.createElement('label');
  const duedateInput = document.createElement('input');
  const duedateWarning = document.createElement('small');

  const priorityGroup = document.createElement('div');
  const priorityLabel = document.createElement('label');
  const priorityInput = document.createElement('select');
  const priorityHigh = document.createElement('option');
  const priorityMedium = document.createElement('option');
  const priorityLow = document.createElement('option');

  const descriptionGroup = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  const descriptionInput = document.createElement('textarea');
  const descriptionWarning = document.createElement('small');

  const submit = document.createElement('button');
  const closeBtn = document.createElement('span');

  formContainer.className = 'form-container scroll';
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
  titleWarning.className = 'hide form-text text-danger';
  descriptionWarning.className = 'hide form-text text-danger';
  duedateWarning.className = 'hide form-text text-danger';

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
  submit.textContent = index ? 'Edit' : 'Submit';
  titleWarning.textContent = 'title must be greater than 5 characters';
  descriptionWarning.textContent = 'description must be greater than 10 characters';
  duedateWarning.textContent = 'date is required';

  form.appendChild(header);

  titleGroup.appendChild(titleLabel);
  titleGroup.appendChild(titleInput);
  titleGroup.appendChild(titleWarning);

  form.appendChild(titleGroup);

  duedateGroup.appendChild(duedateLabel);
  duedateGroup.appendChild(duedateInput);
  duedateGroup.appendChild(duedateWarning);
  form.appendChild(duedateGroup);

  priorityGroup.appendChild(priorityLabel);
  priorityInput.appendChild(priorityHigh);
  priorityInput.appendChild(priorityMedium);
  priorityInput.appendChild(priorityLow);
  priorityGroup.appendChild(priorityInput);
  form.appendChild(priorityGroup);

  descriptionGroup.appendChild(descriptionLabel);
  descriptionGroup.appendChild(descriptionInput);
  descriptionGroup.appendChild(descriptionWarning);
  form.appendChild(descriptionGroup);

  form.appendChild(submit);
  form.appendChild(closeBtn);
  formContainer.appendChild(form);
  body.appendChild(formContainer);

  if (index) {
    titleInput.value = project.todos[index].title;

    switch (project.todos[index].priority) {
      case 'high':
        priorityHigh.setAttribute('selected', 'true');
        break;
      case 'medium':
        priorityMedium.setAttribute('selected', 'true');
        break;
      case 'low':
        priorityLow.setAttribute('selected', 'true');
        break;
      default:
        break;
    }

    duedateInput.value = project.todos[index].dueDate;
    descriptionInput.value = project.todos[index].description;
  }

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

  function showWarning(element, elementInput) {
    element.style.display = 'block';
    elementInput.classList.add('is-invalid');

    setTimeout(() => {
      element.style.display = 'none';
      elementInput.classList.remove('is-invalid');
    }, 8000);
  }

  closeBtn.addEventListener('click', removeForm);
  document.addEventListener('keydown', removeForm2);

  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const description = descriptionInput.value;
    const duedate = duedateInput.value;
    const priority = priorityInput.value;

    if (title.length >= 5 && description.length >= 10 && duedate !== '') {
      const container = document.getElementById('todos');
      const projectIndex = Number(container.getAttribute('data-project-index'));

      const newTodo = new Todo(title, description, duedate, priority);

      if (index) {
        project.todos[index] = newTodo;
      } else {
        project.todos.push(newTodo);
      }

      const projects = JSON.parse(localStorage.getItem('projects'));
      projects[projectIndex] = project;

      localStorage.setItem('projects', JSON.stringify(projects));

      removeForm(e);

      renderProjects(projects[projectIndex], projectIndex);
    } else {
      if (title.length < 5) {
        showWarning(titleWarning, titleInput);
      } if (description.length < 10) {
        showWarning(descriptionWarning, descriptionInput);
      } if (duedate === '') {
        showWarning(duedateWarning, duedateInput);
      }
    }
  });
}
