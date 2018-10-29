import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from "redux-thunk";

let devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
if (process.env.NODE_ENV) {
    devTools = a => a;
}
const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk),
        devTools
    ));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
