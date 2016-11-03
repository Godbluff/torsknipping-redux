import React, {Component} from 'react';
import {connect} from 'react-redux';

class RowResults extends Component {
  render(){
    let stats = this.props.stats;
    let rowsOut = [];
    for(let i=0; i <=9; i++){
      let rowName = 'row' + (i+1);
      let shownumbers = this.props.stats.ticket[rowName].map((num, i) => <div key={i}>{num} </div>);
      rowsOut.push(
        <div className="col-lg-5ths" key={i}>
          <div className="statsbox">
            <div className="boxnumber">{i+1}</div>
            <div className="boxrow">{shownumbers}</div>
            <div className="statsbox-row">
              <div className="statsbox-header">Fortjeneste:</div>
              <div className="statsbox-entry">{stats.balance[rowName].profit}</div></div>
            <div className="statsbox-row">
              <div className="statsbox-header">Kostnad:</div>
              <div className="statsbox-entry">{stats.balance[rowName].cost}</div>
            </div>
            <div className="banner-left"></div><div className="banner-right"></div>
            <div className="banner">Balanse: {stats.balance[rowName].profitVsCost}</div>
          </div>
        </div>
      )
    }
    return(
      <div className="col-sm-12">
        {rowsOut}
      </div>
    )
  }
}

RowResults.propTypes = {
  stats: React.PropTypes.object,
  numbers: React.PropTypes.object

};

function mapStateToProps(state, ownProps){
  return {
    stats: state.stats,
    numbers: state.numbers
  };
}

export default connect(mapStateToProps) (RowResults);
