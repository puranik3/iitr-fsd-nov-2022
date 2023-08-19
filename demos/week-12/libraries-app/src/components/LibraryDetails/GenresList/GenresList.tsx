import { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";

import IBookList from "../../../models/IGenre";
import { getGenres } from "../../../services/genres";

type Props = {
    id : number | string
};

const GenresList = ( { id } : Props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [items, setItems] = useState<IBookList[]>([])
    const [error, setError] = useState<Error | null>(null)
    const [show, setShow] = useState<boolean>(false)

    useEffect(
        () => {
            const fetchGenres = async () => {
                try {
                    const data = await getGenres( id );
                    setItems( data );
                }
                catch (error : any) {
                    setError( error?.response?.data || error )
                }
                finally {
                    setLoading( false );
                }
            }

            fetchGenres();
        },
        []
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
                items && (
                    <>
                        <hr />
                        <h3>Famous Genres in this Library</h3>
                        {
                            items.map (
                                ( {id, name, description, imageUrl}) => (
                                    <Row key={id} className="my-3">
                                        <Col xs={6} lg={3}>
                                            <img src={`${process.env.REACT_APP_BASE_URL}${imageUrl}`} 
                                                alt={name}
                                                className="w-100"
                                            />
                                        </Col>
                                        <Col xs={6} lg={9}>
                                            <h5>{name}</h5>
                                            <div className="my-2 text-sm">{description}</div>
                                        </Col>
                                    </Row>
                                )
                            )
                        }
                    </>
               )
            }
        </>
    )
}

export default GenresList;