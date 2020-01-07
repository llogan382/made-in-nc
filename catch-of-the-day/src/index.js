import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import "./css/style.css";



render(
    <App />, document.querySelector('#main')
); //render takes two items: The item to render, and the HTML element to attacch to