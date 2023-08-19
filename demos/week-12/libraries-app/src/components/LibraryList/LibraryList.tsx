import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { getLibraries } from '../../services/libraries';
import ILibrary from '../../models/ILibrary';
import LibraryListItem from './LibraryListItem/LibraryListItem';

const LibraryList = () => {
    const [ libraries, setLibraries ] = useState<ILibrary[]>([]);

    useEffect(
        () => {
            const fetchLibraries = async () => {
                const data = await getLibraries();
                setLibraries( data );
            };

            fetchLibraries();

            // cleanup function
            // return () => {

            // }
        },
        []
    );
    
    return ( 
        <>
            <Row xs={1} md={2} lg={3}>
            {
                libraries.map(library => (
                    <Col className="my-3 d-flex">
                        <LibraryListItem
                            key={library.id}
                            library={library}
                        />
                    </Col>
                ))
            }
            </Row>
        </>
    );
}
 
export default LibraryList;