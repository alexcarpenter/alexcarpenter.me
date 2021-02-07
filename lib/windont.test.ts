import widont from './widont';

test('adds nbsp between last two words of a string', () => {
  expect(widont('Hello world')).toBe('Hello\u00A0world');
});
