import React, { Component } from 'react';
import NumbersContainer from '../containers/NumbersContainer';
import '../styles/styles.css';
import ActionsContainer from '../containers/ActionsContainer';
import ThisWeek from '../containers/ThisWeek';

class Lotto extends Component {
  render() {
    return (
      <div className="lotterybg">
        <ThisWeek link={'main/stats'} linkText={'Se Rekkestatistikk'}/>
        <NumbersContainer />
        <ActionsContainer/>
      </div>
    );
  }
}

export default Lotto;

