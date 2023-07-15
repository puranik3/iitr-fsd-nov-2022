import Cell from './Cell.js';
import {
    APPLES
} from './constants.js';

// "named" exports will not have the default keyword
// this is a "default" export
export default class Grid {
    constructor( game ) {
        this.game = game;
        this.apples = [];
        this.seed();
    }

    seed() {
        const { level, nbCellsX, nbCellsY } = this.game.configuration;

        const numApples = ( level + 1 ) * APPLES;

        let x, y;
        for( let i = 0; i < numApples; i++ ) {
            x = Math.floor( Math.random() * nbCellsX );
            y = Math.floor( Math.random() * nbCellsY );
            this.apples.push( new Cell( x, y ) );
        }

        console.log( this.apples );
    }

    paint(context) {
        const { width, height, cellSideLength } = this.game.configuration;

        context.fillStyle = 'black';
        context.lineWidth = 1;
        
        // vertical lines
        for( let x = 0; x <= width; x += cellSideLength ) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }

        // horizontal lines
        for( let y = 0; y <= height; y += cellSideLength ) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(width, y);
            context.stroke();
        }

        // apples
        context.fillStyle = 'red';
        this.apples.forEach(apple => {
            context.fillRect(
                cellSideLength * apple.x,
                cellSideLength * apple.y,
                cellSideLength,
                cellSideLength
            )
        });
    }

    isOutside(cell) {
        const { nbCellsX, nbCellsY } = this.game.configuration;

        return cell.x < 0 || cell.x >= nbCellsX || cell.y < 0 || cell.y >= nbCellsY;
    }

    isApple(cell) {
        return this.apples.find( apple => apple.x === cell.x && apple.y === cell.y );
    }

    eat(cell) {
        this.apples = this.apples.filter( apple => apple.x !== cell.x || apple.y !== cell.y )
    }

    isDone() {
        return this.apples.length === 0;
    }
}