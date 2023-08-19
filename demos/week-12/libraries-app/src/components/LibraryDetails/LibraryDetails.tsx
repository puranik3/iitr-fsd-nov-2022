import { useEffect, useState } from 'react';
import { Alert, Row, Col, Image, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import GenresList from './GenresList/GenresList';
import Rating from '../utils/Rating/Rating';
import { getLibraryById } from '../../services/libraries';
import ILibrary from '../../models/ILibrary';

const baseUrl = process.env.REACT_APP_BASE_URL;

type Params = {
    id: string
};

const LibraryDetails = () => {
    const [ library, setLibrary ] = useState<ILibrary | null>(null);
    const [ error, setError ] = useState<Error | null>( null );
    const [ loading, setLoading ] = useState(true);
    
    // Known issue - Please check this for TS usage - https://github.com/remix-run/react-router/issues/8498
    const { id } = useParams<keyof Params>() as Params; // { id: '2' }

    useEffect(
        () => {
            const fetchLibrary = async () => {
                try {
                    const data = await getLibraryById( id );
                    setLibrary( data );
                } catch( error : any ) {
                    setError( error?.response?.data || error );
                } finally {
                    setLoading(false);
                }
            };

            fetchLibrary();
        },
        [ id ]
    );
    
    return ( 
        <>
            {
                loading && (
                    <div style={{ textAlign: 'center' }}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                )
            }
            {
                error && (
                    <Alert variant="danger">
                        {error.message}
                    </Alert>
                )
            }
            {
                library && (
                    <>
                        <Row>
                            <Col xs={12} lg={4}>
                                <Image
                                    src={`${baseUrl}${library?.imageUrl}`}
                                    fluid
                                />
                            </Col>
                            <Col xs={12} lg={8}>
                                {library?.description}
                                <p>
                                    <Rating value={library?.rating} numRatings={library?.noOfRatings} />
                                </p>
                            </Col>
                        </Row>
                        <GenresList id={id} />
                    </>
                )
            }
        </>
    );
}
 
export default LibraryDetails;