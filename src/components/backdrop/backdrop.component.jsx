import React from 'react';

import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { toggleSidebar } from '../../redux/toggle/toggleAction';

const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 5;
  height: 100%;
  width: 100%;

  cursor: pointer;

  @media screen and (min-width: 75em) {
    display: none;
  }
`;

const Backdrop = () => {
  const dispatch = useDispatch();

  return (
    <BackDrop className="backdrop" onClick={() => dispatch(toggleSidebar())}>
      {'\u00A0'}
    </BackDrop>
  );
};

export default Backdrop;
