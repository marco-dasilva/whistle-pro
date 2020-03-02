import Router from 'next/router'
import React, { useEffect, ReactElement } from 'react';

export const auth = (ctx): string => {
  let token = '';

  try {
    token = localStorage.getItem('token');
    return token;
  } catch (e) {
    if (ctx.req && !token) {
      ctx.res.writeHead(302, { Location: '/login' });
      ctx.res.end();
      return;
    }

    if (!token) {
      Router.push('/login');
    }
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const withAuthSync = (WrappedComponent) => {
  const Wrapper = (props: JSX.IntrinsicAttributes): ReactElement => {
    return <WrappedComponent {...props} />;
  }


  Wrapper.getInitialProps = async (ctx): Promise<unknown> => {
    const token = auth(ctx)

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token };
  }

  return Wrapper;
}
