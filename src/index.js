import Navbar from './modules/navbar';
import Container from './modules/container';
import Home from './modules/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/restaurant.css';

const items = ['Home', 'Menu', 'Contact'];
const navbar = Navbar(items);
const container = Container();

const content = document.getElementById('content');
content.appendChild(container.get(), content.lastChild);
content.insertBefore(navbar.get(), content.firstChild);

const home = Home();
const main = document.querySelector('main');
main.appendChild(home.get());