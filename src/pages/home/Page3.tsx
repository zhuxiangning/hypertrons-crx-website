import React from 'react';
import { Row, Col, Card} from 'antd';

const { Meta } = Card;

class Page3 extends React.PureComponent {
    onClickBook = (key: any) => {
        switch (key) {
            case 1:
                window.location.href = `http://gitcourse.kfcoding.com/#https://code.kfcoding.com/kfk12/itcourse.git`;
                break;
            case 2:
                window.location.href = ``;
                break;
            case 3:
                window.location.href = `http://gitcourse.kfcoding.com/#https://code.kfcoding.com/gitcourse-courses/PythonCourse.git`;
                break;
            default:
                break;
        }
    };

    render() {
        return (
          <div className="home-page-wrapper page1">
              <div className="indexPage">
                  <span
                    style={{
                        fontFamily: 'PingFangSC-Medium',
                        fontSize: '34px',
                        color: 'black',
                        lineHeight: '34px',
                    }}
                  >
                      <p
                        style={{
                            marginTop:'70px',
                            textAlign: 'center',
                        }}
                      >
                          我们的 课程体系
                      </p>
                      <p
                        style={{
                            marginTop: '16px',
                            marginLeft: '47.2%',
                            marginBottom: '60px',
                            background: '#F46E09',
                            borderRadius: '100px',
                            height: '4px',
                            width: '66px',
                        }}
                      >
                          {' '}
                      </p>
                  </span>
              </div>
              <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                  <Row gutter={[{ xs: 24, sm: 32, md: 40, lg: 48 }, 20]}>
                      <Col className="gutter-row" span={8}>
                          <div className="gutter-box" onClick={() => this.onClickBook(1)}>
                              <Card
                                cover={
                                    <img
                                      style={{ width: '100%', height: 218.86 }}
                                      alt="example"
                                      src="https://kfcoding-static.oss-cn-hangzhou.aliyuncs.com/kfcoding-book-cover/image%20%281%29.png"
                                    />
                                }
                                hoverable={true}
                              >
                                  <Meta title={"信息技术-数据与计算"} style={{ textAlign: 'center' }}>

                                  </Meta>
                              </Card>
                          </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                          <div className="gutter-box">
                              <Card
                                cover={
                                    <img
                                      style={{ width: '100%', height: 218.86 }}
                                      alt="example"
                                      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571244373817&di=782319c437ea9c0a98b7cc22c3db7b8d&imgtype=0&src=http%3A%2F%2Fimg.dingdangpai.com%2Fupload%2Fimages%2Factivities%2F2016%2F10%2F26%2F1028499727g05ychgc.png%40%2521common-pic-middle"
                                    />
                                }
                                hoverable={true}
                              >
                                  <Meta title={"Scratch编程"} style={{ textAlign: 'center' }}>

                                  </Meta>
                              </Card>
                          </div>
                      </Col>
                      <Col className="gutter-row" span={8}>
                          <div className="gutter-box" onClick={() => this.onClickBook(3)}>
                              <Card
                                cover={
                                    <img
                                      style={{ width: '100%', height: 218.86 }}
                                      alt="example"
                                      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571244453224&di=982b6709dbe49ee9167233a601f998d4&imgtype=0&src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-01ccf668c28612a3a6cb0b97f2514ef0_1200x500.jpg"
                                    />
                                }
                                hoverable={true}
                              >
                                  <Meta title={"Python编程"} style={{ textAlign: 'center' }}>

                                  </Meta>
                              </Card>
                          </div>
                      </Col>
                  </Row>
              </div>
          </div>
        );
    }
}

export default Page3;
