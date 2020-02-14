import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/react-hooks';

import { Layout as ALayout } from 'antd';
import Sider from './Sider/Index';
import Header from './Header/Index';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import client from '../util/apollo-client';

const Content = styled.div`
  padding: 24px;
  background-color: #fff;
`;

const IsErrorRoute = (): boolean => {
  const router = useRouter();

  return router.route !== '/_error';
}

const Layout = ({ children }): ReactElement => {


  return (
    <ALayout>
      {IsErrorRoute() && <Sider />}

      <ApolloProvider client={client}>
        <ALayout style={{ marginLeft: (IsErrorRoute() ? 250 : 0), height: '100vh' }}>
          <Header />
          <ALayout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Content>
              {children}
            </Content>
          </ALayout.Content>
        </ALayout>
      </ApolloProvider>
    </ALayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
