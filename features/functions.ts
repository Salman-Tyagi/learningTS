const add = (a: number, b: number): number => {
    return a + b;
};

const substract = (a: number, b: number): number => {
   return a - b;
}

function divide(a:number, b:number):number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message:string): void => {
  console.log(message);
}

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

const person = {
  name: 'Peter',
  age: 30,
  coords: {
    lat: 0,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = person;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = person;
