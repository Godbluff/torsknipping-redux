import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/styles.css';
import Chart from '../components/Chart';

const chartOptions2 = {
  chart: {
    type: 'bar',
    height: 300,
    borderRadius: 20
  },
  title: {
    text: 'Kost nytte for rekkene'
  },
  xAxis: [{
    categories: ['1','2','3','4','5','6','7','8','9','10'],
    reversed: false,
    labels: {
      step: 1
    }
  }, { // mirror axis on right side
    opposite: true,
    reversed: false,
    categories: ['1','2','3','4','5','6','7','8','9','10'],
    linkedTo: 0,
    labels: {
      step: 1
    }
  }],
  yAxis: {
    tickPositioner: function () {

      var maxDeviation = Math.ceil(Math.max(Math.abs(this.dataMax), Math.abs(this.dataMin)));
      var halfMaxDeviation = Math.ceil(maxDeviation / 2);

      return [-maxDeviation-100, -halfMaxDeviation-50, 0, halfMaxDeviation+15, maxDeviation+100];
    },
    title: {
      text: null
    }
  },

  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },

  series: [{
    name: 'Profittmargin',
    data: []
  }]

};



class ChartContainer extends Component {
  componentWillMount(){
    chartOptions2.series[0].data = [];
    // Insert new stats
    for(let i = 0; i <= 9; i++){
      let rowName = 'row' + (i+1);
      chartOptions2.series[0].data.push(this.props.stats.balance[rowName].profitVsCost);
    }
  }

  componentWillUpdate(){
    chartOptions2.series[0].data = [];
    // Insert new stats
    for(let i = 0; i <= 9; i++){
      let rowName = 'row' + (i+1);
      chartOptions2.series[0].data.push(this.props.stats.balance[rowName].profitVsCost);
    }
  }

  render(){
    return (
      <div style={{'borderRadius': '20px'}} className="col-sm-12">
        <Chart container={'highchart2'} options={chartOptions2}/>
      </div>
    );
  }
}

ChartContainer.propTypes = {
  stats: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    stats: state.stats
  };
}

export default connect(mapStateToProps) (ChartContainer);
