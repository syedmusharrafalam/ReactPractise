import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyC00bi8c4ISNNafJIMH-NMYAhehIq7II6w",
    authDomain: "reacttodoapp-c36f7.firebaseapp.com",
    databaseURL: "https://reacttodoapp-c36f7.firebaseio.com",
    projectId: "reacttodoapp-c36f7",
    storageBucket: "",
    messagingSenderId: "465248636968"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
