import React, { ReactElement } from 'react';
import { Form, Input, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { GET_TOKEN } from '../queries/Login';

const Login = (): ReactElement => {
  let email = '';
  let password = '';

  const [getToken] = useMutation(GET_TOKEN);

  const onSubmit = (e): void => {
    e.preventDefault();

    getToken({
      variables: {
        email,
        password
      }
    }).catch((e) => {
      // TODO: Handle catch exception
    }).then((resp) => {
      if (resp) {
        localStorage.setItem('token', resp.data.login.token);
      }
    });
  }

  const handleChange = (e): void => {
    switch (e.target.id) {
      case 'email':
        email = e.target.value;
        break;
      case 'password':
        password = e.target.value;
        break;
    }
  }

  return (
    <>
      <Form name="form" onSubmit={onSubmit}>
        <Form.Item label="Email">
          <Input id="email" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Password">
          <Input.Password id="password" onChange={handleChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login
