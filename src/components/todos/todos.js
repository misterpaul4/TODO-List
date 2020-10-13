
import './todos.scss'

export default function todos(td_list) {
	const container = document.getElementById('todos');

	td_list.forEach((td) => {
		const accordion = document.createElement('div');
		const card = document.createElement('div');
		const cardHeader = document.createElement('div');
		const header = document.createElement('h2');
		const seperator = document.createElement('div');
		const checkbox = document.createElement('input');
		const todoTitle = document.createElement('span');
		const expandBtn = document.createElement('button');
		const barIcon = document.createElement('span');
		// Description collapsable part
		const collapse = document.createElement('div');
		const cardBody = document.createElement('div');
		const todoDescription = document.createElement('div');
		const todoExtras = document.createElement('div');
		const todoPriority = document.createElement('span');
		const todoDate = document.createElement('div');
		const dateIcon = document.createElement('span');
		const dateValue = document.createElement('span');

		accordion.id = "accordionExample";
		cardHeader.id = "headingOne"; // should be generated
		collapse.id = "collapseOne"; // should be generated

		accordion.className = "accordion pb-2 border-bottom border-grey";
		card.className = "card border-0";
		cardHeader.className = "card-header m-0 p-0 border-0 bg-white";
		header.className = "mb-0 d-flex align-items-baseline justify-content-between";
		todoTitle.className = "due-date font-weight-bold ml-2";
		expandBtn.className = "btn p-0 m-0 d-flex align-items-baseline";
		barIcon.className = "more-icon bg-icon";
		collapse.className = "collapse";
		cardBody.className = "card-body";
		todoDescription.className = "todo-description text-justify";
		todoExtras.className = "todo-priority-duedate";
		todoPriority.className = "todo-priority";
		todoDate.className = "d-flex align-item-center";
		dateIcon.className = "date-icon bg-icon mr-1";
		dateValue.className = "due-date-input";

		checkbox.setAttribute('type', 'checkbox');
		checkbox.setAttribute('name', 'todo-checkbox');
		expandBtn.setAttribute('type', 'button');
		expandBtn.setAttribute('data-toggle', 'collapse');
		expandBtn.setAttribute('data-target', '#collapseOne'); // value should target collapse ID
		expandBtn.setAttribute('aria-expanded', 'true');
		expandBtn.setAttribute('aria-controls', 'collapseOne'); // value should target collapse contaier
		collapse.setAttribute('aria-labelledby', 'headingOne'); // value should target cardheader ID
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
		expandBtn.appendChild(barIcon)
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
	})
}