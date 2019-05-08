import $ from 'jquery';
import Logo from './images/logo.png';
import './styles/app.css'
import './styles/test.less'

// say(name);
const logo = new Image();
logo.src = Logo;

$('#root').append(logo).append('<p>about</p>');