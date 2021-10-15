import React from "react";
import { Layout } from "antd";
import HeaderView from "@/pages/common/Header";
import FooterView from "@/pages/common/Footer";

const { Content } = Layout;
export default class ProgramLayout extends React.Component {
    render() {
        return (
          <div>
              <Layout>
                  <HeaderView />
                  <Content>
                      {this.props.children}
                  </Content>
                  <FooterView />
              </Layout>
          </div>
        );
    }
}
