import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'mobx-react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import articleStore from './stores/ArticleStore';

//This sets up our store injections.
const stores=
{
	articleStore
	//Put more stores here!
};

ReactDOM.render
(
	<Provider {...stores}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
