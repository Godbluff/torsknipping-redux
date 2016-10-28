import React, { Component } from 'react';
import NumbersList from '../components/NumbersList';

class NumbersContainer extends Component{
  render(){
    return(
        <div className="rowbox-container text-center noselect">
          <NumbersList rowNumber={1} />
          <NumbersList rowNumber={2} />
          <NumbersList rowNumber={3} />
          <NumbersList rowNumber={4} />
          <NumbersList rowNumber={5} />
          <NumbersList rowNumber={6} />
          <NumbersList rowNumber={7} />
          <NumbersList rowNumber={8} />
          <NumbersList rowNumber={9} />
          <NumbersList rowNumber={10} />
        </div>
    );
  }
}

export default NumbersContainer;
