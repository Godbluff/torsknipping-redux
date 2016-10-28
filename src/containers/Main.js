import React, { Component } from 'react';
import NumbersContainer from '../containers/NumbersContainer';
import '../styles/styles.css';
import ActionsContainer from '../containers/ActionsContainer';
import ThisWeek from '../containers/ThisWeek';

class Main extends Component {
  render() {
    return (
      <div className="lotterybg">
        <ThisWeek/>
        <NumbersContainer />
        <ActionsContainer/>
      </div>
    );
  }
}

export default Main;

