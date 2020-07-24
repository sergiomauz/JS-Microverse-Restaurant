import Home from './home';
import Menu from './menu';
import Contact from './contact';

const Navbar = () => {
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
          selectedModule = Home();
          break;
        default:
          break;
      }
      main.innerHTML = '';
      main.appendChild(selectedModule.display());
    });
  };

  const create = () => {
    const items = ['Home', 'Menu', 'Contact'];
    const headerPage = document.createElement('header');
    headerPage.className = 'navbar navbar-expand-md navbar-dark fixed-top bg-dark';

    const logo = document.createElement('a');
    logo.className = 'navbar-brand';
    logo.innerHTML = 'PONDEROSA';

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
      lnkMenu.href = '#';
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

  const display = () => create();

  return { display };
};

export default Navbar;