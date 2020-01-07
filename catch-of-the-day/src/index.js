import React from 'react';
import StorePicker from './components/StorePicker';

import { render } from 'react-dom';



render(
    <StorePicker />, document.querySelector('#main')
); //render takes two items: The item to render, and the HTML element to attacch to