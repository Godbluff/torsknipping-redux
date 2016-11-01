import React, { Component } from 'react';
import '../styles/styles.css';
import Head from '../containers/Head';

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
