import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';
import Config from '../../config.json';

class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			loading: true,
			pictures: [],
			page: 1,
			totalPages: 1,
			total: 0,
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
	getPictures(){
        axios.get(Config.apiDomain+Config.api.picture.index, {  
			params : {
				page : this.state.page
			}  
		}).then((res)=>{
			if(res.data.status === 1){
				const pictures = this.state.pictures;
				const data = res.data.data;
				this.setState({
					pictures: pictures.concat(data.list),
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
		this.getSiteConfig();
		this.state.loading && this.getPictures();
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
            this.getPictures();
        }  
    }
  	render() {
    	return (
			<div>
				<Header history={this.history}></Header>
				<Body list={this.state.pictures} loading={this.state.loading} dataType='picture'></Body>
				<Footer site={this.state.config.site}></Footer>
			</div>
    	);
  	}
}

export default Picture;
