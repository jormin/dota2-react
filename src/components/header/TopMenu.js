import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import logo from '../../img/logo.png';

class TopMenu extends Component {
    constructor(props) {
        super(props);
        var pathname = this.props.history.location.pathname;
        let currentMenu = '';
        switch(pathname){
            case '/picture':
                currentMenu = 'picture';
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
        const path = e.item.props.path;
        if(path){
            this.setState({
                currentMenu: e.key,
            });
            this.props.history.push(e.item.props.path);
        }else{
            window.open(e.item.props.link);
        }
    }
    render() { 
        return ( 
            <div className="top-menu">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.currentMenu]}
                    mode="horizontal"
                >
                    <Menu.Item className='ant-menu-item-no-bottom' path="/">
                        <img alt='logo' src={logo}/>
                    </Menu.Item>
                    <Menu.Item key="picture" path="/picture">
                        <Icon type="picture" />载入动画
                    </Menu.Item>
                    <Menu.Item key="video" path="/video">
                        <Icon type="youtube" />官方视频
                    </Menu.Item>
                    <Menu.Item key="record" path="" link="http://act.dota2.com.cn/match/list">
                        <Icon type="clock-circle-o" />赛事中心
                    </Menu.Item>
                    <Menu.Item key="star" path="/star">
                        <Icon type="video-camera" />大神直播
                    </Menu.Item>
                </Menu>
            </div>
         )
    }
}
 
export default TopMenu;