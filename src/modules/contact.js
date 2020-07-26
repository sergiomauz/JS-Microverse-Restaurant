import Logo from '../img/logo.png';

const Contact = () => {
  const create = () => {
    const divContact = document.createElement('div');
    divContact.className = 'card text-center transparency';
    divContact.innerHTML = `          
        <div class="card-header bg-card-header"><strong>CONTACT US</strong></div>
        <div class="card-body">
          <div class="row d-flex align-items-center">
            <div class="col-12 col-md-6">
              <h5 class="card-title">"La Ponderosa" Restaurant</h5>
              <p class="card-text">Served by Ben, Adam and Hoss Cartwright</p>
              <p class="card-text">San Jose Avenue #123</p>
              <p class="card-text">Phone: +51 952922025</p>
              <a href="#" class="btn btn-secondary">Send an e-mail</a>
            </div>
            <div class="col-12 col-md-6">       
            </div>
          </div>
        </div>
    `;

    const imgLogo = new Image();
    imgLogo.src = Logo;
    imgLogo.className = 'rounded-logo';
    divContact.querySelector('.card-body > .row > .col-12:last-child').appendChild(imgLogo);

    return divContact;
  };

  const get = () => create();

  return { get };
};

export default Contact;