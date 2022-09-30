import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index.tsx';

test('Should render button with text', () => {
  const { container, getByText } = render(<Button type="button">text</Button>);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/text/i)).toBeInTheDocument();
  expect(container).toBeInTheDocument();
});

test('Should render a button with the class of primary', () => {
  render(<Button isPrimary type="button" />);
  const primaryButton = screen.getByRole('button');
  expect(primaryButton).toHaveStyle('background-color: #1962f1; color:#fff');
});

test('Should render a button with the class of secondary', () => {
  render(<Button type="button" />);
  const primaryButton = screen.getByRole('button');
  expect(primaryButton).toHaveStyle('background-color: #fff; color: #2bc313; ');
});
