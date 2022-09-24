import { css } from '@emotion/css';

export const styBtnPrimary = css`
  background-color: #1962f1;
  border: 1px solid rgb(209, 213, 219);
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
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  height: 46px;

  &:hover {
    background-color: #0334e2;
  }
`;

export const styPrimaryColor = css`
  background-color: #1962f1;
  width: 70px;
  height: 70px;
  &:hover {
    background-color: #0334e2;
  }
`;

export const styBtnSecondary = css`
  background-color: #fff;
  border: 1px solid #2bc313;
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
  width: 100%;
  border-radius: 5px;
  color: #50d63a;

  font-size: 15px;
  font-weight: 600;

  &:hover {
    background-color: #50d63a;
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

export const styBtnDanger = css`
  background-color: #c70821;
  border: 1px solid rgb(209, 213, 219);
  border-radius: 50%;
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none #d1d5db solid;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ff3d3d;
  }
`;

export const styBtnDelete = css`
  background-color: #DFE2E9;
  border: 1px solid rgb(209, 213, 219);
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
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  color: #ff3d3d;
  height: 46px;

  &:hover {
    color: #c70821;g
  }
`;
