import React, { Component } from 'react';
import TopMenu from './TopMenu';
import {withRouter} from "react-router-dom";
class Header extends Component {
    render() { 
        return ( 
            <TopMenu history={this.props.history}></TopMenu>
        )
    }
}
 
export default withRouter(Header);