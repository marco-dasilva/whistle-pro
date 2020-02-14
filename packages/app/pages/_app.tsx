import 'antd/dist/antd.min.css';

import App from 'next/app';
import React, { ReactElement } from 'react';
import Layout from '../components/Layout';

class MyApp extends App {
  render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
