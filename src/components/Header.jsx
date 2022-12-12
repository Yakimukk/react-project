import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => (
	<header>
		<nav className="navbar navbar-dark navbar-expand-lg">
			<div className="navbar-brand">POST SITE</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink className="nav-link" to="/">
						Home
					</NavLink>
				</li>
			</ul>
		</nav>
	</header>
);
