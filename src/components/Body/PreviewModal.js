import React, { Component } from 'react';
import { Modal } from 'antd';
import { Button } from 'antd';
import PreviewImage from './PreviewImage';
class PreviewModal extends Component {
    download = (e) => {
        window.open(this.state.loadscree.origin);
    }
    render() {
        return (
            <div>
                <Modal
                    title={this.props.loadscree.name}
                    visible={this.props.visible}
                    width={1072}
                    onCancel={this.props.handleHideModal()}
                    footer={[
                        <Button key="download" onClick={this.download} type="success">下载原图</Button>,
                      ]
                    }
                >
                    {this.props.loadscree.preview && <PreviewImage loadscree={this.props.loadscree}></PreviewImage>}
                </Modal>
            </div>
        );
    }
}
 
export default PreviewModal;