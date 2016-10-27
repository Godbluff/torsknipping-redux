import React, {Component} from 'react';
import {connect} from 'react-redux';
import RowListing from '../containers/RowListing';

// Method for checking the 'length' of the results object. This might be needed when comparing multiple results to lottery rows.
Object.size = function(obj) {
  let size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

// Get the size of an object
//let size = Object.size(myArray);
// end check.

// Some dummy data for testing.
const DummyResult = {
  1: [3,7,8,16,21,28,33],
  2: [2,6,12,15,17,28,32]
};

const sampleRow = [2,6,15,12,21,27,33];
let scoreRow  = [];
let divOut = [];

class Results extends Component {
  constructor(){
    super();
    this.rowChecker = this.rowChecker.bind(this);

  }

  //Validator
  //Check each row against the current winning numbers and post result.
  //Check each row against historical winning number and distribute score based on results
  //
  // Odds: 1 rett: 2.60, 2 rette: 3.17, 3 rette: 8.76, 4 rette: 52.55, 5 rette: 729.84, 6 rette: 28463, 7 rette: 5379616
  rowChecker(row){
    let correctNumbers = 0;
    DummyResult[2].map((num)=>{
      if(row.includes(num)){correctNumbers++}
    });
    return correctNumbers;

  }

  resultsGenerator(){
    divOut = [];
    for(let i = 1; i <= 10; i++){
      let rowName = 'row' + i;
      scoreRow.push(this.rowChecker(this.props.numbers[rowName]));
      divOut.push(<div> {rowName} has {this.rowChecker(this.props.numbers[rowName])} correct numbers.</div>);
    }
  }

  render(){
    this.resultsGenerator();
    return(

      <div style={{'textAlign': 'center'}}>
        <RowListing selectRow={DummyResult[1]}/>
        {divOut}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers
  };
}

export default connect(mapStateToProps) (Results);
