import styled, { css } from 'styled-components';

import { ReactComponent as logo } from '../../assets/logo/undraw_movie_night_fldd.svg';

import { ReactComponent as disc } from '../../assets/disc/compact-disc-solid (1).svg';

import { Link } from 'react-router-dom';

const openSidebarStyles = css`
  transform: translateX(0);
`;
const closeSidebarStyles = css`
  transform: translateX(-100%);
`;

const styleConditionally = ({ toggle }) => {
  if (toggle) {
    return openSidebarStyles;
  }

  return closeSidebarStyles;
};

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 26rem;

  height: 100vh;
  background-color: #ecf0f1;

  overflow-y: scroll;

  @media screen and (max-width: 75em) {
    position: fixed;

    z-index: 6;

    transition: transform 0.3s;
    ${styleConditionally};
  }
`;

export const Logo = styled(logo)`
  height: 23rem;
  width: 100%;
  padding: 0 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme: { colors } }) => colors.blue['150']};
  padding: 0 0.5rem;
  text-transform: uppercase;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0.8rem 0 0.8rem 0;
`;

export const ListItem = styled.li`
  width: 90%;
  padding: 0.6rem;
  border: 2px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  overflow-x: hidden;
  font-weight: 550;
  margin-left: 1.2rem;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &:hover {
    border: 2px solid #2c3e50;
  }

  background-color: ${(props) =>
    props.active === props.listName ? '#2c3e50' : ''};

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
`;

export const RouteLink = styled(Link)`
  height: 100%;
  width: 100%;

  font-size: 1.4rem;
  margin-left: 1.45rem;
  text-decoration: none;
  transition: 0.2s;

  &:link,
  &:visited,
  &:active {
    color: ${(props) => (props.active === props.listName ? '#fff' : '#2c3e50')};
  }
`;

export const GenreLogo = styled(disc)`
  width: 2rem;
  height: 2rem;
  color: ${(props) => (props.active === props.listName ? '#fff' : '#2c3e50')};
`;
