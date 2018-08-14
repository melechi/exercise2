import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

export default class Search extends Component
{
	static defaultProps=
	{
		filter: '',
		store: null,
		onBeforeFilter: ()=>{}
	};
	
	constructor(props)
	{
		super(props);
		
		this.state={filter:''};
	}
	
	onFilterChange(event)
	{
		let value=event.target.value;
		if (this.props.onBeforeFilter(value)!==false)
		{
			this.setState({filter:value});
			this.props.store.setFilter(value);
			return true;
		}
		return false;
	}
	
	render()
	{
		return (
			<Form>
				<FormGroup>
					<Input type="text" name="filter" id="filter" placeholder="Filter..." onChange={this.onFilterChange.bind(this)} value={this.state.filter} />
				</FormGroup>
			</Form>
		);
	}
}