class Vehicle {
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {}

  private drive(): void {
    console.log('Chugga chugga');
  }

  startDrivingProcess(): void {
    this.drive();
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
const vehicle2 = new Vehicle('black');

// vehicle.drive();
vehicle.startDrivingProcess();
console.log(vehicle.color);
console.log(vehicle2.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  redCar(): void {
    console.log(`This new ${this.color} car has ${this.wheels} wheels`);
  }

  honk(): void {
    console.log('beep beep');
  }
}

const car = new Car(4, 'red');
car.honk();
console.log(car.color);
console.log(car.wheels);
car.redCar();
