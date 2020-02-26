import 'antd/dist/antd.min.css';

import App, { AppInitialProps } from 'next/app';
import React, { ReactElement } from 'react';
import Layout from '../components/Layout';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }): Promise<AppInitialProps> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

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
