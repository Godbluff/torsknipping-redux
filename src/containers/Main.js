import React, { Component } from 'react';
import NumbersContainer from '../containers/NumbersContainer';
import '../styles/styles.css';
import ActionsContainer from '../containers/ActionsContainer';
import ThisWeek from '../containers/ThisWeek';
import Head from '../containers/Head';

class Main extends Component {
  render() {
    return (
      <div>
        <Head/>
        {this.props.children}
      </div>
    );
  }
}

export default Main;

