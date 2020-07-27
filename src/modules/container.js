const Container = () => {
  const create = () => {
    const mainContainer = document.createElement('main');
    mainContainer.className = 'container my-5';
    return mainContainer;
  };

  const get = () => create();

  return { get };
};

export default Container;