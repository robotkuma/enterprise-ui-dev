import { render } from 'test/utilities';
import { axe, toHaveNoViolations } from 'jest-axe';
import ObstacleCourse from '.';

expect.extend(toHaveNoViolations);

it('should be accessible', async () => {
  const { container } = render(<ObstacleCourse />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
