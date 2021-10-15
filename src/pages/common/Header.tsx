import React from "react";
import { Layout, Icon, Menu } from "antd";
import router from 'umi/router';

const { Header } = Layout;
// const { SubMenu } = Menu;
class HeaderView extends React.Component {
    state = {
        current: 'home',
    };
    // private path: string | undefined;

    handleMenuClick = (event: any) => {
        console.log('click ', event);
        this.setState({
            current: event.key,
        });
        // this.path = "";
        // for (let i = event.keyPath.length-1; i >= 0; --i)
        //     this.path += `/${event.keyPath[i]}`;
        // router.push(this.path);
       if (event.key === "home") {
         router.push("");
       } else {
         window.open("https://github.com/hypertrons/hypertrons-crx");
       }
    };

    render() {
        return (
          <Header style={{ backgroundColor: "#FFF", width: "100%" }}>
              <Menu
                mode="horizontal"
                onClick={this.handleMenuClick}
                selectedKeys={[this.state.current]}
                defaultSelectedKeys={["home"]}
                style={{ lineHeight: "65px", background:"#FFF"}}
              >
                  <Menu.Item key="home" >
                      <Icon type="home" />Hypercrx Home
                  </Menu.Item>
                  <Menu.Item key="github" >
                    <Icon type="github" />GitHub Repo
                  </Menu.Item>
                  {/*<a href={"https://github.com/hypertrons/hypertrons-crx"}>GitHub repo</a>*/}
                  {/*<SubMenu*/}
                  {/*  key="program"*/}
                  {/*  title={*/}
                  {/*      <span className="submenu-title-wrapper">*/}
                  {/*          <Icon type="code" />编程环境*/}
                  {/*      </span>*/}
                  {/*  }*/}
                  {/*>*/}
                  {/*    <Menu.Item key="scratch">Scratch</Menu.Item>*/}
                  {/*    <Menu.Item key="microBit">MicroBit</Menu.Item>*/}
                  {/*</SubMenu>*/}
                  {/*<Menu.Item key="book">*/}
                  {/*    <Icon type="book" />课程*/}
                  {/*</Menu.Item>*/}
                  {/*<Menu.Item key="project">*/}
                  {/*    <Icon type="project" />项目分享*/}
                  {/*</Menu.Item>*/}
                  {/*<Menu.Item key="phone">*/}
                  {/*    /!*<Icon type="phone" />*!/*/}
                  {/*    <a href={"https://github.com/hypertrons/hypertrons-crx"}>联系我们</a>*/}
                  {/*</Menu.Item>*/}
              </Menu>
          </Header>
        );
    }
}

export default HeaderView;
