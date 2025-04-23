import heroHealth from '../hero';

test('should healthy', () => {
  const result = heroHealth({name: 'Маг', health: 90});

  expect(result).toBe("healthy");
});

test('should wounded', () => {
  const result = heroHealth({name: 'Маг', health: 40});

  expect(result).toBe("wounded");
});

test('should critical', () => {
  const result = heroHealth({name: 'Маг', health: 10});

  expect(result).toBe("critical");
});

