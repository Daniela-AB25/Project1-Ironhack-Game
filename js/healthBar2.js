class HealthBar2 {
    constructor(gameSize, player1) {
        this.gameSize = gameSize
        this.player1 = player1

        this.HealthBar2Size = {
            w: 520,
            h: 40
        }

        this.HealthBar2Pos = {
            left: this.gameSize.w - this.HealthBar2Size.w - 20,
            top: 20
        }


        this.init()



    }
    init() {
        this.createElement()

    }

    createElement() {
        this.HealthBar2Element = document.createElement('div')
        this.HealthBar2Element.setAttribute('id', 'healthBar2')

        this.HealthProgress2Element = document.createElement('div')

        this.HealthBar2Element.style.border = 'white'
        this.HealthBar2Element.style.position = 'absolute'
        this.HealthBar2Element.style.borderRadius = '20px'
        this.HealthBar2Element.style.opacity = '.4'
        this.HealthBar2Element.style.width = `${this.HealthBar2Size.w + 20}px`
        this.HealthBar2Element.style.height = `${this.HealthBar2Size.h + 20}px`
        this.HealthBar2Element.style.left = `${this.HealthBar2Pos.left}px`
        this.HealthBar2Element.style.top = `${this.HealthBar2Pos.top}px`

        this.HealthProgress2Element.style.backgroundColor = 'blue'
        this.HealthProgress2Element.style.position = 'absolute'
        this.HealthProgress2Element.style.borderRadius = '20px'
        this.HealthProgress2Element.style.width = `${this.HealthBar2Size.w}px`
        this.HealthProgress2Element.style.height = `${this.HealthBar2Size.h}px`
        this.HealthProgress2Element.style.left = `${this.HealthBar2Pos.left}px`
        this.HealthProgress2Element.style.top = `${this.HealthBar2Pos.top}px`




        document.querySelector('#game-screen').appendChild(this.HealthBar2Element)
        document.querySelector('#game-screen').appendChild(this.HealthProgress2Element)






    }
}