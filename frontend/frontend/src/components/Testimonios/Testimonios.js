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
                    <h4>{this.props.author}</h4>
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
                {   quote: 'Les he comprado un Audi hace un mes y está perfecto de todo. Son muy profesionales y tienen buenos coches y mejores precios',
                    img: 'avatar1.jpg',
                    author: 'Juan Gomez'
                },
                {   quote: 'Buenos coches y buenos precios. Recomendable 100%',
                    img: 'avatar2.jpg',
                    author: 'Ivan Triana'
                },
                {   quote: 'Un trato inmejorable, y una alta calidad. Grandes profesionales, siempre cumplen con los plazos indicados',
                    img: 'avatar3.jpg',
                    author: 'Claudia Mazuela'
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
                                img={this.state.comentarios[this.state.actual].img}
                                author={this.state.comentarios[this.state.actual].author}
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