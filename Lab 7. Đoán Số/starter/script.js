'use strict';
// document.querySelector('.message').textContent = `Correct Number!`;
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 23;
// console.log(document.querySelector('.number').textContent);

// document.querySelector('.score').textContent = 18;
// console.log(document.querySelector('.score').textContent);

// document.querySelector('.guess').value;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

// document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const checkNumber = Number(document.querySelector('.guess').value);
  console.log(checkNumber, typeof checkNumber);
  if (!checkNumber) {
    displayMessage('No Number');
    // document.querySelector('.message').textContent = `No Number`;
    // console.log(`No Number`);
  } else if (checkNumber === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '15rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Refactoring
  } else if (checkNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   checkNumber > secretNumber ? 'Too High' : 'Too Low';
      displayMessage(checkNumber > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lose :(';
      displayMessage('You Lose :(');
      document.querySelector('.score').textContent = 'Ngu';
    }
  }

  // } else if (checkNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Hight';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (checkNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing.....';
  displayMessage('Start guessing.......');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '30rem';
});
