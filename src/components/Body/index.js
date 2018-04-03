import React, { Component } from 'react';
import LoadscreeList from './LoadscreeList.js';
import Loading from './Loading';
class Body extends Component {
    render() {
        return ( 
            <div className="body am-g am-imglist">
                {this.props.loading ? <Loading></Loading> : <LoadscreeList loadscrees={this.props.loadscrees}></LoadscreeList>}
            </div>
        )
    }
}
 
export default Body;