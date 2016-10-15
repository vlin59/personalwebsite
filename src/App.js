import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js'


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
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
