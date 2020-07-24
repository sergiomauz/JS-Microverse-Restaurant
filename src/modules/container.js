const Container = () => {
  const create = () => {
    const mainContainer = document.createElement('main');
    mainContainer.className = 'container mt-4';
    mainContainer.innerHTML = 'main main';

    return mainContainer;
  };

  const display = () => create();

  return { display };
};

export default Container;