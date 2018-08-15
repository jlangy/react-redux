import React from 'react';
import ReactDOM from 'react-dom';

//This will be the container to auto reload
import { AppContainer} from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';

//redux provides a react provider to make store available to children
//without explicitly passing it (see https://reactjs.org/docs/context.html)
import { Provider } from 'react-redux';

import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import './styles/app.css';


const ADD = 'ADD';

//Action creators (could be imported)
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = createStore(messageReducer);

//prepare mappings to connect containing element to redux
const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

//connect App to redux
const Container = connect(mapStateToProps, mapDispatchToProps)(App);

//Use provider to get store, and connected
//container now has access to props and
//dispatch in relative mappings from connect function
class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};

//render app
ReactDOM.render(<AppWrapper/>, document.getElementById('app-container'));


//for hot reload. See docs (boilerplate)
module.hot.accept('./components/App.js', () => {
    render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedComponent />
        </Provider>
    </AppContainer>
    , container);
});

