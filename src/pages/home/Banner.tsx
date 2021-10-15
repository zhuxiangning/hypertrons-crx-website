/* eslint-disable linebreak-style */
import React from 'react';
const bannerImg = 'https://hypertrons.oss-cn-shanghai.aliyuncs.com/hypertrons-crx-logo.jpg';

class Banner extends React.PureComponent {
    render() {
        return (
          <div className="home-page-wrapper banner-wrapper" id="banner" style={{textAlign: "center"}} >
              <img style={{
                  width: '20%',
                  height: '20%',
                  marginTop: '100px',
              }}
                   src={bannerImg} alt="" />
              <p
              style={{
                  marginTop: '5%',
                  fontFamily: 'PingFangSC-Medium',
                  fontSize: '80px',
                  color: 'black',
                  lineHeight: '80px',
                  textAlign: 'center',
              }}
              >Hypercrx</p>
              <p
                  style={{
                      marginTop: '5%',
                      fontFamily: 'PingFangSC-Medium',
                      fontSize: '30px',
                      color: 'black',
                      lineHeight: '100px',
                      textAlign: 'center',
                  }}
              >Tracking, mining and insight into open source projects and developer relationships.</p>
          </div>
        );
    }
}

export default Banner;
