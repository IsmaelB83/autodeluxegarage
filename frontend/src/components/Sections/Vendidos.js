/* Import node modules */
import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
/* Import own modules */
import SectionTitle from './SectionTitle';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
/* Import css */
import './Sections.css';

class VendidosAux extends React.Component {
    
    constructor(props) {
        super(props);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.state = {
            currentImage: 0
        };
    }    

    openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    
    render() {
        return (
            <div className="contentVendidos">
                <NavBar id="navbar" 
                        hrefs={['/', '/#novedades', '/#acerca' ,'/#contacto', '/vendidos']}
                />                
                <Container>
                    <Row>
                        <Col xs="12">
                            <SectionTitle title="Vehículos vendidos" className="m-0"/>
                        </Col>
                        <Col xs="12">
                            <Gallery photos={this.props.soldCars} onClick={this.openLightbox} />
                                <Lightbox images={this.props.soldCars}
                                onClose={this.closeLightbox}
                                onClickPrev={this.gotoPrevious}
                                onClickNext={this.gotoNext}
                                currentImage={this.state.currentImage}
                                isOpen={this.state.lightboxIsOpen}
                            />
                        </Col>
                    </Row>
                </Container>
                <Footer id="footer" 
                        hrefs={['/', '/#novedades', '/#acerca' ,'/#contacto', '/vendidos', '/cookies']}
                />  
            </div>
        );
    }
}

// React-Redux
const mapState = (state) => { 
    return { 
        soldCars: state.soldCars,
    };
};
const Vendidos = connect(mapState, null)(VendidosAux);
export default Vendidos;