import React from 'react';
//we are importing react - react has the bundling for us - react is a view library (renders react code to dom)
import ReactDOM from 'react-dom';
//react dom is used for the websites to render onto canvas (renders to the dom we specify)
import 'tachyons';

import './index.css';
//react allows us to add css not just in one file but for each diffrent component

//automatically assumes a .js if none is found
import * as serviceWorker from './serviceWorker';

import { robots } from './Robots';

import CardList from './CardList.js';

ReactDOM.render(<CardList robots={robots} />, document.getElementById('root'));
//it wants react dom to use the function render and render --->

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
