import React from 'react';
import ReactDOM from 'react-dom';
import './styles/all.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.jsx';

const app = React.createElement(App);
ReactDOM.render(app, document.getElementById('root'));
