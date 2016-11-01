import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as numbersActions from '../actions/numbersActions';

const Chance = require('chance');
const chance = new Chance();
const DummyStats = {
  "id": "ticket123",
  "registeredDate": "2016-10-21",
  "calcStartDate": "2005-01-21",
  "calcEndDate": "2016-10-27",
  "rows": 10,
  "drawings": 123,
  "drawingsWithWin": 23,
  "drawingsWithoutWin": 100,
  "rowsInDrawings": 1230,
  "rowsWithWin": 234,
  "balance": {
    "total": {
      "profit": 1000000,
      "cost": 12345,
      "profitVsCost": 987655
    },
    "rows": [
      {
        "rowNo": 7,
        "profit": 1000000,
        "cost": 1234,
        "profitVsCost": 987655,
        "winCount": 123
      },
      {
        "rowNo": 4,
        "profit": 1000,
        "cost": 1234,
        "profitVsCost": -11345,
        "winCount": 0
      }
    ]
  },
  "wins": [
    {
      "matchType": "7",
      "profit": 1000000,
      "drawing": {
        "date": "2015-01-10",
        "numbers": [1, 2, 3, 4, 5, 6, 7],
        "additionalNumbers": [8, 9],
        "pricePerRow": 3
      },
      "matchingRows": [
        {
          "rowNo": 4,
          "numbers": [1, 2, 3, 4, 5, 6, 7]
        }
      ]
    }
  ]
};


class AutoFill extends Component {
  constructor(props){
    super(props);
    this.preFill = this.preFill.bind(this);
  }

  preFill(){
    this.props.dispatch(numbersActions.resetNumbers());
    for(let i = 1; i <= 10; i++){
      let randomRow = chance.unique(chance.natural, 7, {min: 1, max: 34}).sort((a, b) => a - b);
      let rowName = 'row' + i;
      randomRow.map((num) => {
        this.props.dispatch(numbersActions.selectNumber(num, rowName));
      });
    }
    this.props.dispatch(numbersActions.importStats(DummyStats));
  }

  render(){
    return(
      <div className="element-inline bottom-button">
        <button className="button green" onClick={this.preFill}><span className="title">Automagisk utfylling</span><span className="price glyphicon glyphicon-refresh"></span></button>
      </div>
    );
  }
}

AutoFill.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(AutoFill);
