import React, { ReactElement, } from 'react';
import { Menu as AMenu, Icon } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const GetSelectedKeys = (): string[] => {
  const currentRoute = useRouter().pathname;

  switch (currentRoute) {
    case '/players':
      return ['2'];
    case '/teams':
      return ['3'];
    default:
      return ['1'];
  }
}

const Menu = (): ReactElement => {
  return (
    <AMenu theme="dark" mode="inline" selectedKeys={GetSelectedKeys()}>
      <AMenu.Item key="1">
        <Link href="/">
          <a>
            <Icon type="dashboard" />
            <span className="nav-text">Dashboard</span>
          </a>
        </Link>
      </AMenu.Item>
      <AMenu.Item key="2">
        <Link href="/players">
          <a>
            <Icon type="user" />
            <span className="nav-text">Players</span>
          </a>
        </Link>
      </AMenu.Item>
      <AMenu.Item key="3">
        <Link href="/teams">
          <a>
            <Icon type="team" />
            <span className="nav-text">Teams</span>
          </a>
        </Link>
      </AMenu.Item>
    </AMenu>
  )
};

export default Menu;
