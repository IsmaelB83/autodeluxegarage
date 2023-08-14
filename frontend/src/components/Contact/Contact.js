/* Import node modules */
import React from 'react';
import MapContainer from '../Map/map';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';       
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
/* Import own modules */
import Button from '../Buttons/CustomButton';
import SectionTitle from '../Sections/SectionTitle';
/* Import css */
import './Contact.css';


export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        library.add(faMapMarkerAlt);
        library.add(faPhone);
        library.add(faEnvelope);
        this.state = {
        };
    }

    render() {
        return (
        <section id={this.props.id} className="about">
            <Container>
                <Row>
                    <Col xs="12">
                        <SectionTitle title="Contacta con nosotros"/>
                    </Col>
                    <Col xs="12" className="mt-1">
                        <Row>
                            <Col xs="12" md="6" lg="4" className="media">
                                <div className="media-left">
                                    <FontAwesomeIcon icon="map-marker-alt"/>
                                </div>
                                <div className="media-body">
                                    <h4>Dirección Oficinas</h4>
                                    <p>C. López Bravo, 7, NAVE 51</p>
                                    <p>09001 Burgos, España</p>
                                </div>
                            </Col>
                            <Col xs="12" md="6" lg="4" className="media">
                                <div className="media-left">
                                    <FontAwesomeIcon icon="phone"/>
                                </div>
                                <div className="media-body">
                                    <h4>Teléfonos de contacto</h4>
                                    <p><span>Movil:</span> <a href="tel:+34609072243">609 072 243</a></p>
                                </div>
                            </Col>
                            <Col xs="12" lg="4" className="media">
                                <div className="media-left">
                                    <FontAwesomeIcon icon="envelope"/>
                                </div>
                                <div className="media-body">
                                    <h4>Correo electrónico</h4>
                                    <p><a href="mailto: autodeluxegarage@hotmail.com">autodeluxegarage@hotmail.com</a></p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <div className="contact-map">
                        <MapContainer/>
                    </div>
                </Row>
            </Container>
        </section>
        );
    }
}
