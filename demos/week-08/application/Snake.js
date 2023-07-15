import Direction from './Direction.js';
import Cell from './Cell.js';

export default class Snake {
    constructor( game ) {
        this.game = game;

        this.size = 3; // 3 tail cells to start with
        this.direction = Direction.RIGHT;

        this.head = new Cell( 1, 1 );
        this.tail = [];
    }

    setDirection(direction) {
        if(direction === Direction.TOP && this.direction === Direction.BOTTOM) {
            return;
        }

        if(direction === Direction.BOTTOM && this.direction === Direction.TOP) {
            return;
        }

        if(direction === Direction.LEFT && this.direction === Direction.RIGHT) {
            return;
        }

        if(direction === Direction.RIGHT && this.direction === Direction.LEFT) {
            return;
        }

        this.direction = direction;
    }

    grow() {
        this.size += 3;
    }

    getHead() {
        return this.head;
    }

    getNext() {
        switch( this.direction ) {
            case Direction.TOP:
                return new Cell( this.head.x, this.head.y - 1 );
            case Direction.BOTTOM:
                return new Cell( this.head.x, this.head.y + 1 );
            case Direction.LEFT:
                return new Cell( this.head.x - 1, this.head.y );
            case Direction.RIGHT:
                return new Cell( this.head.x + 1, this.head.y );
        }
    }

    move() {
        this.tail.push( this.head );
        this.head = this.getNext();

        if( this.tail.length > this.size ) {
            this.tail.shift();
        }
    }

    paint( context ) {
        const { cellSideLength } = this.game.configuration;

        // head
        const size = cellSideLength / 10;
        const offset = cellSideLength / 3;
        const x = cellSideLength * this.head.x;
        const y = cellSideLength * this.head.y;
        
        context.fillStyle = "#111111";
        // head
        context.fillRect(x, y, cellSideLength, cellSideLength);

        // eyes
        switch (this.direction) {
            case Direction.TOP:
                context.beginPath();
                context.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case Direction.BOTTOM:
                context.beginPath();
                context.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case Direction.RIGHT:
                context.beginPath();
                context.arc( x + 2 * offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + 2 * offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
            case Direction.LEFT:
                context.beginPath();
                context.arc( x + offset, y + offset, size, 0, 2 * Math.PI );
                context.arc( x + offset, y + 2 * offset, size, 0, 2 * Math.PI );
                context.fillStyle = "white";
                context.fill();
                break;
        }

        context.fillStyle = '#333333';
        this.tail.forEach(tail => {
            context.fillRect( cellSideLength * tail.x, cellSideLength * tail.y, cellSideLength, cellSideLength );
        });
    }

    isTail(cell) {
        return this.tail.find(tail => tail.x === cell.x && tail.y === cell.y );
    }
}