import styled, { css } from 'styled-components';

const flexEndStyled = css`
  justify-content: flex-end;
`;
const spaceBetweenStyled = css`
  justify-content: space-between;
`;

const renderContainerDisplayStyle = (props) => {
  if (props.currentPage === 1) {
    return flexEndStyled;
  }

  return spaceBetweenStyled;
};

export const PaginationContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;

  ${renderContainerDisplayStyle}
`;

export const PaginatonButton = styled.button`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  background-color: ${({ theme: { colors } }) => colors.blue['100']};
  color: #fff;
  padding: 1.3rem 1.8rem;
  outline: none;
  border: none;
  border-radius: 2rem;

  cursor: pointer;
`;
