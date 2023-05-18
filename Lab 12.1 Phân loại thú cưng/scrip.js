"use strict";

const checkDogs = (dogJulia, dogKate) => {
  // Xóa phần tử cuối
  dogJulia.pop();
  // Xóa phần tử đầu tiên
  dogJulia.shift();

  const dogData = dogJulia.concat(dogKate);
  dogData.forEach((element, index) => {
    element >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult , and is ${element} years old`
        )
      : console.log(`Dog number ${index + 1} is strill a puppy`);
  });
};

const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];
console.log("-----------Dữ liệu 1");
checkDogs(dogJulia, dogKate);

console.log("--- -------DỮ liệu 2");
const dogJulia2 = [9, 16, 6, 8, 3];
const dogKate2 = [10, 5, 6, 1, 4];
checkDogs(dogJulia2, dogKate2);
