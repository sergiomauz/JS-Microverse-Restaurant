const Container = () => {
  const create = () => {
    const mainContainer = document.createElement('main');
    mainContainer.className = 'container mt-4';
    return mainContainer;
  };

  const get = () => create();

  return { get };
};

export default Container;