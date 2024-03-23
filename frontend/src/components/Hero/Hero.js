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
                <h1 className="fadeInDown animated"><strong>TENEMOS</strong> EL COCHE DE TUS <span>SUEÑOS</span> <strong>HOY</strong></h1>
                <div className="hero-panel-text">
                   <p className="fadeInUp animated">
                    <cite>Concesionario de vehículos premium. Especializados en Audi A6 Avant. Personalizamos tu coche a la carta. Ofrecemos financiación a medida y aceptamos coche como parte del pago.❞</cite>
                   </p>
                </div>
                <div className="hero-buttons">
                    <Link className="btn-main btn-orange btn-orange-active btn-block btn-md-inline mr-md-3" href="#novedades" onClick={this.props.scrollTo} title="En venta" size="lg"/>
                    <Link className="btn-main btn-orange btn-block btn-md-inline mr-md-3" href="/vendidos" onClick={this.props.scrollTo} title="Vendidos" size="lg"/>
                    <Link className="btn-main btn-orange btn-block btn-md-inline" href="/#acerca" onClick={this.props.scrollTo} title="Sobre nosotros" size="lg"/>
                </div>
            </div>
        </div>
        );
    };
}