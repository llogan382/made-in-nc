import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';

import "./css/style.css";



render(
    <Router />, document.querySelector('#main')
); //render takes two items: The item to render, and the HTML element to attacch to