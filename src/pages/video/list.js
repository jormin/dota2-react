import React, { Component } from 'react';
import Video from './item.js';
class VideoList extends Component {
    render() { 
        const videoItems = this.props.videos.map((video) => <Video key={video.id} video={video} handleShowModal={this.props.handleShowModal}></Video>);
        return ( 
            <ul data-am-widget="gallery" className="am-gallery am-avg-sm-1 am-avg-md-4 am-avg-lg-4 am-gallery-default">
                {videoItems}
            </ul>
         )
    }
}
 
export default VideoList;