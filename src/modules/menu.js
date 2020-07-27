import Breakfast from '../img/menu/breakfast.png';
import Lunch from '../img/menu/lunch.png';
import Dinner from '../img/menu/dinner.png';

const Menu = () => {
  const create = () => {
    const todayMenu = [
      {
        name: '<strong>Breakfast:</strong> Grilled lamb burgers with seco sauce',
        description: 'Delicious grilled labm burger with seco sauce, and a Guarana drink.<br><br>You can get it for S/ 10.99',
        photo: `${Breakfast}`,
      },
      {
        name: '<strong>Lunch:</strong> Pork rind with andeans patatas, and creole salad.',
        description: 'The best pork from Candarave Town, creole salad, and fries andean patatas. Ask for a drink, soda, or wine.<br><br>You can get it for S/ 30.99',
        photo: `${Lunch}`,
      },
      {
        name: '<strong>Dinner & Bar:</strong> Grilled cheese-burger with french fries and mojito!',
        description: 'Special grilled cheese-burger, french fries, and a strong Mojito or Pisco Sour.<br><br>You can get it for S/ 25.99',
        photo: `${Dinner}`,
      },
    ];
    const menuDishes = document.createElement('div');
    menuDishes.className = 'card transparency mb-3';
    menuDishes.innerHTML = `
      <div class="card-header bg-card-header text-center"><strong>TODAY MENU: HAVE A HAPPY WEEKEND!</strong></div>
      <div class="card-body"></div>
    `;
    todayMenu.forEach(item => {
      const rowFeaturette = document.createElement('div');
      rowFeaturette.className = 'row featurette';

      const colDescription = document.createElement('div');
      colDescription.className = 'col-12 col-md-7 align-self-center';

      const colPhoto = document.createElement('div');
      colPhoto.className = 'col-12 col-md-5 text-center align-self-center';
      colPhoto.innerHTML = `<img src="${item.photo}" class="rounded-logo">`;

      const nameMenu = document.createElement('h4');
      nameMenu.className = 'featurette-heading';
      nameMenu.innerHTML = item.name;

      const detailMenu = document.createElement('p');
      detailMenu.className = 'lead mt-3 mx-3';
      detailMenu.innerHTML = item.description;

      colDescription.appendChild(nameMenu);
      colDescription.appendChild(detailMenu);
      rowFeaturette.appendChild(colDescription);
      rowFeaturette.appendChild(colPhoto);

      menuDishes.querySelector('.card-body').appendChild(rowFeaturette);
      menuDishes.querySelector('.card-body').appendChild(document.createElement('hr'));
    });

    return menuDishes;
  };

  const get = () => create();

  return { get };
};

export default Menu;