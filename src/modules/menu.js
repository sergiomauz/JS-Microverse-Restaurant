const Menu = () => {
  const create = () => {
    const menuDishes = document.createElement('div');
    menuDishes.innerHTML = 'Menu';

    return menuDishes;
  };

  const display = () => create();

  return { display };
};

export default Menu;