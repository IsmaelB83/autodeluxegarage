/* Import node modules */
import React from 'react';
import {isMobile} from 'react-device-detect';
/* Import own modules */
import './Hero.css';
import Link from '../Buttons/CustomLink'


export default class Hero extends React.Component {

    constructor(props) {
        super(props);
        let imagenes = [], animations = ['rubberBand', 'lightSpeedIn', 'shake', 'jello'];  
        /* Imagenes del hero panel dependiendo del dispositivos*/
        if (isMobile) {
            imagenes.push('hero1_mb.jpg');
            imagenes.push('hero2_mb.jpg');
            imagenes.push('hero3_mb.jpg');
            imagenes.push('hero4_mb.jpg');
        } else {
            imagenes.push('hero1.jpg');
            imagenes.push('hero2.jpg');
            imagenes.push('hero3.jpg');
            imagenes.push('hero4.jpg');
        }
        /* Imagenes random */
        let random = Math.floor(Math.random() * 4);  
        this.state = {
            cont: random,
            image: `${process.env.PUBLIC_URL}/img/hero/${imagenes[random]}`,
            animation: animations[random]
        }
    }

    render() {
        return (
        <div className="hero">
            <img className={`hero-img ${this.state.animation} animated`} src={this.state.image} alt="hero" />
            <div className="hero-content">
                <h1 className="fadeInDown animated"><span>TENEMOS</span> EL COCHE DE TUS <span>SUEÑOS</span></h1>
                <div className="hero-panel-text">
                    <h2 className="fadeInUp animated">Visite el catálogo completo de nuestros vehículos en</h2>
                    <a href="https://www.coches.net/concesionario/autodeluxegarage/" target="_blank" rel="noopener noreferrer">
                        <img src="https://s.ccdn.es/images/logo-coches.svg" alt="coches.net" className="logo-coches-net"></img>
                    </a>
                    <p className="fadeInUp animated d-none d-lg-block"><cite>Elige modelo, color, año, kms y extras. En menos de 10 días puedes tener el coche que estas buscando a un precio inmejorable. Y con garantía total de un año, en todos nuestros vehículos❞</cite></p>
                </div>
                <div className="hero-buttons">
                    <Link className="btn-main btn-orange btn-orange-active btn-xs-inline" href="#novedades" onClick={this.props.scrollTo} title="Vehículos" size="lg"/>
                    <Link className="btn-main btn-orange btn-xs-inline" href="#acerca" onClick={this.props.scrollTo} title="Sobre nosotros" size="lg"/>
                </div>
            </div>
        </div>
        );
    };
}