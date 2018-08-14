import { decorate, action, observable } from "mobx"
import axios from 'axios';

class ArticleStore
{
	records=[];
	filteredRecords=[];
	filter='';
	
	constructor()
	{
		axios.get('http://localhost:3000/articles').then
		(
			(response)=>
			{
				if (response.status===200)
				{
					this.setRecords(response.data);
				}
				else
				{
					this.setRecords([]);
				}
			}
		).catch
		(
			(error)=>
			{
				console.log(error);
			}
		);
	}
	
	getRecords()
	{
		return this.records;
	}
	
	getRecord(index)
	{
		if (this.records.get(index)!==null)
		{
			return this.records[index];
		}
		return null;
	}
	
	setRecords(records)
	{
		this.records=records;
		this.applyFilter();
		return this;
	}
	
	addRecord(record)
	{
		this.records.push(record);
		return this;
	}
	
	countRecords()
	{
		return this.records.length;
	}
	
	setFilter(query)
	{
		this.filter=observable.box(query);
		this.applyFilter();
	}
	
	applyFilter()
	{
		let records=this.records.filter
		(
			(record)=>
			{
				if (this.filter==='')
				{
					return record;
				}
				if (String(record.id).indexOf(this.filter)!==-1
				|| record.title.indexOf(this.filter)!==-1
				|| record.body.indexOf(this.filter)!==-1)
				{
					return record;
				}
			}
		);
		this.filteredRecords=records;
	}
}

decorate
(
	ArticleStore,
	{
		records: observable,
		filteredRecords: observable,
		setRecords: action,
		addRecord: action,
		applyFilter: action
	}
);
  
let articleStore=new ArticleStore();
export default articleStore;