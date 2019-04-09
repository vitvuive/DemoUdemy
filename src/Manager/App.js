import React, { Component } from 'react';
import firebase from '@firebase/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducer';
import Router from './Router';
export default class App extends Component {
 componentWillMount() {
  // connect to firebase
  firebase.initializeApp({
   apiKey: 'AIzaSyDXQFbvCSfbjKKZOBGZuv6kKZIVBuvOE7k',
   authDomain: 'demoudemy-8dd65.firebaseapp.com',
   databaseURL: 'https://demoudemy-8dd65.firebaseio.com',
   projectId: 'demoudemy-8dd65',
   storageBucket: 'demoudemy-8dd65.appspot.com',
   messagingSenderId: '429068600220'
  });
 }

 render() {
  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
   <Provider store={store}>
    <Router />
   </Provider>
  );
 }
}
