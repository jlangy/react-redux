import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { AppContainer} from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import addMessage from './reducer/actions' 

const ADD = 'ADD';
const store = createStore(reducer);

require('./index.html');

const container = document.getElementById('app-container');
const ConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(App);


ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedComponent />
        </Provider>
    </AppContainer>,
    container
);

const mapStateToProps = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message));
      }
    }
  };


module.hot.accept('./components/App.js', () => {
    render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedComponent />
        </Provider>
    </AppContainer>
    , container);
});

