import { css } from '@emotion/css';

export const styBtnPrimary = css`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #836d4f;
    color: #fff;
  }
`;

export const styBtnIcon = css`
  background-color: #ffffff;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 50%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  text-decoration: none #d1d5db solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: rgb(249, 250, 251);
  }
`;
