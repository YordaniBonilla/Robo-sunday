import React from 'react';
//import our react library
//alt is used incase original src doesnt load
const Card = (props) => {
	//in order to no repeat more lines
	const { name, email, username, id } = props;
	return (
		<div p title="its alive!" className="bg-dark-blue dib br3 pa3 ma2 grow dim bw2 shadow-5 ">
			<img alt="robots" src={`https://www.robohash.org/${props.id}?200x200`} />
			<div>
				<h2>{props.name}</h2>
				<p>{props.email}</p>
				<p>{props.username}</p>
				<p>{props.id}</p>
			</div>
		</div>
	);
};

//we gotta export our component
export default Card;
