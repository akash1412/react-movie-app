import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #2c3e50;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
`;
const Subtitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.blue['100']};
  font-size: 1.5rem;
  padding-top: 1.2rem;
`;

const Heading = ({ title }) => {
  return <Title>{title}</Title>;
};

export default Heading;
