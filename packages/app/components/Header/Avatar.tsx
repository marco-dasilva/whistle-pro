import React, { ReactElement } from 'react';
import { Avatar as AAvatar } from 'antd';

const Avatar = (): ReactElement => {
  return (
    <div>
      <AAvatar style={{ backgroundColor: '#87d068' }} icon="user" />
    </div>
  );
};

export default Avatar;
