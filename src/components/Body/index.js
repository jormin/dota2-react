import React, { Component } from 'react';
import Loading from './loading';
import PictureList from '../../pages/picture/list';
import VideoList from '../../pages/video/list';
import PreviewModal from './previewModal.js';

class Body extends Component {
    static previewItem = {
        previewItem: {
            name: '预览',
            preview: ''
        }
    }
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            previewItem: {}
        }
    }
    handleShowModal = (e) => {
        this.setState({
            visible: true,
            previewItem: this.props.dataType === 'picture' ? e.props.picture : e.props.video
        });
    }
    handleHideModal = (e) => {
        this.setState({
            visible: false,
            previewItem: {}
        });
    }
    
    render() {
        return ( 
            <div className="body am-g am-imglist">
                {this.props.dataType === 'picture' ? <PictureList pictures={this.props.list} handleShowModal={this.handleShowModal}></PictureList> : <VideoList videos={this.props.list} handleShowModal={this.handleShowModal}></VideoList>}
                {this.props.loading && <Loading></Loading>}
                {this.state.visible && <PreviewModal visible={this.state.visible} id={this.state.previewItem.id} dataType={this.props.dataType} handleHideModal={()=>this.handleHideModal}></PreviewModal>}
            </div>
        )
    }
}
 
export default Body;