import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDHsRVgazdb6_FsPosgQJj_CIT8LOcb0GE',
      authDomain: 'manager-78333.firebaseapp.com',
      databaseURL: 'https://manager-78333.firebaseio.com',
      projectId: 'manager-78333',
      storageBucket: 'manager-78333.appspot.com',
      messagingSenderId: '85067792062'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
