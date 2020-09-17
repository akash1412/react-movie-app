import styled from 'styled-components';

export const OverviewContainer = styled.div`
  display: grid;
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 75em) {
    grid-column-gap: 3rem;
    grid-column-gap: 4rem;
  }
`;
