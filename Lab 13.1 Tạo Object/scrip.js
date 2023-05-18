"use strict";

// Tạo hàm tạo Car
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Thêm phương thức 'accelerate'
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} is now going at ${this.speed} km/h`);
};

// Thêm phương thức 'brake'
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} is now going at ${this.speed} km/h`);
};

// Tạo 2 object Car
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Kiểm tra chức năng 'accelerate' và 'brake'
console.log(car1);
car1.accelerate(); // in ra "The BMW is now going at 130 km/h"
car1.brake();
car1.brake(); // in ra "The BMW is now going at 120 km/h"
console.log("----------------- Dữ liệu 1");
console.log(car2);
car2.accelerate(); // in ra "The Mercedes is now going at 105 km/h"
car2.brake(); // in ra "The Mercedes is now going at 100 km/h"
car2.brake(); // in ra "The Mercedes is now going at 95 km/h"
console.log("----------------- Dữ liệu 2");
