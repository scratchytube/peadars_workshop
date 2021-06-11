import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from "@auth0/auth0-react"
import store from './redux/store'
import './index.css';
import App from './App';

// brian-patrick.us.auth0.com
// 230Hp2cnbMsdsMKxWV5jL4EzWNLR3P9u


ReactDOM.render(
    <Auth0Provider
    domain="brian-patrick.us.auth0.com"
    clientId="230Hp2cnbMsdsMKxWV5jL4EzWNLR3P9u"
    redirectUri={window.location.origin}
  >
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </Auth0Provider>
    ,document.getElementById('root')
);
