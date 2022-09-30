import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './index.tsx';

test('Should render placeholder', () => {
  const label = 'First Name';
  render(<Input label={label} />);
  const inputComponent = screen.getByPlaceholderText(/first name/i);

  expect(inputComponent).toBeInTheDocument();
});

test('Should input data', () => {
  const label = 'First Name';
  render(<Input label={label} />);

  const inputComponent = screen.getByPlaceholderText(/first name/i);
  expect(inputComponent.value).toBe('');
});

// test('Should render error message', () => {
//   const label = 'First Name';
//   const testValue = 'Samuel';
//   render(<Input label={label} />);

//   const inputComponent = screen.getByPlaceholderText(/first name/i);

//   fireEvent.change(inputComponent, { target: { value: testValue } });
//   expect(inputComponent.value).toBe(testValue);
// });
