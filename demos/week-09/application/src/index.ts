import {
    State,
    Velocity,
    getRandomValue
} from './utils.js';

const board = document.querySelector( '.board' ) as HTMLElement; // type assertion (type-casting)
const ball = document.querySelector( '.ball' ) as HTMLElement;
const paddle_1 = document.querySelector( '.paddle_1' ) as HTMLElement;
const paddle_2 = document.querySelector( '.paddle_2' ) as HTMLElement;
const score_1 = document.querySelector( '.player_1_score' ) as HTMLElement;
const score_2 = document.querySelector( '.player_2_score' ) as HTMLElement;
const message = document.querySelector( '.message' ) as HTMLElement;

let board_coord = board.getBoundingClientRect();
const initial_ball_coord = ball.getBoundingClientRect();
let ball_coord = initial_ball_coord;
let paddle_1_coord = paddle_1.getBoundingClientRect();
let paddle_2_coord = paddle_2.getBoundingClientRect();

let paddle_height = paddle_1_coord.height;
let ball_top = ball.style.top;
let ball_left = ball.style.left;

class Game {
    private state = State.STOPPED;
    private velocity : Velocity = {
        x: 0,
        y: 0
    };
    private score1 = 0;
    private score2 = 0;
    
    start() {
        this.bindListeners();
    }

    reset() {
        this.state = State.STOPPED;

        ball_coord = initial_ball_coord;
        ball.style.top = ball_coord.top + 'px';
        ball.style.left = ball_coord.left + 'px';
    }

    getVelocity() {
        const v : Velocity = {
            x: getRandomValue(3, 8) * ( getRandomValue(0, 1) === 0 ? -1 : 1 ),
            y: getRandomValue(3, 8) * ( getRandomValue(0, 1) === 0 ? -1 : 1 ),
        };

        return v;
    }

    bounceWall() {
        this.velocity = {
            x: this.velocity.x,
            y: -this.velocity.y
        };
    }
    
    bouncePaddle() {
        this.velocity = {
            x: -this.velocity.x,
            y: this.velocity.y
        };
    }

    bindListeners() {
        document.addEventListener('keydown', event => {
            const { key } = event;

            if( this.state === State.STOPPED ) {
                if( key === 'Enter' ) {
                    this.state = State.STARTED;

                    message.textContent = 'Game on';

                    requestAnimationFrame(() => {
                        this.velocity = this.getVelocity();
                        this.moveBall();
                    });
                }
            }

            if( this.state === State.STARTED ) {
                switch(key) {
                    case 'w':
                        paddle_1.style.top = Math.max( ( paddle_1_coord.top - window.innerHeight * 0.085 ), board_coord.top ) + "px";
                        paddle_1_coord = paddle_1.getBoundingClientRect();
                        break;
                    case 's':
                        paddle_1.style.top = Math.min( ( paddle_1_coord.top + window.innerHeight * 0.085 ), board_coord.bottom - paddle_height ) + "px";
                        paddle_1_coord = paddle_1.getBoundingClientRect();
                        break;
                    case 'ArrowUp':
                        paddle_2.style.top = Math.max( ( paddle_2_coord.top - window.innerHeight * 0.085 ), board_coord.top ) + "px";
                        paddle_2_coord = paddle_2.getBoundingClientRect();
                        break;
                    case 'ArrowDown':
                        paddle_2.style.top = Math.min( ( paddle_2_coord.top + window.innerHeight * 0.085 ), board_coord.bottom - paddle_height ) + "px";
                        paddle_2_coord = paddle_2.getBoundingClientRect();
                        break;
                }
            }
        })
    }

    moveBall = () => {
        // has ball reached top / bottom of board?
        if( ball_coord.top <= board_coord.top || ball_coord.bottom >= board_coord.bottom ) {
            this.bounceWall();
        }

        // ball hits the paddle and has to bounce off
        if(
            ball_coord.left <= paddle_1_coord.right
            &&
            ball_coord.top >= paddle_1_coord.top
            &&
            ball_coord.bottom <= paddle_1_coord.bottom
            ||
            ball_coord.right >= paddle_2_coord.left
            &&
            ball_coord.top >= paddle_2_coord.top
            &&
            ball_coord.bottom <= paddle_2_coord.bottom
        ) {
            this.bouncePaddle();
        }

        if( ball_coord.right >= board_coord.right ) {
            this.score1++;
            score_1.textContent = '' + this.score1;
            this.reset();
        }

        if( ball_coord.left <= board_coord.left ) {
            this.score2++;
            score_2.textContent = '' + this.score2;
            this.reset();
        }

        ball.style.left = ball_coord.left + this.velocity.x + 'px';
        ball.style.top = ball_coord.top + this.velocity.y + 'px';

        ball_coord = ball.getBoundingClientRect();

        requestAnimationFrame( this.moveBall );
    }
}

const game = new Game();
game.start();