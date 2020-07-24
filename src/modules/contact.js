import Logo from '../img/logo.png';

const Contact = () => {
  const create = () => {
    const divContact = document.createElement('div');
    divContact.className = 'card text-center';
    divContact.innerHTML = `          
        <div class="card-header bg-red"><strong>CONTACT US</strong></div>
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <h5 class="card-title">Ponderosa Restaurant</h5>
              <p class="card-text">Served by John and Buck Canon</p>
              <p class="card-text">Bohemia Avenue 123</p>
              <p class="card-text">Phone: +51 952922025</p>
              <a href="#" class="btn btn-primary">Send us an e-mail</a>
            </div>
            <div class="col-6">              
            </div>
          </div>
        </div>
    `;

    const imgLogo = new Image();
    imgLogo.src = Logo;
    //console.log(Logo);
    divContact.querySelector('.card-body > .row > .col-6:last-child').appendChild(imgLogo);

    return divContact;
  };

  const display = () => create();

  return { display };
};

export default Contact;