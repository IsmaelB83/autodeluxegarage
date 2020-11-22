/* Import node modules */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
/* Import own modules */
import SectionTitle from './SectionTitle';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
/* Import css */
import './Sections.css';


const photos = [
    { src: `${process.env.PUBLIC_URL}/img/vendidos/1.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/3.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/4.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/5.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/6.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/7.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/8.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/9.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/10.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/11.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/12.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/13.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/14.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/15.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/16.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/17.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/18.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/19.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/20.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/21.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/22.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/23.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/24.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/25.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/26.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/27.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/28.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/29.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/30.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/31.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/32.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/33.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/34.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/35.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/36.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/37.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/38.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/39.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/40.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/41.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/42.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/43.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/44.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/45.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/46.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/47.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/48.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/49.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/50.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/51.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/52.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/53.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/54.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/55.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/56.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/57.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/58.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/59.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/60.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/61.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/62.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/63.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/64.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/65.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/66.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/67.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/68.jpg`, width: 4, height: 3 }];

export default class Vendidos extends React.Component {
    
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
                            <Gallery photos={photos} onClick={this.openLightbox} />
                                <Lightbox images={photos}
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