    /* Import node modules */
import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
/* Import own modules */
import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import Novedades from '../Novedades/Novedades';
import About from '../About/About';
import Testimonios from '../Testimonios/Testimonios';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import PageScroll from '../PageScroller/PageScroller';
import CookieConsent from '../CookiesConsent/CookiesConsent';
/* Import css */
import './Sections.css';


class HomeAux extends React.Component {
    
    constructor(props) {
        super(props);
        this.pageScroller = React.createRef(); 
        this.home = React.createRef();
        this.novedades = React.createRef();
        this.about = React.createRef();
        this.contacto = React.createRef();
        this.state = {
        };
    }
    
    render() {
        return (
            <div>
                <div className="landing-page" ref={this.home}>
                    <NavBar id="navbar" 
                            scrollTo={this.scrollTo.bind(this)}
                            hrefs={['#home', '#novedades', '#acerca', '#contacto', '/vendidos']}
                     />
                    <Hero id="hero" scrollTo={this.scrollTo.bind(this)} />
                </div>
                <Container>
                    <Novedades ref={this.novedades} id="novedades" onScroll={this.togglePageScroller.bind(this)} />
                    <About id="acerca" ref={this.about} />
                </Container>
                <Testimonios id="testimonio" /> 
                <Contact id="contacto" ref={this.contacto} />
                <Footer id="footer" 
                        scrollTo={this.scrollTo.bind(this)}
                        hrefs={['#home', '#novedades', '#acerca' ,'#contacto', '/vendidos', '/cookies']}
                />  
                <PageScroll id="pages-croller" ref={this.pageScroller} scrollTo={this.scrollTo.bind(this)} />
                <CookieConsent/>
            </div>
        );
    }
    
    togglePageScroller(e) { 
        if (e.currentPosition === 'below') {
            this.pageScroller.current.visible(false);
        } else {
            this.pageScroller.current.visible(true);
        } 
    }
    
    scrollTo(e){
        // Variables
        let ref, offset = 0, target;
        // Determinar destino
        try {
            target = e.target.href.split('#')[1];
        } catch (error) {
            target = 'home';
        }
        // Dependiendo del destino apunto al component react que corresponde
        switch(target) {
            case 'home':
                ref = this.home.current;
                break;
            case 'novedades':
                offset = -65;
                ref = this.novedades.current;
                break;
            case 'acerca':
                ref = this.about.current;
                offset = -55;
                break;
            case 'contacto':
                ref = this.contacto.current;
                offset = -55;
                break;
            default:
                ref = this.home.current;
                break;
        }
        // Animar el scroll to component
        scrollToComponent(ref, {
            offset: offset,
            align: 'top',
            duration: 750
        });
    }
}

// React-Redux
const mapState = (state) => { 
    return { 
        cars: state.cars,
        loading: state.loading,
    };
};
const Home = connect(mapState, null)(HomeAux);
export default Home;