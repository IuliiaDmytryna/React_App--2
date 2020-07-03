import React from 'react';
import {Col, Row, Container} from 'reactstrap';
// import Header from '../header';
// import RandomChar from '../randomChar';
import CharDetails from '../charDetails';
import Header from '../header';
// import ItemList from '../itemList'


const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                    </Col>
                    <Col md='6'>
                        <CharDetails/>
                    </Col>
                </Row>
            </Container>
            </>
    );
};
export default App;