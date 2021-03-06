import React, { Component } from 'react';
import { Modal, Button, message, Tag } from 'antd';
import PreviewImage from './previewImage';
import PreviewVideo from './previewVideo';
import axios from 'axios';
import Config from '../../config.json';
class PreviewModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            previewItem: {},
            prevID: 0,
            nextID: 0,
        }
    }
    componentDidMount = () => {
        this.getPreviewData(this.props.id);
    }
    getPreviewData = (id) => {
        if(!id){
            message.info('没有更多数据了');
            this.props.handleHideModal();
            this.setState({
                previewItem: {},
                prevID: '',
                nextID: '',
            });
            return false;
        }
        const url = Config.apiDomain + (this.props.dataType === 'picture' ? Config.api.picture.detail : Config.api.video.detail);
        axios.get(url, {  
			params : {
				id : id
			}  
		}).then((res)=>{
			if(res.data.status === 1){
				const data = res.data.data;
				this.setState({
                    previewItem: data.item,
                    prevID: data.prevID,
                    nextID: data.nextID,
				});
			}else{
                console.error(res.data.msg);
                this.setState({
                    previewItem: {},
                    prevID: '',
                    nextID: '',
                });
			}
        }).catch((err)=>{
            console.error(err.status);
            this.setState({
                previewItem: {},
                prevID: '',
                nextID: '',
            });
        })
    }
    download = (e) => {
        if(this.props.dataType === 'picture'){
            window.open(this.state.previewItem.origin);
        }else{
            window.open(this.state.previewItem.url);
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.previewItem;
    }
    render() {
        const previewItem = this.state.previewItem;
        const downloadButton = <Button key="download" onClick={this.download} type="success">{this.props.dataType === 'picture' ? '下载原图' : '下载视频'}</Button>;
        const title = this.props.dataType === 'picture' ? previewItem.name : <div><Tag color={previewItem.official === '1' ? '#BA4429' : '#608418'}>{previewItem.tag}</Tag>{previewItem.name}</div>;
        return (
            <div>
                {this.props.visible && previewItem && 
                    <Modal
                        className="preview-modal"
                        title={title}
                        visible={this.props.visible}
                        maskClosable={false}
                        destroyOnClose={true}
                        width={1412}
                        onCancel={this.props.handleHideModal()}
                        footer={[downloadButton]}
                    >
                        {this.props.dataType === 'picture' && this.state.previewItem.id && <PreviewImage picture={previewItem} handleClick={this.getPreviewData} prevID={this.state.prevID} nextID={this.state.nextID}></PreviewImage>}
                        {this.props.dataType === 'video' && this.state.previewItem.id && <PreviewVideo video={previewItem} handleClick={this.getPreviewData} prevID={this.state.prevID} nextID={this.state.nextID}></PreviewVideo>}
                    </Modal> 
                }
            </div>
        );
    }
}
 
export default PreviewModal;