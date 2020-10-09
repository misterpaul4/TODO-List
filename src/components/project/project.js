

export default function project(projects) {
	// const colors = ['red', 'blue', 'green', 'purple', 'orange', 'black'];

	const container = document.getElementById('projects-container');



	projects.forEach((proj) => {
		const projectContainer = document.createElement('div');
		const projectColor = document.createElement('div');
		const projectTitle = document.createElement('div');
		const projectTodos = document.createElement('div');

		projectContainer.classList.add('project');
		projectColor.classList.add('icon');
		projectTitle.classList.add('title');
		projectTodos.classList.add('number-of-todos');

		projectTitle.textContent = proj.title;
		projectTodos.textContent = proj.todos.length;
		// testing
		projectColor.style.background = 'red';




		container.appendChild(projectContainer);
		projectContainer.appendChild(projectColor);
		projectContainer.appendChild(projectTitle);
		projectContainer.appendChild(projectTodos);
	});
}