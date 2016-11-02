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
      chartOptions2.series[0].data.push(this.props.stats.balance.rows[i].profitVsCost);
    }
  }

  componentWillUpdate(){
    chartOptions2.series[0].data = [];

    // Insert new stats
    for(let i = 0; i <= 9; i++){
      chartOptions2.series[0].data.push(this.props.stats.balance.rows[i].profitVsCost);
    }
  }

  render(){
    return (
      <div style={{'borderRadius': '20px'}} className="col-sm-4">
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
