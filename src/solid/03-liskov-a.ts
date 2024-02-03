import { Tesla, Audi, Toyota, Honda, Vehicle } from "./03-liskov-b";

(() => {
  // Acepta subclases de Vehicle. En esto consiste el principio de
  // substitucion
  const printCarSeats = (cars: Vehicle[]) => {
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     console.log("Tesla", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log("Audi", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log("Toyota", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log("Honda", car.getNumberOfSeats());
    //     continue;
    //   }
    // }

    // Ahora sirve de forma mucho mas dinamica. No hemos limitado el
    // comportamiento o la ejecucion de este codigo que se llama
    // printCarSeats

    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
