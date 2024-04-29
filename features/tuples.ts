const beverage = {
  color: 'Brown',
  carbonated: true,
  sugar: 40,
};

// Wrong tuple
// const beverageArr = ['Brown', true, 40];

// This can't be done in tuple
// beverageArr[0] = 20;
// beverageArr[2] = 'Orange';

// Type alias
type Drink = [string, boolean, number];

// Correct tuple
const drink: Drink = ['Brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['Brown', false, 20];

// New example for tuple
const carSpecs: [number, number] = [385, 3345];

// We should always use JavaScript Object to specifies data
const carStats: { horsePower: number; weight: number } = {
  horsePower: 452,
  weight: 4575,
};
