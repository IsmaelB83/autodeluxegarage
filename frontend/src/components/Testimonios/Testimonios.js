/* Import node modules */
import React from 'react';
import { Container } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
/* Import css */
import './Testimonios.css';

class Comentario extends React.Component {
 
    render() {
        return (
            <div className={`animated fast-05s ${this.props.animation}`}>
                <blockquote>{`❝ ${this.props.quote} ❞`}</blockquote>
                <div className="author">
                    <img className='d-none' src={process.env.PUBLIC_URL + `/img/avatars/${this.props.img}`} alt="testimonio" />
                    <h4><a href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.author}</a></h4>
                </div>
            </div>
        );
    }
}
    
export default class Testimonios extends React.Component {

    constructor(props) {
        super(props);
        library.add(faArrowAltCircleLeft);
        library.add(faArrowAltCircleRight);
        this.state = {
            animation: 'slideInUp',
            actual: 0,
            comentarios: [
                {   quote: 'Muy recomendado!!, trato 100 por 100 profesional y cercano . Solución de cualquier problema , ya sea mecánico o estético.  gente que sabe lo que hace y se ve que son profesionales',
                    author: 'Jesús Cañon',
                    link: 'https://g.co/kgs/WxCgLmo'
                },
                {   quote: 'Compré un Audi a6 avant  a capricho, muy buen trato de los propietarios del negocio, todo tipo de explicaciones y detalles a cerca del vehículo. Si te gusta este tipo de coches no hay duda que les comprarás uno.',
                    author: 'Fernando A.',
                    link: 'https://g.co/kgs/vZqZKNj'
                },
                {   quote: 'Acabo de comprar un Audi A6 Avant y va de cine ..la atención del personal ha sido estupenda, chico muy majo y atencioso. Lo recomiendo 100%',
                    author: 'Bruno Duarte',
                    link: 'https://g.co/kgs/v6xGxY3'
                },
                {   quote: 'Les he comprado un Audi A6 con kit RS6. Estado impecable y acabados que no he visto en ningun otro A6. La atencion ha sido perfecta. Los recomiendo sin ninguna duda',
                    author: 'Dani6oEPO_AGE',
                    link: 'https://g.co/kgs/J577iA9'
                },
                {   quote: 'Excelente la atención, explicaciones y dedicación de Jonathan, totalmente disponible, resolviendo las dudas que tenía, y realizando los cambios que queria. Si en el futuro necesito un vehículo, sin lugar a duda le contactaré de nuevo. Muy recomendable.',
                    author: 'Ruben CC',
                    link: 'https://g.co/kgs/oKw4VR2'
                },
                {   quote: 'Todo perfecto. Resolvió todas mis dudas. Un coche espectacular.',
                    author: 'Javi M.C',
                    link: 'https://g.co/kgs/HtSKS57'
                }
            ]
        };
    }

    componentDidMount (){
        /* To-Do: Cargar desde mongodb */
        /* Actualizar el estado y renderizar */
    }

    render() {
        return (
            <div className="testimonios-wrapper">
            <div id={this.props.id} className="testimonios" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/testimonios.jpg'})`}}>
                <div className="testimonios-overlap">
                    <Container>
                        <div className="testimonios-caroussel">
                            <Comentario 
                                animation={this.state.animation}
                                quote={this.state.comentarios[this.state.actual].quote}
                                author={this.state.comentarios[this.state.actual].author}
                                link={this.state.comentarios[this.state.actual].link}
                            />
                            <span className="caroussel-slider caroussel-slider-left" onClick={this.prevSlide.bind(this)}>
                                <FontAwesomeIcon icon="arrow-alt-circle-left" />
                            </span>
                            <span className="caroussel-slider caroussel-slider-right" onClick={this.nextSlide.bind(this)}>
                                <FontAwesomeIcon icon="arrow-alt-circle-right" />
                            </span>
                        </div>
                    </Container>
                </div>
            </div>
            </div>
        );
    }

    prevSlide(e) {
        let actual = this.state.actual - 1;
        this.setState( 
            {   animation: this.state.animation==='slideInUp'?'slideInDown':'slideInUp',
                actual: actual<0?this.state.comentarios.length-1:actual 
            }
        );
    }

    nextSlide(e) {
        let actual = this.state.actual + 1;
        this.setState( 
            {   animation: this.state.animation==='slideInUp'?'slideInDown':'slideInUp',
                actual: actual===this.state.comentarios.length?0:actual 
            }
        );
    }
}