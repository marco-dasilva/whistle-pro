import React, { ReactElement } from "react";
import Head from 'next/head';
import { Layout, Row } from "antd";
import Avatar from "./Avatar";

const Header = (): ReactElement => {
  return (
    <Layout.Header style={{ background: '#fff', paddingRight: 10 }}>
      <Head>
        <title>Whistle Pro</title>
      </Head>
      <Row type="flex" justify="end">
        <Avatar />
      </Row>
    </Layout.Header>
  )
}

export default Header;
