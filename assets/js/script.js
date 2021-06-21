document.addEventListener('DOMContentLoaded', () => {

    // cards options //

    const cardArray = [
        {
            name: 'explosion',
            img: '../assets/images/blueexplosion.png'
        },
        {
            name: 'explosion',
            img: '../assets/images/blueexplosion.png'
        },
        {
            name: 'diamond',
            img: '../assets/images/browndiamond.png'
        },
        {
            name: 'diamond',
            img: '../assets/images/browndiamond.png'
        },
        {
            name: 'lightningbolt',
            img: '../assets/images/greenlightningbolt.png'
        },
        {
            name: 'lightningbolt',
            img: '../assets/images/greenlightningbolt.png'
        },
        {
            name: 'thoughtbubble',
            img: '../assets/images/orangethoughtbubble.png'
        },
        {
            name: 'thoughtbubble',
            img: '../assets/images/orangethoughtbubble.png'
        },
        {
            name: 'star',
            img: '../assets/images/purplestar.png'
        },
        {
            name: 'star',
            img: '../assets/images/purplestar.png'
        },
        {
            name: 'rainbow',
            img: '../assets/images/solidcreamrainbow.png'
        },
        {
            name: 'rainbow',
            img: '../assets/images/solidcreamrainbow.png'
        }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []

    //game board//

    function createBoard() {
        for (let i= 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', '../assets/images/locked.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click,'flipCard)// - should write functoin soon.
            grid.appendChild(card);
        }
    }


    //Matches//

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if ()
    }


    //Card flip//

    function flipCard() {
        car cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.lenth === 2) {
            setTimeout(checkForMatch, 400)
        }
    }


    createBoard();
})