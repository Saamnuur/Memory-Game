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

    //game board//

    function createBoard() {
        for (let i= 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', '../assets/images/locked.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click,'flipcard)// - should write functoin soon.
            grid.appendChild(card);
        }
    }

    createBoard();
})