document.addEventListener('DOMContentLoaded', () => {

    // cards options //

    const cardArray = [
        {
            name: 'explosion',
            img: 'images/blueexplosion.png'
        }
        {
            name: 'explosion',
            img: 'images/blueexplosion.png'
        }
        {
            name: 'diamond',
            img: 'images/browndiamond.png'
        }
        {
            name: 'diamond',
            img: 'images/browndiamond.png'
        }
        {
            name: 'lightningbolt',
            img: 'images/greenlightningbolt.png'
        }
        {
            name: 'lightningbolt',
            img: 'images/greenlightningbolt.png'
        }
        {
            name: 'thoughtbubble',
            img: 'images/orangethoughtbubble.png'
        }
        {
            name: 'thoughtbubble',
            img: 'images/orangethoughtbubble.png'
        }
        {
            name: 'star',
            img: 'images/purplestar.png'
        }
        {
            name: 'star',
            img: 'images/purplestar.png'
        }
        {
            name: 'rainbow',
            img: 'images/solidcreamrainbow.png'
        }
        {
            name: 'rainbow',
            img: 'images/solidcreamrainbow.png'
        }
    ]

    const grid = document.querySelector('.grid')

    //game board//

    function creatBoard() {
        for (let i= 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('scr', 'assets/images/blank.png')
            card.setAttribute('data-id', 1)
            //card.addEventListener('click,'flipcard)// - should write functoin soon.
            grid.appendChild(card)
        }
    }
})