import { screen, render } from './test/utilities';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  render(<Counter initialCount={4000} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('4000');
});

test('it should reset the count when the "Reset" button is pressed', async () => {
  const { user } = render(<Counter initialCount={65} />);
  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  const resetButton = screen.getByRole('button', { name: /reset/i });

  await user.click(incrementButton);
  await user.click(incrementButton);

  expect(currentCount).toHaveTextContent('67');

  await user.click(resetButton);

  expect(currentCount).toHaveTextContent('0');
});
