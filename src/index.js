import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import firebase from 'firebase/app';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import Valorant from './pages/valorant';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCZol02JLnwOOnA1sjROZrGZRrdDq5DI94',
  authDomain: 'ardent-seeker-239101.firebaseapp.com',
  databaseURL: 'https://ardent-seeker-239101.firebaseio.com',
  projectId: 'ardent-seeker-239101',
  storageBucket: 'ardent-seeker-239101.appspot.com',
  messagingSenderId: '509985049710',
  appId: '1:509985049710:web:7e4e6645993c8e9ded2a7f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Router basename='/'>
      <Switch>
        <Route exact path='/valorant'>
          <Valorant />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
