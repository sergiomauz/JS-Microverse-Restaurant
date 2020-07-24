const Home = () => {
  const create = () => {
    const mainContainer = document.createElement('div');
    mainContainer.innerHTML = 'Home';

    return mainContainer;
  };

  const display = () => create();

  return { display };
};

export default Home;