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

//Child class
//Tạo class EV  là child class của CarCl (parent class)
class EV extends CarCl {
  // thêm charge
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  // tạo phương thức
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`Battery charged to ${this.charge}%`);
  }
  accelerate() {
    // Tăng 20 km/h
    this.speed += 20;
    // 1% mức pin
    this.charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }
}

const tesla = new EV("Tesla", 120, 23);
console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
