'use strict';
//named element
let score0EL = document.querySelector('#score--0'); //lay ham id theo class 
let score1EL = document.getElementById('score--1'); //lay ham id theo id
let curent0EL = document.getElementById('current--0');
let curent1EL = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const diceEL = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const btnSwitch = document.querySelector('.btn--switch');
//active code
score0EL.textContent ='0';
score1EL.textContent ='0';
diceEL.classList.add('hidden');
let score =[0,0];
let currentscore =0;
let activeplayer =0;
let playing = true;
const Switchplayer = function() {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer ===0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}
// rolling dice
btnRoll.addEventListener('click', function() {
    if(playing){ // unavaiable when false or has the winner
// creat random roll
const dice = Math.trunc(Math.random()* 6) +1;
//display dice value
diceEL.classList.remove('hidden');
diceEL.src=`dice-${dice}.png`;
// check value =1 (Swich player)
if( dice!==1){ //not equa 1 continue dice and get dice value to current score.
    currentscore += dice;
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    
}else{ // reset curent score and switch to another player.
   Switchplayer();
    
  
}
}});
btnHold.addEventListener('click', function(){
    if(playing){  // unavaiable when false or has the winner
    // get save total score for each player
    score[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];
    //check winner player
    if(score[activeplayer]>=50){
    playing = false;    
    document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    diceEL.classList.add('hidden');}
    // switch player
    else{
    Switchplayer();}
}});
btnSwitch.addEventListener('click', function() {
    if(playing){
    activeplayer = activeplayer ===0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
    currentscore = 0;
    currentscore += dice;
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;
}});
btnNew.addEventListener('click', function(){
    playing = true;
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--winner');
    if(!player0EL.classList.contains('player--active'))
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    diceEL.classList.add('hidden');
    score =[0,0];
    score0EL.textContent = '0';
    score1EL.textContent = '0';
    currentscore =0;
    curent0EL.textContent='0';
    curent1EL.textContent='0';
})

