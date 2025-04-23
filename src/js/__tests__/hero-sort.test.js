import heroSort from '../hero-sort';

test('should healthy', () => {
  const result = heroSort([
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'копейщик', health: 80},
  ]);

  expect(result).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'копейщик', health: 80},
    {name: 'мечник', health: 10},
  ]);
});



