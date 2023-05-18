"use strict";

const calcAverageHumanAge = ages => {
  return (
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((age, ageNext) => age + ageNext, 0) /
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18).length
  );
};

const ages = [5, 2, 4, 1, 15, 8, 3];
console.log("--- Dữ liệu 1");
console.log(calcAverageHumanAge(ages));

const ages2 = [16, 6, 10, 5, 6, 1, 4];
console.log("--- Dữ liệu 2");
console.log(Number(calcAverageHumanAge(ages2).toFixed(0)));
