import 'bootstrap';
import './main.scss';
import renderHeader from './components/header/header';
import renderSideBar from './components/sidebar/sidebar';
import Project from './utils/project';
import Todo from './utils/todo';

let projects = [];

const defaultProject = new Project(
  'default',
  `Here goes all of your default Todos there is no need to create 
  a new project but if you need some of more organisation you can 
  do so`,
  'red',
);
const grocery = new Project('grocery', 'grocery list', 'green');

projects.push(defaultProject);
projects.push(grocery);

// title, description, dueDate, priority, note
const td1 = new Todo('call nora', 'testing', '24-dec', '!high', 'testing 2');
defaultProject.addTodo(td1);

renderHeader();
renderSideBar(projects);