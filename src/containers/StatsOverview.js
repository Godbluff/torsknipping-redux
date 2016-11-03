import React, {Component} from 'react';
import {connect} from 'react-redux';
import StatsChart from '../components/StatsChart';
import RowResults from './RowResults';
import Chart from '../components/Chart';

let winPercentageOptions = {
  chart: {
    type: 'gauge',
    plotBorderWidth: 1,
    plotborderRadius: 20,
    plotBackgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
      stops: [
        [0, '#FFF4C6'],
        [0.3, '#FFFFFF'],
        [1, '#FFF4C6']
      ]
    },
    plotBackgroundImage: null,
    height: 150,
    borderRadius: 20,
    backgroundColor: null,
  },

  title: {
    text: ''
  },

  pane: [{
    startAngle: -45,
    endAngle: 45,
    background: null,
    center: ['25%', '165%'],
    size: 300
  }, {
    startAngle: -45,
    endAngle: 45,
    background: null,
    center: ['75%', '165%'],
    size: 300
  }],

  tooltip: {
    enabled: false
  },

  yAxis: [{
    min: 0,
    max: 100,
    minorTickPosition: 'outside',
    tickPosition: 'outside',
    labels: {
      rotation: 'auto',
      distance: 20
    },
    plotBands: [{
      from: 0,
      to: 100,
      color: 'green',
      innerRadius: '100%',
      outerRadius: '105%'
    }],
    pane: 0,
    title: {
      text: '% av rekker<br/>med utbetaling<span style="font-size:8px"></span>',
      y: -40
    }
  }, {
    min: 0,
    max: 100,
    minorTickPosition: 'outside',
    tickPosition: 'outside',
    labels: {
      rotation: 'auto',
      distance: 20
    },
    plotBands: [{
      from: 0,
      to: 100,
      color: 'red',
      innerRadius: '100%',
      outerRadius: '105%'
    }],
    pane: 1,
    title: {
      text: '% av rekker<br/>uten utbetaling<span style="font-size:8px"></span>',
      y: -40
    }
  }],

  plotOptions: {
    gauge: {
      dataLabels: {
        enabled: false
      },
      dial: {
        radius: '100%'
      }
    }
  },


  series: [{
    name: 'Channel A',
    data: [9.7],
    yAxis: 0
  }, {
    name: 'Channel B',
    data: [90.3],
    yAxis: 1
  }]
};

class StatsOverview extends Component {
  render(){
    let stats = this.props.stats;
    let resultHeader = stats.balance.total.profitVsCost > -1 ? 'har du tjent' : 'har du tapt';
    let resultBg =  stats.balance.total.profitVsCost > -1 ? 'green' : 'red';
    let resultTxt =  stats.balance.total.profitVsCost > -1 ? 'white' : 'black';
    let potentialOutcome = Math.abs(stats.balance.total.profitVsCost);
    winPercentageOptions.series[0].data[0] = stats.drawsWithWinPct;
    winPercentageOptions.series[1].data[0] = stats.drawsWithoutWinPct;

// <StatsChart/> was removed from the page (for now).

    return(
      <div style={{'textAlign': 'center', 'display': 'block'}}>
        <h3>Resultater</h3>
        <div className="col-lg-12">
          <Chart container="vupct" options={winPercentageOptions}/>
        </div>
        <div className="statsbox col-sm-12">

          <div className="overview-box">
            <div>Antall rekker: {stats.rowCount}</div>
            <div>Fullførte trekninger: {stats.drawCount}</div>
            <div>Rekker med utbetalinger: {stats.rowsWithWin}</div>
          </div>
          <div className="overview-box">
            <div>Utbetaling: {stats.balance.total.profit}</div>
            <div>Kostnad: {stats.balance.total.cost}</div>
            <div>Overskudd: {stats.balance.total.profitVsCost}</div>
          </div>
          <div className="overview-box">
            <div>Trenkninger med utbetaling: {stats.drawsWithWinCount}</div>
            <div>Trekninger uten utbetaling: {stats.drawsWithoutWinCount}</div>
            <div>Rekker trukket: {stats.rowsInDraws}</div>
          </div>
          <div style={{'display': 'inline-block', 'padding': '20px', 'height': '100%', 'background' : resultBg, 'color' : resultTxt}}>
            <div>Siden 1986<br/>{resultHeader}</div>
            <div>{potentialOutcome} penger</div>
          </div>
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
