'use strict';
const play0El = document.querySelector('.player--0');
const play1EL = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  play0El.classList.remove('player--winner');
  play1EL.classList.remove('player--winner');
  play0El.classList.add('player--active');
  play1EL.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  // document.getElementById(`current--${activePlayer}`).textContent =
  //   currentScore;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  console.log(`Người chơi ${activePlayer} kết thúc`);
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  play0El.classList.toggle('player--active');
  play1EL.classList.toggle('player--active');
};

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    // random xúc xắc
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // hình ảnh xúc xắc
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //kiểm tra khi xúc xắc về 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
      // console.log(switchPlayer());
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // switchPlayer();
    if (scores[activePlayer] >= 50) {
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});

Element.classList.na;
