/* Import node modules */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
/* Import own modules */
import { TechLinks } from '../CircleLinks/CircleLinks';
import { CustomCardSm } from '../CustomCard/CustomCard';
/* Import assets */
import logo from '../../assets/img/spinner.gif';
/* Import css */
import './Footer.css';


class FooterAux extends React.Component {

    constructor(props) {
        super(props);
        library.add(faMapMarkerAlt);
        library.add(faPhone);
        library.add(faEnvelope);
    }
    
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col xs="12" sm="6" lg="5" className="footer-item mt-3 mt-lg-0">
                            <h2 className="title">Contactar</h2>
                            <p>Pongase en contacto con nosotros por los siguientes medios:</p>
                            <div className="footer-contact-block">
                                <FontAwesomeIcon icon="map-marker-alt"/>
                                <p><span>Dirección: </span>C/ Francisco Salinas, 89 - 09003. Burgos</p>
                            </div>
                            <div className="footer-contact-block">
                                <FontAwesomeIcon icon="envelope"/>
                                <p><span>E-Mail: </span><a href="mailto: autodeluxegarage@hotmail.com">autodeluxegarage@hotmail.com</a></p>
                            </div>
                            <div className="footer-contact-block">
                                <FontAwesomeIcon icon="phone"/>
                                <p><span>Teléfono: </span><a href="tel:+34947880490">947 880 490</a></p>
                            </div>
                            <div className="footer-contact-block">
                                <FontAwesomeIcon icon="phone"/>
                                <p><span>Teléfono: </span><a href="tel:+34600971762">600 971 762</a></p>
                            </div>
                            <div className="footer-contact-block">
                                <FontAwesomeIcon icon="phone"/>
                                <p><span>Teléfono: </span><a href="tel:+34609072243">609 072 243</a></p>
                            </div>
                        </Col>
                        <Col xs="12" sm="6" lg="3" className="footer-item links mt-3 mt-lg-0">
                            <h2 className="title">Links</h2>
                            <a className="footer-link" href={this.props.hrefs[0]} onClick={this.navigate.bind(this)}>Principal</a>
                            <a className="footer-link" href={this.props.hrefs[1]} onClick={this.navigate.bind(this)}>Vehículos</a>
                            <a className="footer-link" href={this.props.hrefs[2]} onClick={this.navigate.bind(this)}>Sobre nosotros</a>
                            <a className="footer-link" href={this.props.hrefs[3]} onClick={this.navigate.bind(this)}>Contactar</a>
                            <a className="footer-link" href={this.props.hrefs[4]} onClick={this.navigate.bind(this)}>Vendidos</a>
                            <a className="footer-link" href={this.props.hrefs[5]} onClick={this.navigate.bind(this)}>Política de cookies</a>
                        </Col>
                        { !this.props.loading && 
                            <Col xs="12" sm="12" lg="4" className="footer-item mt-3 mt-lg-0">
                                <h2 className="title">Coches recientes</h2>
                                <CustomCardSm 
                                    url={this.props.cars[0].url}
                                    image={this.props.cars[0].image}
                                    name={this.props.cars[0].name}
                                    published={this.props.cars[0].published}
                                    price={this.props.cars[0].price}
                                />
                                <CustomCardSm
                                    url={this.props.cars[1].url}
                                    image={this.props.cars[1].image}
                                    name={this.props.cars[1].name}
                                    published={this.props.cars[1].published}
                                    price={this.props.cars[1].price}
                                />
                                <CustomCardSm
                                    url={this.props.cars[2].url}
                                    image={this.props.cars[2].image}
                                    name={this.props.cars[2].name}
                                    published={this.props.cars[2].published}
                                    price={this.props.cars[2].price}
                                />
                            </Col>
                        }
                        { this.props.loading &&
                            <Col xs="12" sm="12" xl="4" className="footer-item mt-3 mt-md-0 text-center">
                                <h2 className="title">Coches recientes</h2>
                                <img className="spinner" src={logo} alt="loading..." />
                                <h3>Loading data...</h3>
                            </Col>
                        }
                    </Row>
                </Container>
                <Container className="footer-last mt-4">
                    <Row>
                        <Col xs="12">
                            <p>Página web desarrollada por Ismael Bernal <a href="mailto:ismaelbernal83@gmail.com">ismaelbernal83@gmail.com</a></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <TechLinks className="mt-3 justify-content-center" iconClass="social-icon-sm"/>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }

    navigate(e) {
        if (this.props.scrollTo && e.currentTarget.href.indexOf('#') !== -1) {
            e.preventDefault();
            this.props.scrollTo(e);
        }
    }
}
 
// React-Redux
const mapState = (state) => { 
    return { 
      cars: state.cars,
      loading: state.loading,
    };
};
const Footer = connect(mapState, null)(FooterAux)
export default Footer;