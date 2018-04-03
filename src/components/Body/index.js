import React, { Component } from 'react';
import LoadscreeList from './LoadscreeList.js';
import Loading from './Loading';
import PreviewModal from './PreviewModal.js';
class Body extends Component {
    constructor(){
        super();
        this.state = {
            visible: false,
            previewLoadscree: {}
        }
    }
    showModal = (e) => {
        this.setState({
            visible: true,
            previewLoadscree: e.props.loadscree
        });
    }
    render() {
        return ( 
            <div className="body am-g am-imglist">
                {this.props.loading ? <Loading></Loading> : <LoadscreeList loadscrees={this.props.loadscrees} onClick={this.showModal}></LoadscreeList>}
                {<PreviewModal visible={this.state.visible} loadscree={this.state.previewLoadscree}></PreviewModal>}
            </div>
        )
    }
}
 
export default Body;