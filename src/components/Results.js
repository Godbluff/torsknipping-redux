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
  1: [3,7,8,16,21,28,33,11],
  2: [2,6,12,15,17,28,32,22]
};
const scoreRow  = [];
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
    let correctAdds = 0;
    DummyResult[1].map((num, i)=>{
      if(row.includes(num) && i <= 6){ correctNumbers++; }
      if(row.includes(num) && i > 6){ correctAdds++; }
    });
    return [correctNumbers, correctAdds];

  }

  resultsGenerator(){
    divOut = [];
    for(let i = 1; i <= 10; i++){
      let rowName = 'row' + i;
      scoreRow.push(this.rowChecker(this.props.numbers[rowName]));
      const checkResult = this.rowChecker(this.props.numbers[rowName]);
      divOut.push(<div key={i}> {'Denne uken ville rekke ' + i} hatt {checkResult[0]} rette og {checkResult[1]} tillegstall. Dette gir {Math.pow(checkResult[0], checkResult[0])} poeng.</div>);
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

Results.propTypes = {
  numbers: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers
  };
}

export default connect(mapStateToProps) (Results);
