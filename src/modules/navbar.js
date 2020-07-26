import Home from './home';
import Menu from './menu';
import Contact from './contact';
import Logo from '../img/small-logo.png';

const Navbar = (items) => {
  let selectedModule;
  const addClickListeners = (element, item) => {
    const main = document.querySelector('main');
    element.addEventListener('click', () => {
      switch (item) {
        case 'Menu':
          selectedModule = Menu();
          break;
        case 'Contact':
          selectedModule = Contact();
          break;
        case 'Home':
        default:
          selectedModule = Home();
          break;
      }
      main.innerHTML = '';
      main.appendChild(selectedModule.get());
    });
  };

  const create = () => {
    const headerPage = document.createElement('header');
    headerPage.className = 'navbar navbar-expand-md navbar-dark fixed-top bg-navbar';

    const logo = document.createElement('a');
    logo.className = 'navbar-brand';

    const imgLogo = new Image();
    imgLogo.src = Logo;
    imgLogo.className = 'rounded small-logo';
    logo.appendChild(imgLogo);

    const toggler = document.createElement('button');
    toggler.className = 'navbar-toggler';
    toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';

    const collapser = document.createElement('nav');
    collapser.className = 'collapse navbar-collapse';

    const ulMenu = document.createElement('ul');
    ulMenu.className = 'navbar-nav mr-auto';
    items.forEach(item => {
      const liMenu = document.createElement('li');
      liMenu.className = 'nav-item';

      const lnkMenu = document.createElement('a');
      lnkMenu.className = 'nav-link';
      lnkMenu.href = `#${item}`;
      lnkMenu.innerHTML = item;
      addClickListeners(lnkMenu, item);
      liMenu.appendChild(lnkMenu);

      ulMenu.appendChild(liMenu);
    });

    headerPage.appendChild(logo);
    headerPage.appendChild(toggler);
    collapser.appendChild(ulMenu);
    headerPage.appendChild(collapser);

    return headerPage;
  };

  const get = () => create();

  return { get };
};

export default Navbar;