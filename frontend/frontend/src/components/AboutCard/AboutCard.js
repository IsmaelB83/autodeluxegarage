/* Import node modules */
import React from 'react';
import { Waypoint } from 'react-waypoint';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* Import css */
import './AboutCard.css';


export default class AboutCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            animation: this.props.animation,
        };
    }

    render() {
        return (
            <div>
                <Waypoint onPositionChange={this.animate.bind(this)} />
                <div className={`about-card delay-03s ${this.state.animation} ${this.state.isVisible?'animated d-block':'hidden'}`} >
                    <i><FontAwesomeIcon icon={this.props.icon}/></i>
                    <h4>{this.props.title}</h4>
                    <p>{this.props.content}</p>
                </div>
            </div> 
        );
    }

    animate(e) {
        if (e.currentPosition === 'inside') {
            this.setState({isVisible: true})
        }
    }
}
