import { add } from '../addition';

test('add a and b', () => {
  // debugger; // See chrome devtools
  const a = 2;
  const b = 3;
  expect(add(a, b)).toBe(5);
});
