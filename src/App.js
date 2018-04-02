import React, { Component } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import loadscrees from './loadscrees.json';
import './App.css';

class App extends Component {
  render() {
    return (
		<div>
			<Header></Header>
			<Body loadscrees={loadscrees}></Body>
			<Footer></Footer>
		</div>
    );
  }
}

export default App;
