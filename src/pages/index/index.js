import React, { Component } from 'react'
import axios from 'axios';
import Header from '../../components/header';
import Content from './content';
import Footer from '../../components/footer';
import Config from '../../config.json';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			loading: true,
			pictures: [],
			config: {
				site: {}
			}
        }
    }
	getSiteConfig(){
        axios.get(Config.apiDomain+Config.api.config.site).then((res)=>{
			if(res.data.status === 1){
				const data = res.data.data;
				this.setState({
					config: {
						site: data
					}
				});
				document.title = data.appName;
			}
        })
	}
	componentDidMount () {
		this.getSiteConfig();
    }
  	render() {
    	return (
			<div>
				<Header history={this.history}></Header>
				<Content></Content>
				<Footer site={this.state.config.site}></Footer>
			</div>
    	);
  	}
}
 
export default Index;