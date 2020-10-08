import './main.scss';
import Project from './utils/project'
import ProjectDom from './DOM/project'
import header from './components/header/header'

const defaultProject = new Project('Default', 'This project contains your default todo list. You can add new projects with the add button');
ProjectDom();

header();