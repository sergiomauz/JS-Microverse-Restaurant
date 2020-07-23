const Navbar = () => {
  const addClickListeners = (element, action) => {
    element.addEventListener('click', action);
  };

  const create = () => {
    const items = ['Home', 'Menu', 'Contact'];
    const headerPage = document.createElement('header');

    const navBar = document.createElement('nav');
    navBar.className = 'navbar navbar-expand-md navbar-dark fixed-top bg-dark';

    const logo = document.createElement('a');
    logo.className = 'navbar-brand';
    logo.innerHTML = 'PONDEROSA';

    const toggler = document.createElement('button');
    toggler.className = 'navbar-toggler';
    toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';

    const collapser = document.createElement('div');
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
      addClickListeners(lnkMenu, () => { alert(); });
      liMenu.appendChild(lnkMenu);

      ulMenu.appendChild(liMenu);
    });

    navBar.appendChild(logo);
    navBar.appendChild(toggler);
    collapser.appendChild(ulMenu);
    navBar.appendChild(collapser);

    headerPage.appendChild(navBar);
    return headerPage;
  };

  const display = () => create();

  return { display };
};

export default Navbar;