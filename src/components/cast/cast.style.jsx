import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.loaded ? '1' : '0')};
  visibility: ${(props) => (props.loaded ? 'visible' : 'hidden')};
`;

export const MovieImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
  background-color: transparent;
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;
