import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Header from './component/Header';
import Container from './component/Container';
import Footer from './component/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Container />, document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
