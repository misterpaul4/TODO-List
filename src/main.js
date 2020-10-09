import './main.scss';
import renderHeader from './components/header/header';
import renderSideBar from './components/sidebar/sidebar';
import renderProject from './components/project/project';
import Project from './utils/project';

renderHeader();
renderSideBar();


// testing
let projects = []
const defaultProject = new Project('shopping', 'shopping list');
const grocery = new Project('grocery', 'grocery list');
projects.push(defaultProject);
projects.push(grocery);
renderProject(projects)