import styled, { css } from "styled-components";

export const baseStyles = css``;

// export const buttonStyle1 = css`
//   background-color: red;
// `;

// const styleConditionally = (props) => {
//   if (props.active) {
//     return buttonStyle1;
//   }
// };

export const Button = styled.button`
  display: block;
  width: 8rem;
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  /* text-transform: uppercase; */
  font-family: "Nunito";
  letter-spacing: 0.1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  color: #192a56;
  background-color: #f7f1e3;
  border: 2px solid #192a56;

  outline: none;
  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
