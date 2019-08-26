/* Import node modules */
import React from 'react';
import { Waypoint } from 'react-waypoint';
import { Row, Col } from 'reactstrap';
/* Import own modules */
import CarList from '../CarList/CarsList';
/* Import css */
import './Novedades.css';

export default class Novedades extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <section id={this.props.id} className="novedades">
            <Row>
                <Col xs="12">
                    <Waypoint onPositionChange={this.onPositionChange.bind(this)} />
                </Col>                
            </Row>
            <CarList />
        </section>
        );
    }

    onPositionChange(e) {
        this.props.onScroll(e);
    }
}
