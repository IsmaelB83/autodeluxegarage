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
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_1.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_2.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_3.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_4.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_5.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_6.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_7.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_8.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_9.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_10.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_11.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_12.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_13.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_14.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_15.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_16.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_17.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_18.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_19.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_20.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_21.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_22.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_23.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_24.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_25.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_26.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_27.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_28.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_29.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_30.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_31.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_32.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_33.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_34.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_35.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_36.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_37.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_38.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_39.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2020_40.jpeg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_1.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_2.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_3.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_4.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_5.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_6.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_7.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_8.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_9.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_10.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_11.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_12.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_13.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_14.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_15.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_16.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_17.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_18.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_19.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_20.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_21.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_22.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_23.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_24.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_25.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_26.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_27.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_28.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_29.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_30.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_31.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_32.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_33.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_34.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_35.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_36.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_37.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_38.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_39.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_40.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_41.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_42.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_43.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_44.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_45.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_46.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_47.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_48.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_49.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_50.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_51.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_52.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_53.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_54.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_55.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_56.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_57.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_58.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_59.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_60.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_61.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_62.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_63.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_64.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_65.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_66.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_67.jpg`, width: 4, height: 3 },
    { src: `${process.env.PUBLIC_URL}/img/vendidos/2019_68.jpg`, width: 4, height: 3 }];

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