import React, { Component } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import Nav from '../components/Nav';
import { observer, inject } from "mobx-react";
import Search from '../components/Search';

class ArticlesPage extends Component
{
	constructor(props)
	{
		super(props);
		this.state={filter:''};
	}
	
	onBeforeFilter(value)
	{
		return /^[a-z0-9_\- ]*$/i.test(value);
	}
	
	render()
	{
		let records=this.props.articleStore.filteredRecords;
		
		let rows=records.map
		(
			(record)=>
			{
				return (
					<tr key={record.id}>
						<th scope="row">{record.id}</th>
						<td>{record.title}</td>
						<td>{record.body}</td>
						<td>{record.published?'Yes':'No'}</td>
					</tr>
				);
			}
		);
		
		return (
			<Container>
				<Row>
					<Col><h1>Exercise 2</h1></Col>
				</Row>
				<Row>
					<Col md="3"><Nav /></Col>
					<Col md="9">
					<div>
						<Search store={this.props.articleStore} onBeforeFilter={this.onBeforeFilter.bind(this)} />
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Title</th>
									<th>Body</th>
									<th>Published</th>
								</tr>
							</thead>
							<tbody>
								{rows}
							</tbody>
						</Table>
					</div>
					</Col>
				</Row>
			</Container>
			
		);
	}
}

export default inject('articleStore')(observer(ArticlesPage));