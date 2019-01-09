import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Header from './component/Header';
import Main from './component/Main';
import SideBar from './component/SideBar';
import About from './component/About';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Main />, document.getElementById('main'));
ReactDOM.render(<SideBar />, document.getElementById('sidebar'));
ReactDOM.render(<About />, document.getElementById('about'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
