import React, { Component } from 'react';
import Lazyimg from 'react-lazyimg-component';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import placeholder from '../../img/loading2.gif';
class Loadscree extends Component {
    render() { 
        const loadscree = this.props.loadscree;
        return ( 
            <li key={loadscree.name}>
                <div className="am-gallery-item am_list_block">
                    <a href="###" className="">
                        <Lazyimg js_effect='transition.fadeIn' className="lazy am_img animated" src={loadscree.thumb} placeholder={placeholder}></Lazyimg>
                    </a>
                    <div className="am_listimg_info">
                        <span className="am-icon-heart"> {loadscree.name}</span>
                    </div>
                </div>
            </li>
         )
    }
}
 
export default Loadscree;