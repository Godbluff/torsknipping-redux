import React from 'react';
import RowNumbers from './RowNumbers';

const RowListing = React.createClass({

  render(){
    //selectedNumbers passed from store. Max 7 Numbers.
    const selectedNumbers = this.props.selectRow;
    const numberstyle = "ball";
    const numberstyleAdd = "ball add";

    // Create Selected Number Elements.
    const numbersRow = selectedNumbers.map((elements, i) =>
        i <= 6
          ? <RowNumbers className={numberstyle} number={selectedNumbers[i]} key={i} />
          : <RowNumbers className={numberstyleAdd} number={selectedNumbers[i]} key={i} />
      );


    //DOM output of array
    return(
      <div className="text-center small-balls element-inline">
        {numbersRow}
      </div>
    );
  }
});

RowListing.propTypes = {
  selectRow: React.PropTypes.array
};

export default RowListing;
