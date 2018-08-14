import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { AppContainer} from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

require('./index.html');

const container = document.getElementById('app-container');

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>,
    container
)

module.hot.accept('./components/App.js', () => {
    const NextRootContainer = require('./components/App.js').default;
    render(
    <AppContainer>
        <Provider store={store}>
            <NextRootContainer />
        </Provider>
    </AppContainer>
    , container);
});

