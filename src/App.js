import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import './js/app.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			loading: true,
			loadscrees: [],
			page: 1,
			totalPages: 1,
			total: 0,
        }
    }
	get(){
		const domain = 'https://api.dota2.lerzen.com';
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
        }).catch((err)=>{
			this.setState({
				loading: false,
			});
            console.error(err.status);
        })
	}
	componentDidMount () {
		this.state.loading && this.get();
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(event) {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if(document.documentElement.scrollHeight === document.documentElement.clientHeight + scrollTop ) {
			this.setState({
				loading: true,
			});
            this.get();
        }  
    }
  	render() {
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
