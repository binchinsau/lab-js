"use strict";

const calcAverageHumanAge = ages => {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const humanAgesNew = humanAges.filter(age => age >= 18);
  return (
    humanAgesNew.reduce((prevAge, currAge) => prevAge + currAge) /
    humanAgesNew.length.toFixed(2)
  );
};

const ages = [5, 2, 4, 1, 15, 8, 3];
console.log("--- Dữ liệu 1");
console.log(calcAverageHumanAge(ages));

const ages2 = [16, 6, 10, 5, 6, 1, 4];
console.log("--- Dữ liệu 2");
console.log(Number(calcAverageHumanAge(ages2).toFixed(0)));
