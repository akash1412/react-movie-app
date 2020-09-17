import styled from 'styled-components';

export const CardContainer = styled.div`
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 20px 40px rgba(0, 38, 81, 0.3);
  position: relative;

  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-radius: 0.8rem;
`;

export const CardImg = styled.img`
  border-radius: 0.8rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 35rem;
  width: 100%;
`;

export const Details = styled.div`
  padding: 0.8rem 0;
  text-align: center;
  color: #fff;
  background-color: ${({ theme: { colors } }) => colors.blue['100']};
`;

export const CardTitle = styled.h2`
  /* font-size: ${({ theme: { fontSizes } }) => fontSizes.f3}; */

`;

export const ImageLoadWrapper = styled.div`
  height: 35rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bdc3c7;
`;
