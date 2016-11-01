import React, {Component} from 'react';
import {connect} from 'react-redux';

class RowResults extends Component {
  render(){
    let stats = this.props.stats;
    let rowsOut = [];
    for(let i=0; i <=9; i++){
      let rowName = 'row' + (i+1);
      rowsOut.push(
        <div className="col-md-5ths" key={i}>
          <div className="statsbox">
            <div>Rekke {i+1}</div>
            <div>{this.props.numbers.row1}</div>
            <div>Resultat denne uke: 2 rette.</div>
            <div>Utbetaling denne uke: 0</div>
            <div>Total inntjening: {stats.balance.rows[i].profit}</div>
            <div>Total kostnad: {stats.balance.rows[i].cost}</div>
            <div>Balanse: {stats.balance.rows[i].profitVsCost}</div>
            <div>Antall utbetalinger: {stats.balance.rows[i].winCount}</div>
            <div>Høyeste utbetaling: 10.000</div>
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
    stats: state.numbers.stats,
    numbers: state.numbers
  };
}

export default connect(mapStateToProps) (RowResults);
