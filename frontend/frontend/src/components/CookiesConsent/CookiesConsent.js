/* Import node modules */
import React from 'react';
import CookieConsent from "react-cookie-consent";
/* Import own modules */
/* Import css */
import './CookiesConsent.css';


export default class CookiesConsent extends React.Component {
       
    render() {
        return (  
            <CookieConsent
                location="bottom"
                buttonText="Aceptar"
                disableStyles={true}
                cookieName="cookieWarning"
                expires={150}
                acceptOnScroll={true}
            >
                Esta web utiliza cookies para mejorar la experiencia de usuario
                <a href="/cookies">...política de cookies</a>
            </CookieConsent>
        );
    }
}