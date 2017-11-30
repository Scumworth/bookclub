// index.js

import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = { store }>
        <ConnectedRouter history = { history }>
            <div>
                <App 
                    baseUrl = "https://calm-mountain-71385.herokuapp.com/api"
                />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

//baseUrl hardcoded above change when deploying
//registerServiceWorker();

