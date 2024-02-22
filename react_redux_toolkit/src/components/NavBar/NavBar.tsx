"use client";
import React from 'react';

export type NavBarProps = {
	// types...
}

const NavBar: React.FC<NavBarProps>  = ({}) => {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<div className='container'>
				<a className='navbar-brand' href="/">React Redux App</a>
			</div>
		</nav>
	);
};

export default NavBar;
