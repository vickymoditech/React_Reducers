import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware,createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers/index';
import promise from 'redux-promise'
// step - 1 npm install -save-dev redux-logger
// step - 2 import logger from 'redux-logger'
// step - 3 import {applyMiddleware,createStore} from 'redux';


// step - 4
const middleware = applyMiddleware(promise,logger);
const store = createStore(reducers,middleware);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
