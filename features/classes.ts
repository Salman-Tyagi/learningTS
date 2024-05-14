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

// class Car extends Vehicle {
//   honk(): void {
//     console.log('beep beep');
//   }
// }

// const car = new Car();
// car.honk();
