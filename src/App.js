import React from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const config =
    {
      apiKey: "AIzaSyDmSvqkEZ1smUcazC5PkPRbixeEWYAuiDs",
      authDomain: "forum-73a21.firebaseapp.com",
      databaseURL: "https://forum-73a21.firebaseio.com",
      projectId: "forum-73a21",
      storageBucket: "forum-73a21.appspot.com",
      messagingSenderId: "1068023669678",
      appId: "1:1068023669678:web:0f1bc15288734555"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }

  render() {
    return (
      <ThreadDisplay database={this.database} />
    );
  }
}

export default App;
