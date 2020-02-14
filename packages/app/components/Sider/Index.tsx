import React, { ReactElement } from "react";
import { Layout } from 'antd';
import Menu from './Menu';
import Logo from "./Logo";

const SiderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
} as React.CSSProperties;

const Sider = (): ReactElement => {
  return (
    <Layout.Sider theme="dark" width={250} style={SiderStyle}>
      <Logo />
      <Menu />
    </Layout.Sider>
  );
}

export default Sider;
