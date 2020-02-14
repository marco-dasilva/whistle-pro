import React, { ReactElement } from "react";
import { Layout, Row } from "antd";
import Avatar from "./Avatar";

const Header = (): ReactElement => {
  return (
    <Layout.Header style={{ background: '#fff', paddingRight: 10 }}>
      <Row type="flex" justify="end">
        <Avatar />
      </Row>
    </Layout.Header>
  )
}

export default Header;
