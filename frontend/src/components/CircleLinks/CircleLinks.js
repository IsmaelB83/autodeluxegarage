/* Import node modules */
import React from 'react';
/* Import own modules */
import './CircleLinks.css';

export class SocialLinks extends React.Component {

    render() {
        return (
            <div className={`social-icons-panel ${this.props.className}`}>
                <CircleLink url="https://www.instagram.com/autodeluxegarage_/" img="social/instagram.png" className={`social-icon`}/>
                <CircleLink url="https://www.coches.net/concesionario/autodeluxegarage/" img="social/cochesnet.png" className={`social-icon`}/>
                <CircleLink url="whatsapp://send?phone=600971762" img="social/whatsapp.png" className={`social-icon`}/>
                    <a href="tel:+34600971762" className="social-phone">Tel. 609072243</a>
            </div>
        );
    }
}

export class TechLinks extends React.Component {

    render() {
        return (
            <div className={`${this.props.className} social-icons-panel`}>
                <CircleLink url="https://www.mongodb.com/" img="tech/mongo.png" className={`social-icon inner-border`}/>
                <CircleLink url="https://expressjs.com/" img="tech/express.png" className={`social-icon inner-border`}/>
                <CircleLink url="https://reactjs.org/" img="tech/react.png" className={`social-icon inner-border`}/>
                <CircleLink url="https://nodejs.org/en/" img="tech/node.png" className={`social-icon inner-border`}/>
            </div>
        );
    }
}

export class CircleLink extends React.Component {
    render() {
        return(
            <a href={this.props.url} target="_blank" rel="noopener noreferrer" className={this.props.className}>
                    <img src={`${process.env.PUBLIC_URL}/img/${this.props.img}`} alt="social-icon" />
            </a>
        );
    }
}