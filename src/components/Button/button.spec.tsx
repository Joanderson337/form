import { render } from '@testing-library/react';
import { expect, it } from 'vitest';
import { Button } from '.';

it('should render Heading with text Hello', () => {
  const { getByTestId } = render(<Button data-testid="button">Hello</Button>);

  expect(getByTestId('button').textContent).toBe('Hello');
});
