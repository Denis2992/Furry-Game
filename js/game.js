import Coin from "./coin";
import Furry from "./furry";

export default class Game {
    constructor() {
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
    }

    index(x, y) {
        return x + (y * 10);
    }

    showFurry() {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
    }

    hideVisibleFurry() {
        const divFurryClass = document.querySelector(".furry");
        divFurryClass.classList.remove("furry");
    }

    showCoin() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
    }

    moveFurry () {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        }
        this.gameOver();
    }

    turnFurry(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    }

    checkCoinCollision() {
        if (this.index(this.furry.x, this.furry.y) === this.index(this.coin.x, this.coin.y)) {
            document.querySelector(".coin").classList.remove("coin");
            this.score += 1;
            document.getElementById("score").innerText = this.score;
            this.coin = new Coin();
            this.showCoin();
        }
    }

    gameOver () {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            document.querySelector(".game-over").classList.remove("hide");
            document.getElementById("final-score").innerText = this.score;
        }
    }

    startGame() {
        const self = this;
        return this.idSetInterval = setInterval(function () {
            self.moveFurry();
            self.hideVisibleFurry();
            self.showFurry();
            self.checkCoinCollision();
        },250);
    }
}