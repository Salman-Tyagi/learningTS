const carsMaker: string[] = ['mercedes', 'maruti', 'tata'];
// const dates: string[][] = [];
// const dates: Date[][] = [[new Date(), new Date()]];

const carsByMaker: string[][] = [['benz', 'desire', 'punchEV']];

const car = carsMaker[0];
const carLast = carsMaker.pop();

// Inference for map function
carsMaker.map((car: string): string => {
  return car;
});
