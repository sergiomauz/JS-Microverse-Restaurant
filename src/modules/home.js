const Home = () => {
  const create = () => {
    const divHome = document.createElement('div');
    divHome.className = 'banner active';

    return divHome;
  };

  const get = () => create();

  return { get };
};

export default Home;