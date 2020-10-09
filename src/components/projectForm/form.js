import renderProjects from '../projects/projects';
import Project from '../../utils/project';

export default function renderForm(projects) {
  const formContainer = document.createElement('div');
  const form = document.createElement('form');
  const header = document.createElement('h2');
  const titleContainer = document.createElement('div');
  const titleLabel = document.createElement('label');
  const titleInput = document.createElement('input');
  const titleWarning = document.createElement('small');
  const descriptionContainer = document.createElement('div');
  const descriptionLabel = document.createElement('label');
  const descriptionInput = document.createElement('textarea');
  const descriptionWarning = document.createElement('small');
  const colorContainer = document.createElement('div');
  const colorLabel = document.createElement('label');
  const colorInput = document.createElement('input');
  const submitBtn = document.createElement('button');
  const closeBtn = document.createElement('span');

  formContainer.id = 'project-form';
  titleInput.id = 'title';
  descriptionInput.id = 'description';
  submitBtn.id = 'project-submit';
  colorInput.id = 'project-color';

  formContainer.classList.add('form-container');
  form.classList.add('position-relative');
  titleContainer.className = 'form-group';
  titleInput.className = 'form-control form-control-sm';
  titleWarning.id = 'titleWarning';
  titleWarning.className = 'form-text text-danger';
  descriptionContainer.className = 'form-group';
  descriptionInput.className = 'form-control form-control-sm';
  descriptionWarning.id = 'descriptionWarning';
  descriptionWarning.className = 'form-text text-danger';
  colorContainer.className = 'form-group';
  colorLabel.className = 'mr-2';
  submitBtn.classList.add('btn', 'btn-primary');
  closeBtn.className = 'close-btn';

  titleLabel.setAttribute('for', 'title');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('aria-describedby', 'titleWarning');
  descriptionLabel.setAttribute('for', 'description');
  descriptionInput.setAttribute('name', 'description');
  descriptionInput.setAttribute('rows', '5');
  submitBtn.setAttribute('type', 'submit');
  colorLabel.setAttribute('for', 'project-color');
  colorInput.setAttribute('type', 'color');
  colorInput.setAttribute('name', 'project-color');
  // set default color
  colorInput.setAttribute('value', '#ff0017');

  titleLabel.textContent = 'Title';
  titleWarning.textContent = 'Project title should atleast have 5 characters';
  descriptionLabel.textContent = 'Description';
  descriptionWarning.textContent = 'Project Description should atleast have 5 characters';
  submitBtn.textContent = 'Submit';
  header.textContent = 'New Project';
  colorLabel.textContent = 'Color: ';

  titleWarning.style.display = 'none';
  descriptionWarning.style.display = 'none';

  formContainer.appendChild(form);
  form.appendChild(closeBtn);
  form.appendChild(header);
  form.appendChild(titleContainer);
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(titleInput);
  titleContainer.appendChild(titleWarning);
  form.appendChild(descriptionContainer);
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(descriptionInput);
  descriptionContainer.appendChild(descriptionWarning);
  form.appendChild(colorContainer);
  colorContainer.appendChild(colorLabel);
  colorContainer.appendChild(colorInput);
  form.appendChild(submitBtn);
  document.body.appendChild(formContainer);

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

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const description = descriptionInput.value;
    const color = colorInput.value;

    if (title.length >= 5 && description.length >= 5) {
      const newProject = new Project(title, description, color);
      projects.push(newProject);
      renderProjects(projects);

      removeForm(e);

      renderProjects(projects);
    } else {
      if (title.length < 5) {
        titleWarning.style.display = 'block';

        setTimeout(() => {
          titleWarning.style.display = 'none';
        }, 8000);
      }

      if (description.length < 5) {
        descriptionWarning.style.display = 'block';

        setTimeout(() => {
          descriptionWarning.style.display = 'none';
        }, 8000);
      }
    }
  });
}