import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { removeCamleWithSpaces } from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Button to have the background color red', () => {
//   render(<App />);
//   let targetBtn = screen.getByRole('button');
//   expect(targetBtn).toHaveStyle({ backgroundColor: 'red' })
//   expect(targetBtn).toHaveTextContent('Click Me!');

//   fireEvent.click(targetBtn);
//   expect(targetBtn).toHaveStyle({ backgroundColor: 'blue' })
// });

test('button is enabled when checked and vise versa', () => {
  render(<App />);
  let btn = screen.getByRole('button');
  let targetBtn = screen.getByRole('checkbox');

  expect(btn).toBeDisabled();
  expect(targetBtn).not.toBeChecked();

  fireEvent.click(targetBtn);
  expect(targetBtn).toBeChecked();
  expect(btn).toBeEnabled();
});

describe('Functional testing', function () {
  test('testing with out any uppercase', function () {
    expect(removeCamleWithSpaces('red')).toBe('red');
  });

  test('testing with one uppercase', function () {
    expect(removeCamleWithSpaces('lightBlue')).toBe('light Blue');
  })

  test('testing with two any uppercase', function () {
    expect(removeCamleWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})