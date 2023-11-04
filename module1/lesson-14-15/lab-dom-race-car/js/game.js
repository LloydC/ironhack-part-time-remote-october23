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
        if(this.gameIsOver === true){
            return;
        }
        console.log('gameLoop exec')
        this.update();// update the game
        // this.gameLoop()
        window.requestAnimationFrame(()=>  this.gameLoop()); // used to improve/better manage the rate of frames for the game animation
    }

    update(){
        // Return the new position of the car to update the game
        this.player.move();
        // Return the new positions of the obstacles to update the game
       for(let i= 0; i < this.obstacles.length; i++){
        const obstacle = this.obstacles[i];
        obstacle.move();

        // If the player's car collides with an obstacle
            if (this.player.didCollide(obstacle)) {
                // Remove the obstacle element from the DOM
                obstacle.element.remove();
                // Remove obstacle object from the array
                this.obstacles.splice(i, 1);
                // Reduce player's lives by 1
                this.lives--;
                document.getElementById('lives').textContent = this.lives;
                // Update the counter variable to account for the removed obstacle
                i--;
            } 
            else if (obstacle.top > this.height) {
                // Increase the score by 1
                this.score++;
                document.getElementById('score').textContent = this.score;
                // Remove the obstacle from the DOM
                obstacle.element.remove();
                // Remove obstacle object from the array
                this.obstacles.splice(i, 1);
                // Update the counter variable to account for the removed obstacle
                i--;
            }
        }
      // End the game
        if (this.lives === 0) {
            this.endGame();
        }
    // Create a new obstacle based on a random probability
    // when there is no other obstacles on the screen
        if (Math.random() > 0.98 && this.obstacles.length < 1) {
                this.obstacles.push(new Obstacle(this.gameScreen));
        }
       
    }

    // Create a new method responsible for ending the game
  endGame() {
    this.player.element.remove(); // remove the player car from the screen
    this.obstacles.forEach(obstacle => obstacle.element.remove()); // remove the obstacles from the screen

    this.gameIsOver = true; // cancel the execution of gameLoop()

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}