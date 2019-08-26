/* Import node modules */
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter, CardTitle } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump, faCarBattery, faCarSide,faRoad, faCalendarAlt, faFlagCheckered, faCameraRetro, faLink } from '@fortawesome/free-solid-svg-icons'
/* Import own modules */
import './CustomCard.css';


export class CustomCardLg extends React.Component {

    constructor(props) {
        super(props);
        library.add(faGasPump);
        library.add(faCarSide);
        library.add(faRoad);
        library.add(faCarBattery);
        library.add(faCalendarAlt);
        library.add(faFlagCheckered);
        library.add(faCameraRetro);
        library.add(faLink);
        this.card = React.createRef();
        this.state = {
            isVisible: false
        };
    }

    render() {
        return (
            <div ref={this.card}>
                <Card className="card card--lg">
                    <div className="card-thumbnail">
                        <a href="https://www.coches.net/concesionario/autodeluxegarage/" target="_blank" rel="noopener noreferrer">
                            <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                            <div className="card-listing-price">
                                <span>{this.props.price}</span>
                            </div>
                        </a>
                        <a className="card-corner" href="/" onClick={this.props.onGalleryClick} data-index={this.props.index} anchor="">
                            <FontAwesomeIcon icon="camera-retro"/>
                        </a>
                    </div>
                    <CardBody className="card-body">
                        <CardTitle>
                            <h5><a href="https://www.coches.net/concesionario/autodeluxegarage/" target="_blank" rel="noopener noreferrer">
                            {this.props.name}
                            </a></h5>
                        </CardTitle>
                        <CardText>
                            <a href="https://www.coches.net/concesionario/autodeluxegarage/" target="_blank" rel="noopener noreferrer">
                                <img src="https://s.ccdn.es/images/logo-coches.svg" alt="coches.net" className="logo-coches-net"></img>
                            </a>    
                        </CardText>
                    </CardBody>
                    <CardFooter className="card-footer">
                        <ul>
                            <li><FontAwesomeIcon icon="gas-pump"/><span>{this.props.oil}</span></li>
                            <li><FontAwesomeIcon icon="car-battery"/><span>{this.props.shift}</span></li>
                            <li><FontAwesomeIcon icon="road"/><span>{this.props.kilometers}</span></li>
                            <li><FontAwesomeIcon icon="flag-checkered"/><span>{this.props.brand }</span></li>
                            <li><FontAwesomeIcon icon="car-side"/><span>{this.props.power}</span></li>
                            <li><FontAwesomeIcon icon="calendar-alt"/><span>{`AÑO ${this.props.year}`}</span></li>
                        </ul>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export class CustomCardSm extends React.Component {

    render() {
        return (
        <div className="card card--xs">
            <img src={this.props.image} alt="Card" className="card-thumbnail card-thumbnail--xs" />
            <div className="card-body--xs">
                <h5><a href="https://www.coches.net/concesionario/autodeluxegarage/" /*{this.props.url}*/ target="_blank" rel="noopener noreferrer">{`${this.props.name.substring(0,25)}...`}</a></h5>
                {/* <small className="text-muted font-weight-bold">{this.props.published}</small> */}
                <p className="font-weight-bold">{this.props.price}</p>
            </div>
        </div>
        );
    }
}



                