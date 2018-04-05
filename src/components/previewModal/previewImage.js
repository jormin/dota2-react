import React, { Component } from 'react';
import { Button } from 'antd';
import Lazyimg from 'react-lazyimg-component';
import placeholder from '../../img/loading3.gif';
class PreviewImage extends Component {
    render() { 
        const prevID = this.props.prevID;
        const nextID = this.props.nextID;
        return ( 
            <div>
                <Button type="ghost" size='large' className='switch switch-left' shape="circle-outline" icon="left" onClick={()=>this.props.handleClick(this.props.prevID)} disabled={!prevID}/>
                <Lazyimg js_effect='transition.fadeIn' className="lazy preview-image" width="1024" src={this.props.picture.preview} placeholder={placeholder}></Lazyimg>
                <Button type="ghost" size='large' className='switch switch-right' shape="circle-outline" icon="right" onClick={()=>this.props.handleClick(this.props.nextID)} disabled={!nextID}/>
            </div>
        )
    }
}
export default PreviewImage;