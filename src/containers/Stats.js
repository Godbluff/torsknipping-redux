import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as numbersActions from '../actions/numbersActions';
import '../styles/styles.css';
import ThisWeek from '../containers/ThisWeek';
import StatsOverview from '../containers/StatsOverview';

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
        "rowNo": 1,
        "profit": 1000,
        "cost": 1234,
        "profitVsCost": -11345,
        "winCount": 2
      },
      {
        "rowNo": 2,
        "profit": 0,
        "cost": 6578,
        "profitVsCost": -6578,
        "winCount": 0
      },
      {
        "rowNo": 3,
        "profit": 3486,
        "cost": 1234,
        "profitVsCost": 2345,
        "winCount": 4
      },
      {
        "rowNo": 4,
        "profit": 44,
        "cost": 2800,
        "profitVsCost": -2760,
        "winCount": 1
      },
      {
        "rowNo": 5,
        "profit": 1000,
        "cost": 1234,
        "profitVsCost": -11345,
        "winCount": 2
      },
      {
        "rowNo": 6,
        "profit": 1000,
        "cost": 1234,
        "profitVsCost": 9500,
        "winCount": 4
      },
      {
        "rowNo": 7,
        "profit": 0,
        "cost": 1234,
        "profitVsCost": -1234,
        "winCount": 0
      },
      {
        "rowNo": 8,
        "profit": 1000,
        "cost": 1234,
        "profitVsCost": -11345,
        "winCount": 0
      },
      {
        "rowNo": 9,
        "profit": 1000000,
        "cost": 1234,
        "profitVsCost": 9655,
        "winCount": 123
      },
      {
        "rowNo": 10,
        "profit": 1000,
        "cost": 12324,
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

class Stats extends Component {
  componentWillMount(){
    this.props.dispatch(numbersActions.importStats(DummyStats));
  }

  render() {
    return (
    <div className="col-sm-12 no-pad statoverview">
      <ThisWeek link={'/main'} linkText={'Tilbake til Nippetukongen'}/>
      <StatsOverview rows={10}/>
    </div>
    );
  }
}

Stats.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(Stats);
