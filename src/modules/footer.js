const Footer = () => {
  const create = () => {
    const divContact = document.createElement('div');
    divContact.className = 'fixed-bottom bg-dark';
    divContact.innerHTML = `           
          <div class="row d-flex align-items-center text-center">
            <div class="col-12 p-3 text-white">LA PONDEROSA 2020 - All rights reserved</div>
          </div>
    `;

    return divContact;
  };

  const get = () => create();

  return { get };
};

export default Footer;