import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/all.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.jsx';

const app = React.createElement(App);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(app);
