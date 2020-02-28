import React, { ReactElement } from 'react';
import { Form, Input, Button, Typography } from 'antd';

const Create = (): ReactElement => {

  const onSubmit = (e): void => {
    e.preventDefault();
  };

  return (
    <Form name="form" onSubmit={onSubmit}>
      <Typography.Title level={3}>Create Team</Typography.Title>
      <Form.Item label="Name">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Create;
