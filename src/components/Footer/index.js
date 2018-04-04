import React, { Component } from 'react';
class Footer extends Component {
    render() {
        var date=new Date();
        var year=date.getFullYear();
        var site = this.props.site;
        return ( 
            <footer className="am_footer">
                <div className="am_info_line">
                    ©&nbsp;{year}&nbsp;-&nbsp;{site.appName}&nbsp;-&nbsp;
                    <a target="_blank" rel="nofollow me noopener noreferrer" href="http://www.miitbeian.gov.cn/" className="external beian">{site.ICP}</a>
                </div>
            </footer>
        )
    }
}
 
export default Footer;