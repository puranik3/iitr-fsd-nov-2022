import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import Rating from '../../utils/Rating/Rating';
import ILibrary from "../../../models/ILibrary";

const baseUrl = process.env.REACT_APP_BASE_URL;

type Props = {
    library: ILibrary
}

const LibraryListItem = ( { library } : Props ) => {
    return (
        <Card>
            <Card.Img variant="top" src={`${baseUrl}/${library.imageUrl}`} />
            <Card.Body>
                <Card.Title>{library.name}</Card.Title>
                
                <Rating
                    value={library.rating}
                    color="green"
                    numRatings={library.noOfRatings}
                />
                
                <Card.Text>
                    <strong>Address</strong>: {library.location}
                </Card.Text>
                <Link to={`/libraries/${library.id}`} className="btn btn-primary">More</Link>
            </Card.Body>
        </Card>
    );
}
 
export default LibraryListItem;