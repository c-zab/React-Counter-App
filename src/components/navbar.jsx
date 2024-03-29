import React from 'react';

const Navbar = ({ total, totalProducts }) => {
	return (
		<React.Fragment>
			<div className="ui top fixed menu">
			<div className="item">
				<p>My Navbar</p>
			</div>
			<a className="item" href='#/'>Total { total }</a>
			<a className="item" href='#/'>Products { totalProducts }</a>
			</div>
		</React.Fragment>
	);
}

export default Navbar;
