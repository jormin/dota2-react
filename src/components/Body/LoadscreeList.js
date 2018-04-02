import React, { Component } from 'react';
import Loadscree from './Loadscree.js';
class LoadscreeList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadscrees: props.loadscrees
        }
    }
    render() { 
        const loadscreeItems = this.state.loadscrees.map((loadscree) => <Loadscree loadscree={loadscree} key={loadscree.name}></Loadscree>);
        return ( 
            <ul data-am-widget="gallery" className="am-gallery am-avg-sm-1 am-avg-md-4 am-avg-lg-4 am-gallery-default">
                {loadscreeItems}
            </ul>
         )
    }
}
 
export default LoadscreeList;