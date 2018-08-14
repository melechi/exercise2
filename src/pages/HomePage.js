import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Nav from '../components/Nav';

export default class HomePage extends Component
{
	render()
	{
		return (
			<Container>
				<Row>
					<Col><h1>Exercise 2</h1></Col>
				</Row>
				<Row>
					<Col md="3"><Nav /></Col>
					<Col md="9">Welcome - Navigate on the left!</Col>
				</Row>
			</Container>
		);
	}
}