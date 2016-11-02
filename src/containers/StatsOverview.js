import React, {Component} from 'react';
import {connect} from 'react-redux';
import StatsChart from '../components/StatsChart';
import RowResults from './RowResults';

class StatsOverview extends Component {
  render(){
    let stats = this.props.stats;
    return(
      <div style={{'textAlign': 'center', 'display': 'block'}}>
        <h3>Resultater</h3>


        <div className="statsbox col-sm-12">
          <div style={{'display': 'inline-block', 'padding': '20px'}}>
            <div>Antall rekker: {stats.rows}</div>
            <div>Fullførte trekninger: {stats.drawings}</div>
            <div>Rekker med utbetalinger: {stats.rowsWithWin}</div>
          </div>
          <div style={{'display': 'inline-block', 'padding': '20px'}}>
            <div>Utbetaling: {stats.balance.total.profit}</div>
            <div>Kostnad: {stats.balance.total.cost}</div>
            <div>Overskudd: {stats.balance.total.profitVsCost}</div>
          </div>
          <div style={{'display': 'inline-block', 'padding': '20px'}}>
            <div>Trenkninger med utbetaling: {stats.drawingsWithWin}</div>
            <div>Trekninger uten utbetaling: {stats.drawingsWithoutWin}</div>
            <div>Rekker trukket: {stats.rowsInDrawings}</div>
          </div>
        </div>
        <div className="col-sm-12">
          <StatsChart/>
        </div>
        <RowResults/>
      </div>

    );
  }
}

StatsOverview.propTypes = {
  stats: React.PropTypes.object

};

function mapStateToProps(state, ownProps){
  return {
    stats: state.stats,
    numbers: state.numbers
  }
}

export default connect(mapStateToProps) (StatsOverview);
