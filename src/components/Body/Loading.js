import React, { Component } from 'react';
class Loading extends Component {
    render() { 
        return ( 
            <div className="loading-wrap">
                <span><i className="am-icon-spinner am-icon-spin"></i> loading...</span>
            </div>
        )
    }
}
 
export default Loading;