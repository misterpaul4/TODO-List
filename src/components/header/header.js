import './header.scss';

export default function render() {
  const { body } = document;
  const container = document.createElement('header');
  const logoContainer = document.createElement('div');
  const searchInputContainer = document.createElement('div');
  const searchLogo = document.createElement('span');
  const searchInput = document.createElement('input');
  const navIconsContainer = document.createElement('div');
  const plusIcon = document.createElement('div');
  const noticeIcon = document.createElement('div');
  const notificationDot = document.createElement('span');
  const settingsIcon = document.createElement('div');

  logoContainer.classList.add('logo', 'bg-icon');
  searchInputContainer.classList.add('search-input');
  searchLogo.classList.add('search-logo');
  navIconsContainer.classList.add('nav-icons');
  plusIcon.classList.add('plus', 'bg-icon');
  noticeIcon.classList.add('notice', 'bg-icon');
  notificationDot.classList.add('notification');
  settingsIcon.classList.add('bg-icon', 'settings');

  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('name', 'search');
  searchInput.id = 'search-input';
  searchInput.setAttribute('placeholder', 'Quick Find');

  noticeIcon.appendChild(notificationDot);
  searchInputContainer.appendChild(searchLogo);
  searchInputContainer.appendChild(searchInput);
  navIconsContainer.appendChild(plusIcon);
  navIconsContainer.appendChild(noticeIcon);
  navIconsContainer.appendChild(settingsIcon);
  container.appendChild(logoContainer);
  container.appendChild(searchInputContainer);
  container.appendChild(navIconsContainer);
  body.appendChild(container);
}