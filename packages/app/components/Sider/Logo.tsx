import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Element = styled.div`
  height: 38px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

const Logo = (): ReactElement => {
  return (
    <Element />
  );
};

export default Logo;
