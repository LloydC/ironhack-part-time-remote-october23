class Game {
    // code to be added
    constructor(){
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.player = new Player(
            this.gameScreen,
            10,
            550,
            100,
            100,
            './images/car.png'
        ); //  new Player()
        this.width = 600;
        this.height = 600;
        this.obstacles = []; // new Obstacle()
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start(){
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameLoop();
        // Car start at a specific position
        // Obstacles are going to be at a specific position as well
    }

    gameLoop(){
        // Right now, always this.gameIsOver === false
        // if(this.gameIsOver === true){
        //     return;
        // }
        console.log('gameLoop exec')
        this.update();// update the game
        // this.gameLoop()
        window.requestAnimationFrame(()=>  this.gameLoop()); // used to improve/better manage the rate of frames for the game animation
    }

    update(){
        // Return the new position of the car to update the game
        this.player.move();
        // Return the new positions of the obstacles to update the game
    }
}