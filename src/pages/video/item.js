import React, { Component } from 'react';
import Lazyimg from 'react-lazyimg-component';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
import { Icon, Tag } from 'antd';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import placeholder from '../../img/loading2.gif';
class Video extends Component {
    constructor(){
        super();
        this.state = {
            hover: false
        }
        this.handleMouseOverCover = this.handleMouseOverCover.bind(this);
        this.handleMouseOutCover = this.handleMouseOutCover.bind(this);
    }
    handleMouseOverCover(e){
        this.setState({
            hover: true
        })
    }
    handleMouseOutCover(e){
        this.setState({
            hover: false
        })
    }
    render() { 
        const video = this.props.video;
        return ( 
            <li key={video.id}>
                <div className="video-item am-gallery-item am_list_block" onMouseEnter={this.handleMouseOverCover} onMouseLeave={this.handleMouseOutCover} onClick={() => this.props.handleShowModal(this)}>
                    <div className="video-cover" onClick={this.showModal}>
                        <Tag color="#BA4429" className='video-tag'>官方</Tag>
                        <Lazyimg js_effect='transition.fadeIn' className="lazy am_img animated" src={video.cover} placeholder={placeholder}></Lazyimg>
                        <div className='video-duration'>
                            <span>{video.duration}</span>
                        </div>
                        {this.state.hover && 
                            <div className='video-play'>
                                <span className='video-play-icon'><Icon type='play-circle-o'/></span>
                            </div>
                        }
                    </div>
                    <div className="am_listimg_info">
                        <Ellipsis lines={1} tooltip><Icon type="heart"/> {video.name}</Ellipsis>
                    </div>
                </div>
            </li>
         )
    }
}
 
export default Video;