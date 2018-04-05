import React, { Component } from 'react';
import Lazyimg from 'react-lazyimg-component';
import Ellipsis from 'ant-design-pro/lib/Ellipsis';
import { Icon } from 'antd';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import placeholder from '../../img/loading3.gif';
class Picture extends Component {
    render() { 
        const picture = this.props.picture;
        return ( 
            <li key={picture.id}>
                <div className="am-gallery-item am_list_block" onClick={() => this.props.handleShowModal(this)}>
                    <div className="" onClick={this.showModal}>
                        <Lazyimg js_effect='transition.fadeIn' className="lazy am_img animated" src={picture.thumb} placeholder={placeholder}></Lazyimg>
                    </div>
                    <div className="am_listimg_info">
                        <Ellipsis className='am-footer am-footer-left' lines={1} tooltip>{picture.name}</Ellipsis>
                        <div className='am-footer am-footer-right'>
                            <span><Icon type="clock-circle"/> {picture.viewAmount}</span>
                        </div>
                    </div>
                </div>
            </li>
         )
    }
}
 
export default Picture;