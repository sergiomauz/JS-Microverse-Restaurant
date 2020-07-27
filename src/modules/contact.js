import Logo from '../img/logo.png';

const Contact = () => {
  const create = () => {
    const contactInfo = ['Served by Ben, Adam and Hoss Cartwright',
      'San Jose Avenue #123',
      'Phone: +51 952922025'];

    const divContact = document.createElement('div');
    divContact.className = 'card text-center transparency';
    divContact.innerHTML = `          
        <div class="card-header bg-card-header"><strong>CONTACT US</strong></div>
        <div class="card-body">
          <div class="row d-flex align-items-center">
            <div class="col-12 col-md-6"></div>
            <div class="col-12 col-md-6 mt-4 mt-md-0"></div>
          </div>
        </div>
    `;

    const imgLogo = new Image();
    imgLogo.src = Logo;
    imgLogo.className = 'rounded-logo';
    divContact.querySelector('.card-body > .row > .col-12:first-child').appendChild(imgLogo);

    const bizName = document.createElement('h5');
    bizName.className = 'card-title';
    bizName.innerHTML = '"La Ponderosa" Restaurant';
    divContact.querySelector('.card-body > .row > .col-12:last-child').appendChild(bizName);

    contactInfo.forEach(item => {
      const lineInfo = document.createElement('p');
      lineInfo.className = 'card-text';
      lineInfo.innerHTML = item;
      divContact.querySelector('.card-body > .row > .col-12:last-child').appendChild(lineInfo);
    });

    const btnEmail = document.createElement('a');
    btnEmail.className = 'btn btn-secondary';
    btnEmail.innerHTML = 'Send an e-mail';
    btnEmail.href = 'mailto:info@restaurant.xyz';
    divContact.querySelector('.card-body > .row > .col-12:last-child').appendChild(btnEmail);

    return divContact;
  };

  const get = () => create();

  return { get };
};

export default Contact;