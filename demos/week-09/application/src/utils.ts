enum State {
    STARTED,
    STOPPED
};

interface Velocity {
    x : number,
    y : number
}

/**
 * pass min value first, then max, else you will not get right results
 */
const getRandomValue : ( min : number, max : number ) => number  = ( min, max ) => {
    return min + Math.floor( Math.random() * ( max - min + 1 ) );
};

export {
    State,
    Velocity,
    getRandomValue
}