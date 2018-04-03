import React, { Component } from 'react';
class Footer extends Component {
    render() {
        var date=new Date();
        var year=date.getFullYear();  
        return ( 
            <footer className="am_footer">
                <div className="am_info_line">
                    ©&nbsp;{year}&nbsp;-&nbsp;DotA2 小站&nbsp;-&nbsp;
                    <a target="_blank" rel="nofollow me noopener noreferrer" href="http://www.miitbeian.gov.cn/" className="external beian">京ICP备15006639号</a>
                </div>
            </footer>
        )
    }
}
 
export default Footer;