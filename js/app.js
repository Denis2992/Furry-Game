import "../sass/main.scss";
import Game from "./game";


const game = new Game();
game.showFurry();
game.showCoin();
game.startGame();
document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});

document.querySelector(".btn-info").addEventListener("click", () => {
    document.querySelector(".game-over").classList.add("hide");
    document.querySelector(".coin").classList.remove("coin");
    document.querySelector("#score").innerHTML = "0";
    const game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();
    document.addEventListener('keydown', function(event){
        game.turnFurry(event);
    });
})

