const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(6, 9, 12));

// Dữ liệu 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Win (${avgDolphins} vs ${avgKoalas}) `);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("Not Team WIN.");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(200, 100);

// Dữ liệu 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
