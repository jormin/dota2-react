import React, { Component } from 'react';
import Picture from './item.js';
class PictureList extends Component {
    render() { 
        const pictureItems = this.props.pictures.map((picture) => <Picture key={picture.id} picture={picture} handleShowModal={this.props.handleShowModal}></Picture>);
        return ( 
            <ul data-am-widget="gallery" className="am-gallery am-avg-sm-1 am-avg-md-4 am-avg-lg-4 am-gallery-default">
                {pictureItems}
            </ul>
         )
    }
}
 
export default PictureList;