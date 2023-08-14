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
import loading from '../../assets/img/spinner2.gif';

const Vendidos = () => {

    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(true);

    React.useEffect(() => {
        fetchImages(images.count, 5);
    }, []);

    const fetchImages = () => {
        const current = images.length>0?images.length:0;
        fetch(`${process.env.REACT_APP_API}/sold?current=${current}&count=${10}`)
        .then(response => {
            if (response.status === 200) {
                response.json()
                .then (res => {
                    setImages([...images, ...res.results]);
                    setIsLoaded(true);
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
                        loader={<img src={loading} alt="loading" />}
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
                </Row>
            </Container>
            <Footer id="footer" hrefs={['/', '/#novedades', '/#acerca' ,'/#contacto', '/vendidos', '/cookies']}/>  
        </div>
  );
};

export default Vendidos;