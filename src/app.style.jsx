import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Layout = styled.div`
  /* display: flex;
  position: relative; */
`;

export const Main = styled.div`
  margin-top: 6rem;
  padding: 1.5rem 1.5rem 3rem 1.5rem;
  flex-grow: 1;

  min-height: calc(100vh - 6rem);

  position: relative;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 75em) {
    background-color: #f5f6fa;
  }
`;
