import styled from 'styled-components';

import { ReactComponent as menuIcon } from '../../assets/menu/icons8-menu (1).svg';

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 4;

  border-bottom-width: 1px;
  width: 100%;
  height: ${({ theme: { styleVar } }) => styleVar.navHeight};

  background-color: transparent;
  padding: 0 1.2rem;

  display: flex;
  justify-content: flex-end;
  /* align-items:flex-end; */
  align-items: center;
  @media screen and (max-width: 75em) {
    background-color: ${({ theme: { colors } }) => colors.blue['100']};
  }
`;

export const Menu = styled(menuIcon)`
  fill: ${({ theme: { colors } }) => colors.white};
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  margin-left: 2.2rem;

  display: none;

  @media screen and (max-width: 75em) {
    display: block;
  }
`;
