interface Reportable {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const hero = {
  name: 'Hero',
  year: 2024,
  broken: false,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (vehicle: Reportable): void => {
  console.log(vehicle.summary());
};

// printSummary(oldCivic);
printSummary(hero);
