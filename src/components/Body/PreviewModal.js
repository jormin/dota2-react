import React, { Component } from 'react';
import { Modal } from 'antd';
import { Button } from 'antd';
import PreviewImage from './PreviewImage';
class PreviewModal extends Component {
    static defaultProps = {
        loadscree: {
            name: '预览',
            preview: ''
        }
      }
    constructor(props){
        super(props);
        this.state = {
            visible: props.visible,
            loadscree: props.loadscree
        }
    }
    componentWillReceiveProps (props){
        this.setState({
            visible: props.visible,
            loadscree: props.loadscree
        });
    }
    hideModal = () => {
        this.setState({
          visible: false,
          loadscree: {}
        });
    }
    download = (e) => {
        console.log('开始下载');
    }
    render() {
        return (
            <div>
                <Modal
                    title={this.state.loadscree.name}
                    visible={this.state.visible}
                    width={1072}
                    onCancel={this.hideModal}
                    footer={[
                        <Button key="download" onClick={this.download} type="success">下载原图</Button>,
                      ]
                    }
                >
                    {this.state.loadscree.preview && <PreviewImage loadscree={this.state.loadscree}></PreviewImage>}
                </Modal>
            </div>
        );
    }
}
 
export default PreviewModal;