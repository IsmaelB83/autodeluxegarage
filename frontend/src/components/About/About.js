/* Import node modules */
import React from 'react';
import { Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobeEurope, faShieldAlt, faHandshake, faTools } from '@fortawesome/free-solid-svg-icons'
/* Import own modules */
import SectionTitle from '../Sections/SectionTitle'
import AboutCard from '../AboutCard/AboutCard';
/* Import css */
import './About.css';


export default class About extends React.Component {

    constructor(props) {
        super(props);
        library.add(faGlobeEurope);
        library.add(faShieldAlt);
        library.add(faHandshake);
        library.add(faTools);
        this.state = {
        };
    }

    render() {
        return (
            <section id={this.props.id} className="about">
                <Row>
                    <Col xs="12">
                        <SectionTitle 
                            title="Quiénes somos" 
                            content="Somos una empresa Burgalesa expertos en compra, venta e importación de automóviles de gama alta. 
                            En menos de 10 días puedes tener el vehículo de tus sueños, con todos los extras y a un precio inmejorable."/>  
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="6" lg="3" xl="3">
                        <AboutCard animation="fadeInLeft" icon="shield-alt" title="Garantía de 12 meses" 
                                   content="Nuestros vehículos disponen de una garantía total de 12 meses"/>
                    </Col>
                    <Col xs="12" sm="6" lg="3" xl="3">
                        <AboutCard animation="fadeInLeft" icon="tools" title="Kilómetros Certificados" 
                                   content="Todos ellos disponen de certificado de kilometraje, y revisiones en servicios oficiales"/>
                    </Col>
                    <Col xs="12" sm="6" lg="3" xl="3">
                        <AboutCard animation="fadeInRight" icon="globe-europe" title="Expertos en Importación"
                                   content="En menos de 10 días puedes tener el vehículo de tus sueños, con todos los extras y a un precio inmejorable"/>
                    </Col>
                    <Col xs="12" sm="6" lg="3" xl="3">
                        <AboutCard animation="fadeInRight" icon="handshake" title="Operamos en todo España"
                                   content="Trabajamos en todo el territorio nacional. No dudes en contactarnos para obtener más información"/>
                    </Col>
                </Row>
            </section>
        );
    }
}
