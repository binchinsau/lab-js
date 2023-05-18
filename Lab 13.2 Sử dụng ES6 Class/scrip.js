"use strict";

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  //Getter trả về giá trị của thuộc tính
  get speedUS() {
    return this.speed / 1.6;
  }
  //Setter được sử dụng để thiết lập giá trị của thuộc tính
  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} is now going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} is now going at ${this.speed} km/h`);
  }
}

const car1 = new CarCl("BMW", 120);
const car2 = new CarCl("Mercedes", 95);

console.log(car1.speedUS);
car1.accelerate();
car1.brake();
car1.brake();
car1.speedUS = 50;
console.log(car1);
console.log("-----Dữ liệu 1");
console.log(car2.speedUS);
car2.accelerate();
car2.brake();
car2.brake();
car2.speedUS = 50;
console.log("-----Dữ liệu 2");
