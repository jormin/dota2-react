import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Config from '../../config.json';
import bgImg from '../../img/404_bg.jpg';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
            <div className='not-found'>
                <Header history={this.history}></Header>
                <div className="body am-g">
                    <img src={bgImg} alt="404背景"/>
                </div>
                <Footer site={this.state.config.site}></Footer>
            </div>
         )
    }
}
 
export default NotFound;