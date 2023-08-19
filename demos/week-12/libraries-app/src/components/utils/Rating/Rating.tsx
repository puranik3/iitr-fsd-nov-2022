import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

type Props = {
    color: string,
    value: number,
    numRatings: number
};

const Rating = ( { color, value, numRatings } : Props ) => {
    const numFullStars = Math.floor( value );
    const numHalfStars = ( value - numFullStars ) >= 0.5 ? 1 : 0;
    const numEmptyStars = 5 - ( numFullStars + numHalfStars );

    return (
        <>
            {
                Array.from( { length : numFullStars }).map(
                    ( item, idx ) => <FontAwesomeIcon icon={faStar} key={idx} style={{ color }} />
                )
            }
            { numHalfStars ? <FontAwesomeIcon icon={faStarHalfAlt} style={{ color }} /> : null}
            {
                Array.from( { length : numEmptyStars }).map(
                    ( item, idx ) => <FontAwesomeIcon icon={faStarEmpty} style={{ color }} />
                )
            }
            ({numRatings} ratings)
        </>
    );
};

Rating.defaultProps = {
    color: 'goldenrod',
    value: 5,
    numRatings: 1
};

export default Rating;