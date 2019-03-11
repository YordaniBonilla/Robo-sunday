import React from 'react';
//we are importing react - react has the bundling for us - react is a view library (renders react code to dom)
import ReactDOM from 'react-dom';
//react dom is used for the websites to render onto canvas (renders to the dom we specify)
import 'tachyons';

import './index.css';
//react allows us to add css not just in one file but for each diffrent component
import Card from './Card.js';
//automatically assumes a .js if none is found
import * as serviceWorker from './serviceWorker';

import { robots } from './Robots';

ReactDOM.render(
	<div>
		<Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email} />
		<Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email} />
		<Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email} />
		<Card id={robots[3].id} name={robots[3].name} username={robots[3].username} email={robots[3].email} />
		<Card id={robots[4].id} name={robots[4].name} username={robots[4].username} email={robots[4].email} />
		<Card id={robots[5].id} name={robots[5].name} username={robots[5].username} email={robots[5].email} />
		<Card id={robots[6].id} name={robots[6].name} username={robots[6].username} email={robots[6].email} />
		<Card id={robots[7].id} name={robots[7].name} username={robots[7].username} email={robots[7].email} />
	</div>,
	document.getElementById('root')
);
//it wants react dom to use the function render and render --->

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
