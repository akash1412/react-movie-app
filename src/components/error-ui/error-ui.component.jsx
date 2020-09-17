import React from 'react';

import styled from 'styled-components';

import { ReactComponent as server } from '../../assets/server-down/undraw_server_down_s4lk.svg';

import { ReactComponent as notFound } from '../../assets/not-found/undraw_not_found_60pq.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Server = styled(server)`
  width: 50rem;
  height: 50rem;
  pointer-events: none;

  @media screen and (max-width: 75em) {
    width: 40rem;
    height: 40rem;
  }
  @media screen and (max-width: 29em) {
    width: 100%;
    height: 40rem;
  }
`;

const NotFound = styled(notFound)`
  width: 50rem;
  height: 50rem;
  pointer-events: none;

  @media screen and (max-width: 75em) {
    width: 40rem;
    height: 40rem;
  }
  @media screen and (max-width: 29em) {
    width: 100%;
    height: 40rem;
  }
`;

const ErrorUI = ({ error }) => {
  if (error === 'Network Error') {
    return (
      <Wrapper>
        <Server />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  );
};

export default ErrorUI;
