import React, { Component } from 'react';
import '../styles/styles.css';
require('../favicon.ico');

class TippApp extends Component{

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default TippApp;
