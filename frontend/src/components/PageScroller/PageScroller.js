/* Import node modules */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
/* Import own modules */
import './PageScroller.css';


export default class PageScroller extends React.Component {

    constructor(props) {
        super(props);
        library.add(faChevronUp);
        this.state = {
            visible: true,
        };
    }

    visible(visible){
        this.setState( { visible: visible } )
    }
    
    render() {
        return (
            <a id="pagescroller" href="#home" className={this.state.visible===true?'d-block':'d-none'} onClick={this.props.scrollTo}>
                <FontAwesomeIcon icon="chevron-up" />
            </a>
        );
    }
}



