import React, { Component } from 'react';
import { Button } from 'antd';
import { Player } from 'video-react';
class PreviewVideo extends Component {
    render() { 
        const prevID = this.props.prevID;
        const nextID = this.props.nextID;
        return ( 
            <div>
                <Button type="ghost" size='large' className='switch switch-left' shape="circle-outline" icon="left" onClick={()=>this.props.handleClick(this.props.prevID)} disabled={!prevID}/>
                <div className='video-preview-wrap'>
                    <Player
                        playsInline
                        autoPlay={true}
                        preload='auto'
                        poster={this.props.video.cover}
                        src={this.props.video.url}
                    />
                </div>
                <Button type="ghost" size='large' className='switch switch-right' shape="circle-outline" icon="right" onClick={()=>this.props.handleClick(this.props.nextID)} disabled={!nextID}/>
            </div>
        )
    }
}
export default PreviewVideo;