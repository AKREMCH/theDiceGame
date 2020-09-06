
var score, roundScore, activePlayer;

let musicPlay = document.getElementById("music");

function init() {
      musicPlay.play();
      scores = [0, 0];
      roundScore = 0;
      activePlayer = 0;
      document.querySelector('.dice').style.display = 'none';
      document.getElementById('score-0').textContent = '0';
      document.getElementById('score-1').textContent = '0';
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
      document.querySelector('#name-0').textContent = 'PLAYER 1';
      document.querySelector('#name-1').textContent = 'PLAYER 2';
      document.querySelector('.player-0-panel').classList.add('active');
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.final-score').innerHTML = 'enter value';
      enableBtn();
}
function nextPlayer() {
      // if else statements simple form!!
      //if ... ? then... : else....;
      activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
      roundScore = 0;
      document.getElementById('current-0').textContent = '0'; // wooooooooow :)   
      document.getElementById('current-1').textContent = '0'; // wooooooooow :)   

      document.querySelector('.player-0-panel').classList.toggle('active'); // better than add and remove !!! 
      document.querySelector('.player-1-panel').classList.toggle('active')  //it REFLECT the remove to add and vice versa

      document.querySelector('.dice').style.display = 'none';
}

function disableBtn() {
      document.getElementById('btn-1').disabled = true;
      document.getElementById('btn-2').disabled = true;

}

function enableBtn() {
      document.getElementById('btn-1').disabled = false;
      document.getElementById('btn-2').disabled = false;

}

init();

//btn-roll
document.querySelector('.btn-roll').addEventListener('click', function () {
      //1 random number*
      var dice = Math.floor(Math.random() * 6) + 1;


      //2 display the result
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';

      // 3 update the round but if the rolled num wasn't '1' !!
      if (dice !== 1) {
            // add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
            //  document.getElementById('currently-'+activePlayer).textContent='hahah you lose it :)'
            //next player
            nextPlayer(); // amazing
      }
});
// btn-hold
document.querySelector('.btn-hold').addEventListener('click', function () {

      // add global score
      scores[activePlayer] += roundScore;

      //update the UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      var input = document.querySelector('.final-score').value;
      var winningScore;

      // Undefined, 0, null or "" are COERCED to false
      // Anything else is COERCED to true
      if (input) {
            winningScore = input;
      } else {
            winningScore = 100;
      }
      //check if player won the game !!
      if (scores[activePlayer] >= winningScore) {
            // window.alert('player '+(activePlayer+1)+' win the game'); // great but there is another solution
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            disableBtn();           /* 
            document.querySelector('.player-0-panel').classList.remove('active'); // better than add and remove !!!
            document.querySelector('.player-1-panel').classList.remove('active')
            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';         
      */  } else {
            // next player 
            nextPlayer();
      }
});
// btn-new reload
document.querySelector('.btn-new').addEventListener('click', init);

// Get the modal
var modal = document.getElementById("myModal");
var modalContent = document.querySelector('.modal-content')
var playBtn = document.getElementsByClassName('playBtn');
// Get the button to open the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
      modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
      modal.style.display = "none";
}
// stop/play music
var stopMusic = document.querySelector('.stopMusic')
var playMusic = document.querySelector('.playMusic')
stopMusic.onclick = function () {
      stopMusic.style.display = 'none';
      playMusic.style.display = 'block';
      musicPlay.muted = true;
}
playMusic.onclick = function () {
      playMusic.style.display = 'none';
      stopMusic.style.display = 'block';

      musicPlay.muted = false;

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
      if (event.target == modal) {
            modal.style.display = "none";
      }
}

