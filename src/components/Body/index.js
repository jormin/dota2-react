import React, { Component } from 'react';
import LoadscreeList from './LoadscreeList.js';
import Loading from './Loading';
import PreviewModal from './PreviewModal.js';
class Body extends Component {
    static previewLoadscree = {
        loadscree: {
            name: '预览',
            preview: ''
        }
    }
    constructor(){
        super();
        this.state = {
            visible: false,
            previewLoadscree: {}
        }
    }
    handleShowModal = (e) => {
        this.setState({
            visible: true,
            previewLoadscree: e.props.loadscree
        });
    }
    handleHideModal = (e) => {
        this.setState({
            visible: false,
            previewLoadscree: {}
        });
    }
    
    render() {
        return ( 
            <div className="body am-g am-imglist">
                <LoadscreeList loadscrees={this.props.loadscrees} handleShowModal={this.handleShowModal}></LoadscreeList>
                {this.props.loading && <Loading></Loading>}
                {<PreviewModal visible={this.state.visible} loadscree={this.state.previewLoadscree} handleHideModal={()=>this.handleHideModal}></PreviewModal>}
            </div>
        )
    }
}
 
export default Body;