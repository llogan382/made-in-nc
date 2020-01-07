import React from 'react';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import "./css/style.css";



render(
    <StorePicker />, document.querySelector('#main')
); //render takes two items: The item to render, and the HTML element to attacch to