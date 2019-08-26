/* Import node modules */
import React from 'react';
/* Import css */
import './Sections.css';


export default class SectionTitle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={`main-title ${this.props.className}`}>
                <h1 className="main-title-h1">{this.props.title}</h1>
                { this.props.content !== "" && <p className="main-title-p" dangerouslySetInnerHTML={{ __html: this.props.content }} /> }
            </div>
        );
    }
}
