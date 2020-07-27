const Home = () => {
  const create = () => {
    const divHome = document.createElement('div');
    const divBanner = document.createElement('div');
    const divWelcome = document.createElement('div');

    divBanner.className = 'banner rounded active';
    divWelcome.className = 'card mt-4 transparency';
    divWelcome.innerHTML = `          
        <div class="card-header text-center bg-card-header"><strong>WELCOME COWBOY!</strong></div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 mx-3">
              <p class="card-text">The best Restaurant and Bar in the city. Request and enjoy our breakfasts, lunches, and dinners!.</p>
              <ul>
                <li class="card-text">Our chefs use the best ingredients.</li>
                <li class="card-text">Our barmans use the best drinks.</li>
                <li class="card-text">Our delivery boys comply with the new healthiness protocols.</li>
                <li class="card-text">The best prices for your wallet.</li>
                <li class="card-text">Do you need snacks for special services? Ask for Chizo, the best baker in the city.</li>
              </ul>
            </div>
          </div>
        </div>
    `;

    divHome.appendChild(divBanner);
    divHome.appendChild(divWelcome);

    return divHome;
  };

  const get = () => create();

  return { get };
};

export default Home;