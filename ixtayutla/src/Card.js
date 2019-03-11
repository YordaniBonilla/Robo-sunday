import React from 'react';
//import our react library
//alt is used incase original src doesnt load
const Card = ({ name, email, username, id }) => {
	//in order to no repeat more lines
	return (
		<div p title="its alive!" className="bg-dark-blue dib br3 pa3 ma2 grow dim bw2 shadow-5 ">
			<img alt="robots" src={`https://www.robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{username}</p>
				<p>{id}</p>
			</div>
		</div>
	);
};

//we gotta export our component
export default Card;
