import React, { Component } from 'react';
import Navigation from './android/app/src/telas/Navigation.js';
import { LogBox } from 'react-native' 
LogBox.ignoreAllLogs();

class App extends Component{
  render() {
      return(
      <Navigation/>
      );
  }
}


export default App;