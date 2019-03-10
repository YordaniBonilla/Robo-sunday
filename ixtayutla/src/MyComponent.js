//this imports a react component from react
import React, { Component } from 'react';
//this imports our css file from our src folder
import './MyComponent.css';
class MyComponent extends Component {
	//rule always have a render function
	render() {
		//when rendering more than one thing we need to wrap it up in () so that it loads properly
		return (
			<div class="f1 tc">
				<h1> Hello class</h1>
				<p>My name is Yordani Alonso </p>
				<p>this is cool</p>

				<p>{this.props.ninja}</p>
			</div>
		);
	}
}
//this is so that it binds to the dom and props is written so that we can access ninja in props
//this strategy is really powerfull
export default MyComponent;

//seperation of concerns
//react has the functionality of components so that each component has its own universe
//components are concerned about themselves nothing else

//react uses jsx to render their fake dom
//then compares it to actuall dom (since and if it finds a diffrence) ---> it rerenders the actuall dom
//only changes what needs to be done in actual dom
