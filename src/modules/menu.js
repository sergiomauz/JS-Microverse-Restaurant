import Breakfast from '../img/menu/breakfast.png';
import Lunch from '../img/menu/lunch.png';
import Dinner from '../img/menu/dinner.png';

const Menu = () => {
  const create = () => {
    const menuDishes = document.createElement('div');
    menuDishes.className = 'card transparency';
    menuDishes.innerHTML = `
    
      <div class="card-header bg-card-header text-center"><strong>TODAY MENU: HAVE A HAPPY WEEKEND!</strong></div>
        <div class="card-body">
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span>
              </h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
                semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                commodo.</p>
            </div>
            <div class="col-md-5">
              <img src="${Breakfast}" class="rounded-logo">
            </div>
          </div>

          <hr>

          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
                semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                commodo.</p>
            </div>
            <div class="col-md-5 order-md-1">
              <img src="${Lunch}" class="rounded-logo">
            </div>
          </div>

          <hr>

          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
              <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod
                semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                commodo.</p>
            </div>
            <div class="col-md-5">
              <img src="${Dinner}" class="rounded-logo">
            </div>
          </div>
          <hr>
        </div>
      </div>    
    `;

    return menuDishes;
  };

  const get = () => create();

  return { get };
};

export default Menu;