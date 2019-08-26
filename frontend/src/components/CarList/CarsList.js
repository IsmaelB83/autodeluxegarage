/* Import node modules */
import React from 'react';
import { Row, Col } from 'reactstrap';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
/* Import own modules */
import { CustomCardLg } from '../CustomCard/CustomCard';
import { PopupGallery } from '../Gallery/PopupGallery';
/* Import assets */
import logo from '../../assets/img/spinner2.gif';
/* Import CSS */
import './CarsList.css';


// Temporal hasta tener la API
class CarsListAux extends React.Component {

    constructor(props) {
        super(props);
        this.gallery = React.createRef();
        this.carousel = React.createRef();
        this.state = {
            slides: 3,
            space: 20,
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateResolution.bind(this));
        this.updateResolution();
    }

    updateResolution() {
        let number = 1;
        if (window.innerWidth <= 700) number = 1;
        else if (window.innerWidth > 700 && window.innerWidth <= 1024) number = 2;
        else if (window.innerWidth > 1024) number = 3;
        this.setState(
            {
                slides: number,
                space: number === 1 ? 0 : number === 2 ? 10 : 20
            }
        )
    }

    render() {
        return (
            <Row className="cars-container">
                <Col xs="12">
                    {!this.props.loading &&
                        <Carousel
                            ref={this.carousel}
                            enableKeyboardControls={true}
                            autoplay={false}
                            pauseOnHover={true}
                            slideIndex={0}
                            slidesToShow={this.state.slides}
                            cellSpacing={5}
                            wrapAround={true}
                            renderCenterLeftControls={({ previousSlide }) => (
                                <button className="button-carousel" onClick={previousSlide}>{'\u25C4'}</button>
                            )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <button className="button-carousel" onClick={nextSlide}>{'\u25BA'}</button>
                            )}
                            renderTopCenterControls={({ currentSlide }) => (
                                <div>Anuncio {currentSlide + 1} de {this.props.cars.length}</div>
                            )}
                            renderBottomCenterControls={() => {}}
                        >
                            { this.props.cars.map((car) => {
                                return (
                                    <CustomCardLg
                                        key={car.id}
                                        index={car.id}
                                        url={car.url}
                                        image={car.image}
                                        name={car.name}
                                        text={car.text}
                                        oil={car.oil}
                                        shift={car.shift}
                                        kilometers={car.kilometers}
                                        cylinders={car.cylinders}
                                        power={car.power}
                                        year={car.year}
                                        price={car.price}
                                        brand={car.brand}
                                        onGalleryClick={this.openLightbox.bind(this)}
                                    />
                                )
                            })
                            }
                        </Carousel>
                    }
                    {this.props.loading &&
                        <div className="spinner">
                            <img src={logo} alt="loading..." />
                            <h3>Loading data...</h3>
                        </div>
                    }
                    { !this.props.loading && 
                      <PopupGallery ref={this.gallery} images={this.props.cars[0].images} />
                    }
                </Col>  
            </Row>
        );
    }

    openLightbox(e) {
        e.preventDefault();
        let index = '' + parseInt(e.currentTarget.dataset.index);
        for (let i = 0; i < this.props.cars.length; i++) {
            const car = this.props.cars[i];
            if (index === car.id) {
                this.gallery.current.setImages(car.images);
                this.gallery.current.showGallery();
            }
        }
    }

    closeLightbox(e) {
        e.preventDefault();
        this.gallery.current.closeGallery();
    }
}

// React-Redux
const mapState = (state) => {
    return {
        cars: state.cars,
        loading: state.loading,
        imagesCar: state.imagesCar,
    };
};
const CarsList = connect(mapState, null)(CarsListAux);
export default CarsList; 