easterEggLetter = document.getElementById('easterEggLetter');
modalWindow = document.querySelector('.modal');
modalClose = document.querySelector('.close');
modalInput = document.querySelector('#modalInput')

const displayModal = (e) => {
    modalWindow.classList.remove('modalHidden');
    modalWindow.classList.add('modalShown');
}

const hideModal = (e) => {    
    modalWindow.classList.remove('modalShown');
    modalWindow.classList.add('modalHidden');
}

const checkAnswer = (e) => {
    const correctAnswer = '12345';

    if (e.target.value.length === 5) {
      if (e.target.value === correctAnswer) {
        alert('Congratulations, you have won the grand prize! Please bring your ticket to Tim at the front desk for verification!');
      } else {
        alert("So sorry, but you are not a winner. Don't worry though there will be more raffles throughout the weekend!")
        e.target.value = '';
      }
    }
     
}

easterEggLetter.addEventListener("click", displayModal);
modalClose.addEventListener("click", hideModal);
modalInput.addEventListener("keyup", checkAnswer);
