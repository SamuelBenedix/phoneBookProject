import { css } from '@emotion/css';

export const styContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #fff;
  height: 45px;
  border-radius: 5px;
  border: 2.2px solid #000;
`;

export const styInputBar = css`
  background: transparent;
  flex: 1;
  border: 0;
  outline: none;
  font-size: 15px;

  ::placeholder {
    color: #808080;
  }
`;

export const styBtnBar = css`
  border: 0;
  cursor: pointer;
  background: transparent;
`;
