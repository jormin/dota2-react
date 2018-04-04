import React, { Component } from 'react';
import Loadscree from './Loadscree.js';
class LoadscreeList extends Component {
    render() { 
        const loadscreeItems = this.props.loadscrees.map((loadscree) => <Loadscree key={loadscree.id} loadscree={loadscree} handleShowModal={this.props.handleShowModal}></Loadscree>);
        return ( 
            <ul data-am-widget="gallery" className="am-gallery am-avg-sm-1 am-avg-md-4 am-avg-lg-4 am-gallery-default">
                {loadscreeItems}
            </ul>
         )
    }
}
 
export default LoadscreeList;