import React, { Component } from 'react';
import { Modal, Button, message } from 'antd';
import PreviewImage from './PreviewImage';
import axios from 'axios';
import Config from '../../config.json';
class PreviewModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            loadscree: {},
            prevID: 0,
            nextID: 0,
        }
        this.getPreviewData(props.id);
    }
    componentDidMount = () => {
        this.getPreviewData(this.props.id);
    }
    getPreviewData = (id) => {
        if(!id){
            message.info('没有更多数据了');
            this.props.handleHideModal();
            this.setState({
                loadscree: {},
                prevID: '',
                nextID: '',
            });
            return false;
        }
        axios.get(Config.apiDomain+Config.api.loadscree.detail, {  
			params : {
				id : id
			}  
		}).then((res)=>{
			if(res.data.status === 1){
				const data = res.data.data;
				this.setState({
                    loadscree: data.loadScree,
                    prevID: data.prevID,
                    nextID: data.nextID,
				});
			}else{
                console.error(res.data.msg);
                this.setState({
                    loadscree: {},
                    prevID: '',
                    nextID: '',
                });
			}
        }).catch((err)=>{
            console.error(err.status);
            this.setState({
                loadscree: {},
                prevID: '',
                nextID: '',
            });
        })
    }
    download = (e) => {
        window.open(this.state.loadscree.origin);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.loadscree;
    }
    render() {
        return (
            <div>
                {this.props.visible && this.state.loadscree && 
                    <Modal
                        className="preview-modal"
                        title={this.state.loadscree.name}
                        visible={this.props.visible}
                        width={1172}
                        onCancel={this.props.handleHideModal()}
                        footer={[
                                <Button key="download" onClick={this.download} type="success">下载原图</Button>,
                            ]
                        }
                    >
                        {this.state.loadscree.preview && <PreviewImage loadscree={this.state.loadscree} handleClick={this.getPreviewData} prevID={this.state.prevID} nextID={this.state.nextID}></PreviewImage>}
                    </Modal> 
                }
            </div>
        );
    }
}
 
export default PreviewModal;