/* Import node modules */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
/* Import own modules */
import SectionTitle from './SectionTitle';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
/* Import css */
import './Vendidos.css';
/* Import assets */
import spinner from '../../assets/img/spinner2.gif';

const Vendidos = () => {

    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);
    const [loading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetchImages(images.count, 5);
    }, []);

    const fetchImages = () => {
        const current = images.length>0?images.length:0;
        setIsLoading(true);
        fetch(`${process.env.REACT_APP_API}/sold?current=${current}&count=${10}`)
        .then(response => {
            if (response.status === 200) {
                response.json()
                .then (res => {
                    setImages([...images, ...res.results]);
                    setIsLoaded(true);
                    setIsLoading(false);
                    setHasMore(!res.end);
                })
            } 
        })
        .catch(error => {
            console.log(error)
        })
    };

    // Return JSX
    return (
        <div className="contentVendidos">
            <NavBar id="navbar" hrefs={['/', '/#novedades', '/#acerca' ,'/#contacto', '/vendidos']} />
            <Container>
                <Row>
                    <Col xs="12">
                        <SectionTitle title="Vehículos vendidos" className="m-0"/>
                    </Col>
                    <Col xs="12">
                    <InfiniteScroll
                        dataLength={images}
                        next={() => fetchImages()}
                        hasMore={hasMore}
                    >
                        <div className="image-grid" style={{ marginTop: "30px" }}>
                            {loaded && images.map((image, index) => (
                                <div className="image-item" key={index} >
                                    <a href={image} target="_blank" rel="noopener noreferrer">
                                        <img src={image} alt={image} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </InfiniteScroll>
                    </Col>
                    { loading &&
                        <Col xs="12" sm="12" xl="4" className="footer-item mt-3 mt-md-0 text-center">
                            <img className="spinner" src={spinner} alt="loading..." />
                        </Col>
                    }
                </Row>
            </Container>
            <Footer id="footer" hrefs={['/', '/#novedades', '/#acerca' ,'/#contacto', '/vendidos', '/cookies']}/>  
        </div>
  );
};

export default Vendidos;