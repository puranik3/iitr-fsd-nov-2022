import Grid /*, { NamedExport1, NamedExport2 }*/ from './Grid.js';
import Snake from './Snake.js';
import {
    WIDTH,
    HEIGHT,
    CELLSIZE,
    SPEED,
    MAX_LEVEL,
    APPLES,
    COLORS
} from './constants.js';
import Direction from './Direction.js';

export default class Game {
    score = 0;
    running = false;

    constructor() {
        this.canvas = document.createElement( 'canvas' );
        document.body.appendChild( this.canvas );

        this.canvas.style.width = WIDTH * CELLSIZE;
        this.canvas.style.height = HEIGHT * CELLSIZE;

        this.canvas.width = WIDTH * CELLSIZE;
        this.canvas.height = HEIGHT * CELLSIZE;

        this.configuration = {
            level: 0,
            speed: SPEED,
            width: this.canvas.width,
            height: this.canvas.height,
            nbCellsX: WIDTH, // 50
            nbCellsY: HEIGHT, // 20
            cellSideLength: CELLSIZE,
            color: COLORS[0]
        }

        this.nextMove = 0;

        this.grid = new Grid(this);
        this.snake = new Snake(this);

        window.addEventListener( 'keydown', this.onKeyDown );
    }

    start() {
        this.running = true;
        this.nextMove = 0; // any other config reset to bring game to initial state to be done here
        requestAnimationFrame( this.loop ); // hey browser, please call loop() before display refreshes (context is lost!)
    }

    stop() {
        this.running = false;
    }

    pauseOrResume() {
        this.running = !this.running;
    }

    // class methods also support arrow function syntax (the "this" will not be lost)
    loop = ( time ) => {
        requestAnimationFrame( this.loop );

        if( this.running ) {
            if( time >= this.nextMove ) { // control the speed of game refresh
                this.nextMove = time + this.configuration.speed;

                this.snake.move();

                switch( this.checkState() ) {
                    case -1:
                        this.gameOver();
                        break;
                    case 1:
                        this.snake.grow();
                        this.score += 100;
                        this.grid.eat(this.snake.getHead());
                        if( this.grid.isDone() ) {
                            this.levelUp();
                        }
                        break;
                    default:
                        this.paint();
                }
            }
        }
    }

    paint() {
        const { color, width, height } = this.configuration;
        const context = this.canvas.getContext( '2d' );

        // background color
        context.fillStyle = color;
        context.fillRect( 0, 0, width, height );

        this.grid.paint(context);
        this.snake.paint(context);
    }

    // -1 -> game over
    // 1 -> apple eaten
    // 0 -> completed all levels
    checkState() {
        const cell = this.snake.getHead();

        // game over?
        if( this.grid.isOutside(cell) || this.snake.isTail(cell)) {
            return -1;
        }

        // eaten apple?
        if( this.grid.isApple(cell) ) {
            return 1;
        }

        return 0; // nothing special
    }

    gameOver() {
        alert( `Game over. You scored ${this.score}` );
        this.stop();
    }

    onKeyDown = event => {
        event.preventDefault();

        switch(event.key) {
            case "ArrowUp":
                this.snake.setDirection(Direction.TOP);
                break;
            case "ArrowDown":
                this.snake.setDirection(Direction.BOTTOM);
                break;
            case "ArrowLeft":
                this.snake.setDirection(Direction.LEFT);
                break;
            case "ArrowRight":
                this.snake.setDirection(Direction.RIGHT);
                break;
            case " ":
                this.pauseOrResume();
                break;
        }
    }

    levelUp() {
        this.score += 1000;
        this.configuration.level++;

        if(this.configuration.level < MAX_LEVEL) {
            this.configuration.speed -= 10;
            this.configuration.color = COLORS[this.configuration.level];
            this.grid.seed();
            return;
        }

        this.win();
    }

    win() {
        alert( `Congrats! You are pro-level. You scored ${this.score}.` );
        this.stop();
    }
}