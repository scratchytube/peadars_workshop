import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ScrollTopTop from '../src/Components/ScrollToTop'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';
import App from './App';

ReactDOM.render(
        <BrowserRouter>
            <ScrollTopTop />
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    ,document.getElementById('root')
);
