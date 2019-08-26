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
                        <SectionTitle title="Contacta con nosotros"
                        //  content={`Puede ponerse en contacto con nosotros escribiendo un mail a 
                        //  <a href="mailto: autodeluxegarage@hotmail.com">autodeluxegarage@hotmail.com</a>, o través de los teléfonos:    
                        //  <a href="tel:+34947880490">947 880 490</a>, <a href="tel:+34600971762">600 971 762</a> o
                        //  <a href="tel:+34609072243">609 072 243</a>`}
                        />
                    </Col>
                    <Col xs="12" lg="8">
                        <Form className="form-contacto d-none">
                            <Row form>
                                <Col xs="12" lg="6">
                                    <FormGroup>
                                        <Input type="nombre" name="nombre" placeholder="Su nombre" required disabled/>
                                    </FormGroup>                    
                                </Col>
                                <Col xs="12" lg="6">
                                    <FormGroup>
                                        <Input type="phone" name="phone" placeholder="Su teléfono" disabled/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col xs="12">
                                    <FormGroup>
                                        <Input type="email" name="email" placeholder="Su email" required disabled/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col xs="12" lg="12">
                                    <FormGroup>
                                        <Input type="textarea" name="text" placeholder="Su mensaje" disabled/>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col xs="12">
                                    <FormGroup>
                                        <Button className="btn-main btn-orange btn-orange-active btn-block btn-main-md btn-disabled" title="Enviar"/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col xs="12" className="mt-1">
                        <Row>
                            <Col xs="12" md="6" lg="4" className="media">
                                <div className="media-left">
                                    <FontAwesomeIcon icon="map-marker-alt"/>
                                </div>
                                <div className="media-body">
                                    <h4>Dirección Oficinas</h4>
                                    <p>C/ Francisco Salinas, 89</p>
                                    <p>09003 - Burgos</p>
                                </div>
                            </Col>
                            <Col xs="12" md="6" lg="4" className="media">
                                <div className="media-left">
                                    <FontAwesomeIcon icon="phone"/>
                                </div>
                                <div className="media-body">
                                    <h4>Teléfonos de contacto</h4>
                                    <p><span>Oficina:</span> <a href="tel:+34947880490">947 880 490</a></p>
                                    <p><span>Movil:</span> <a href="tel:+34600971762">600 971 762</a></p>
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
