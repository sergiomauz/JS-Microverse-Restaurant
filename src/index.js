import Header from './modules/header';
import Container from './modules/container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/restaurant.css';

const x = Header();
const y = Container();

document.body.insertBefore(y.display(), document.body.lastChild);
document.body.insertBefore(x.display(), document.body.firstChild);
