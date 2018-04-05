import React, { Component } from 'react';
import PreviewModal from '../../components/previewModal/previewModal.js';
import indexImg from '../../img/index.png';

class Content extends Component {
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
            previewItem: e.props.video
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
            <div className="body am-g">
                <div>
                    <img src={indexImg} alt='index' className='index-img'/>
                </div>
                {this.state.visible && <PreviewModal visible={this.state.visible} id={this.state.previewItem.id} dataType='video' handleHideModal={()=>this.handleHideModal}></PreviewModal>}
            </div>
        )
    }
}
 
export default Content;