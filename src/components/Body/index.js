import React, { Component } from 'react';
import LoadscreeList from './LoadscreeList.js';
import Loading from './Loading';
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loadscrees: props.loadscrees,
            loading: true
        }
    }
    render() {
        return ( 
            <div className="body am-g am-imglist">
                <LoadscreeList loadscrees={this.state.loadscrees}></LoadscreeList>
                {this.state.loading && <Loading></Loading>}
            </div>
        )
    }
}
 
export default Body;