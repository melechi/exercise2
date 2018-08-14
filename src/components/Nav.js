import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NAv extends Component
{
	render()
	{
		return (
			<Nav vertical>
				<NavItem>
					<Link className="nav-link" to="/">Home</Link>
				</NavItem>
				<NavItem>
					<Link className="nav-link" to="/articles">Articles</Link>
				</NavItem>
			</Nav>
		);
	}
}