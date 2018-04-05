import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import logo from '../../img/logo.png';

class TopMenu extends Component {
    constructor(props) {
        super(props);
        var pathname = this.props.history.location.pathname;
        let currentMenu = '';
        switch(pathname){
            case '/':
                currentMenu = 'loadscree';
                break;
            case '/video':
                currentMenu = 'video';
                break;
            default:
                break;
        }
        this.state = { 
            currentMenu: currentMenu,
        }
    }
    handleClick = (e) => {
        this.setState({
            currentMenu: e.key,
        });
        this.props.history.push(e.item.props.path);
    }
    render() { 
        return ( 
            <div className="top-menu">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.currentMenu]}
                    mode="horizontal"
                >
                    <Menu.Item className='ant-menu-item-no-bottom'>
                        <img alt='logo' src={logo}/>
                    </Menu.Item>
                    <Menu.Item key="loadscree" path="/">
                        <Icon type="picture" />载入动画
                    </Menu.Item>
                    <Menu.Item key="video" path="/video">
                        <Icon type="youtube" />官方视频
                    </Menu.Item>
                    <Menu.Item key="record" path="/record">
                        <Icon type="clock-circle-o" />比赛录像
                    </Menu.Item>
                    <Menu.Item key="webcam" path="/webcam">
                        <Icon type="video-camera" />大神直播
                    </Menu.Item>
                    <Menu.Item className='ant-menu-item-no-bottom top-search'>
                        <HeaderSearch placeholder="搜索...">
                        </HeaderSearch>
                    </Menu.Item>
                </Menu>
            </div>
         )
    }
}
 
export default TopMenu;