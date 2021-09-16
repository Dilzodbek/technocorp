import React from 'react';
import PropTypes from 'prop-types';
import { Alert , Container , Row ,Col} from 'reactstrap';
import './main.css';


class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
              <Container>
                   <Row>
                       <Col md="4">
                            <Alert color="danger">
                                Abdusattorov Dilzodbek
                            </Alert>
                       </Col>
                   </Row>
               </Container>
            </>
        );
    }
}

MyApp.propTypes = {};

export default MyApp;

