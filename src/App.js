import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			loading: true,
			loadscrees: [],
			page: 0,
			totalPages: 1,
			total: 0,
        }
    }
	get(){
		const domain = 'api';
        axios.get(domain+'/load-scree/index.html?page='+this.state.page).then((res)=>{
			if(res.data.status === 1){
				const loadscrees = this.state.loadscrees;
				const data = res.data.data;
				this.setState({
					loadscrees: loadscrees.concat(data.loadScrees),
					loading: false,
					page: (this.state.page+1),
					totalPages: data.totalPages,
					total: data.total,
				});
			}else{
				this.setState({
					loading: false,
				});
			}
            console.log(res.data);
        }).catch((err)=>{
			this.setState({
				loading: false,
			});
            console.error(err.status);
        })
	}
	componentDidMount () {
		this.state.loading && this.get();
	}
  	render() {
        console.log('App:');
        console.log(this.state);
    	return (
			<div>
				<Header></Header>
				<Body loadscrees={this.state.loadscrees} loading={this.state.loading}></Body>
				<Footer></Footer>
			</div>
    	);
  	}
}

export default App;
