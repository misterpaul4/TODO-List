import 'bootstrap';
import './main.scss';
import renderHeader from './components/header/header';
import renderSideBar from './components/sidebar/sidebar';
import Project from './utils/project';
import Todo from './utils/todo';

if (!localStorage.getItem('projects')) {
  const projects = [];

  const defaultProject = new Project(
    'default',
    `Here goes all of your default Todos there is no need to create 
    a new project but if you need some of more organisation you can 
    do so`,
    'red',
  );

  projects.push(defaultProject);

  const td1 = new Todo('call nora', 'testing', '1993-03-24', 'medium', true);
  const td2 = new Todo('call david', 'testing', '1996-03-24', 'low', false);
  const td3 = new Todo('call Paul', 'testing', '1994-03-24', 'high', true);
  const td4 = new Todo('call Zack', 'testing', '1995-03-24', 'medium', false);
  defaultProject.addTodo(td1);
  defaultProject.addTodo(td2);
  defaultProject.addTodo(td3);
  defaultProject.addTodo(td4);

  localStorage.setItem('projects', JSON.stringify(projects));
}

renderHeader();
renderSideBar();