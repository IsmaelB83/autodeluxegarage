/* Import node modules */
import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
/* Import own modules */
import { SocialLinks } from '../CircleLinks/CircleLinks';
import './NavBar.css';


class NavBarAux extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
        return (
        <Navbar id={this.props.id} dark expand="lg" className={`${this.props.hideNav?'navbar--hide':''} ${this.props.reduceNav?'navbar--reduced':''}`}>
            <Container>  
                <div className="navbar--first">
                    <NavbarBrand href={this.props.hrefs[0]} onClick={this.navigate.bind(this)}>
                        <img src={process.env.PUBLIC_URL + '/img/navbarbrand.jpg'} alt="logo" className="navbar-logo"></img>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                </div>
                <div className="navbar--last">
                    <SocialLinks className={`navbarsocial ${this.props.reduceNav || this.state.isOpen?'hide':''} mt-1`}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar className="justify-content-end w-100">
                            <NavItem>
                                <NavLink href={this.props.hrefs[1]} onClick={this.navigate.bind(this)}>Vehículos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={this.props.hrefs[4]} onClick={this.navigate.bind(this)}>Vendidos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={this.props.hrefs[2]} onClick={this.navigate.bind(this)}>Sobre nosotros</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={this.props.hrefs[3]} onClick={this.navigate.bind(this)}>Contactar</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Container>
        </Navbar>
        );
    }

    navigate(e) {
        if (this.props.scrollTo && e.currentTarget.href.indexOf('#') !== -1) {
            e.preventDefault();
            this.props.scrollTo(e);
        }
    }
}

// React-Redux
const mapState = (state) => { 
    return { 
        position: state.position,
        reduceNav: state.reduceNav,
        hideNav: state.hideNav,
    };
};
const NavBar = connect(mapState, null)(NavBarAux);
export default NavBar;