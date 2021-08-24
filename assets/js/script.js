document.addEventListener('DOMContentLoaded', () => {

  // cards options //

  const cardArray = [
    {
      name: 'explosion',
      img: '..../assets/images/blueexplosion.PNG'
    },
    {
      name: 'explosion',
      img: '..../assets/images/blueexplosion.PNG'
    },
    {
      name: 'diamond',
      img: '..../assets/images/browndiamond.PNG'
    },
    {
      name: 'diamond',
      img: '..../assets/images/browndiamond.PNG'
    },
    {
      name: 'lightningbolt',
      img: '..../assets/images/greenlightningbolt.PNG'
    },
    {
      name: 'lightningbolt',
      img: '..../assets/images/greenlightningbolt.PNG'
    },
    {
      name: 'thoughtbubble',
      img: '..../assets/images/orangethoughtbubble.PNG'
    },
    {
      name: 'thoughtbubble',
      img: '..../assets/images/orangethoughtbubble.PNG'
    },
    {
      name: 'star',
      img: '..../assets/images/purplestar.PNG'
    },
    {
      name: 'star',
      img: '..../assets/images/purplestar.PNG'
    },
    {
      name: 'rainbow',
      img: '..../assets/images/solidcreamrainbow.PNG'
    },
    {
      name: 'rainbow',
      img: '..../assets/images/solidcreamrainbow.PNG'
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //board creation//
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', '..../assets/images/locked.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches//
  function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '..../assets/images/locked.PNG');
      cards[optionTwoId].setAttribute('src', '..../assets/images/locked.PNG');
      alert('You have clicked the same image!');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Well done! You found a match.');
      cards[optionOneId].setAttribute('src', '..../assets/images/unlocked.PNG');
      cards[optionTwoId].setAttribute('src', '..../assets/images/unlocked.PNG');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', '..../assets/images/locked.PNG');
      cards[optionTwoId].setAttribute('src', '..../assets/images/locked.PNG');
      alert('Oopss! Sorry, try again.');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations! You have matched them all!';
    }
  }

  //flip the card//
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});

