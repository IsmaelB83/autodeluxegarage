/* Import node modules */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
/* Import own modules */
import SectionTitle from './SectionTitle';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import CookieConsent from "../CookiesConsent/CookiesConsent";
/* Import css */
import './Sections.css';


export default class Cookies extends React.Component {
    
    constructor(props) {
        super(props);
        this.pageScroller = React.createRef(); 
        this.home = React.createRef();
        this.state = {
        };
    }
    
    render() {
        return (
            <div>
                <NavBar id="navbar" 
                        hrefs={['/', '/#novedades', '/#acerca' ,'/#contacto']}
                />                
                <Container className="contentCookies">
                    <Row>
                        <Col xs="12">
                            <SectionTitle title="Politica de Cookies" className="m-0"/>
                        </Col>
                        <Col xs="12">
                            <p className="cookiesText">
                                En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, 
                                de Servicios de la Sociedad de la Información y de Comercio Electrónico, esta página web
                                le informa, en esta sección, sobre la política de recogida y tratamiento de cookies.
                            </p>
                            <h3 className="cookiesTitle">¿QUÉ SON LAS COOKIES?</h3>
                            <p className="cookiesText">
                                Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web.
                                Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información
                                sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información 
                                que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario. 
                            </p> 
                            <h3 className="cookiesTitle">¿QUÉ TIPOS DE COOKIES UTILIZA ESTA PÁGINA WEB?</h3>
                            <p className="cookiesText">Esta página web utiliza los siguientes tipos de cookies:</p>
                            <ul className="cookiesText">
                                <li>
                                    <span>Cookies de análisis: </span> 
                                    Son aquéllas que bien tratadas por nosotros o por terceros, nos permiten cuantificar
                                    el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen losç
                                    usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de
                                    mejorar la oferta de productos o servicios que le ofrecemos.
                                </li>
                                <li>
                                    <span>Cookies técnicas: </span>
                                    Son aquellas que permiten al usuario la navegación a través del área restringida 
                                    y la utilización de sus diferentes funciones, como por ejemplo, llevar a cambio el proceso de 
                                    compra de un artículo.
                                </li>
                                <li>
                                    <span>Cookies de personalización: </span>
                                    Son aquellas que permiten al usuario acceder al servicio con algunas 
                                    características de carácter general predefinidas en función de una serie de criterios en el terminal 
                                    del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta 
                                    al servicio.
                                </li>
                            </ul>
                            <h3 className="cookiesTitle">DESACTIVAR LAS COOKIES.</h3>
                            <p className="cookiesText">
                                Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración
                                de las opciones del navegador instalado en su ordenador.
                            </p>
                            <p className="cookiesText">
                                En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar
                                las cookies instaladas en su equipo.
                            </p>
                            <p className="cookiesText">
                                A continuación puede acceder a la configuración de los navegadores webs más frecuentes para aceptar,
                                instalar o desactivar las cookies:
                            </p>
                            <ul className="cookiesText">
                                <li>
                                    <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">
                                        Configurar cookies en Google Chrome
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">
                                        Configurar cookies en Microsoft Internet Explorer
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer">
                                        Configurar cookies en Mozilla Firefox
                                    </a>
                                </li>
                                <li>
                                    <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                                        Configurar cookies en Safari (Apple)
                                    </a>
                                </li>
                            </ul> 
                            <h3 className="cookiesTitle">ADVERTENCIA SOBRE ELIMINAR COOKIES.</h3>
                            <p className="cookiesText">
                                Usted puede eliminar y bloquear todas las cookies de este sitio, pero parte del sitio no funcionará
                                o la calidad de la página web puede verse afectada.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Footer id="footer" 
                        hrefs={['/', '/#novedades', '/#acerca' ,'/#contacto', '/cookies']}
                />  
                <CookieConsent/>
            </div>
        );
    }
}