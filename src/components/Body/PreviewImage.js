import React, { Component } from 'react';
import Lazyimg from 'react-lazyimg-component';
import placeholder from '../../img/loading2.gif';
class PreviewImage extends Component {
    render() { 
        return ( 
            <Lazyimg js_effect='transition.fadeIn' className="lazy" width="1024" src={this.props.loadscree.preview} placeholder={placeholder}></Lazyimg>
        )
    }
}
export default PreviewImage;