import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import './index.css';

//redux, react-redux bindings and middelware 
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';


//reducers
import {reducers} from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);