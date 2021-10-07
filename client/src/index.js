import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(

    //redux connect
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))