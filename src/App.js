import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'
import 'babel-polyfill'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
