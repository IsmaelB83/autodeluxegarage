/* Import node modules */
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './assets/js/serviceWorker';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'; 
/* Import own modules */
import Home from './components/Sections/Home';
import Cookies from './components/Sections/Cookies';
import Vendidos from './components/Sections/Vendidos';
import { store, actions } from './Store';
/* Import css */
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './index.css';
/* Config */
const config = require('./config.json');

// Estructura de componentes react
let reactComp = <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/cookies' exact component={Cookies} />
                            <Route path='/vendidos' exact component={Vendidos} />
                            <Redirect to="/"/>
                        </Switch>
                    </Router>
                </Provider>;
ReactDOM.render( reactComp, document.getElementById('root'));

// Al hacer scroll se actualiza el store
window.addEventListener('scroll', (e) => { 
    store.dispatch(actions.setScroll(window.scrollY));
});

// Llamar a la API con el listado de coches en venta
retrieveCars();
async function retrieveCars() {
    let response = await fetch(config.api);
    if (response.status === 200) {
        let json = await response.json();
        store.dispatch(actions.setCars(json.results));
    }
}

// Service worker
serviceWorker.unregister();
