import React from 'react';
import RowNumbers from './RowNumbers';

const RowListing = React.createClass({

  render(){
    //selectedNumbers passed from store. Max 7 Numbers.
    const selectedNumbers = this.props.selectRow;
    const numberstyle = "ball";

    // Create Selected Number Elements.
    const numbersRow = selectedNumbers.map((elements, i) =>
        <RowNumbers className={numberstyle} number={selectedNumbers[i]} key={i} />
      );

    //DOM output of array
    return(
      <div className="col-sm-12 text-center">
        <h2>Vinnertall</h2>
        {numbersRow}
      </div>
    );
  }
});

RowListing.propTypes = {
  selectRow: React.PropTypes.array,
  className: React.PropTypes.string.isRequired,
  number: React.PropTypes.number.isRequired,
  key: React.PropTypes.number.isRequired
};

export default RowListing;
