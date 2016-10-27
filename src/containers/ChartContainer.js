import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/styles.css';
import Chart from '../components/Chart';

const chartOptions = {
  chart: {
    type: 'column',
    height: 300
  },
  title: {
    text: 'Talldistribusjon'
  },
  subtitle: {
    text: 'Kilde: Dine nippetukongrekker.'
  },
  xAxis: {
    categories: [
      '1','2','3','4','5','6','7','8','9',
      '10','11','12','13','14','15','16','17','18','19',
      '20','21','22','23','24','25','26','27','28','29',
      '30','31','32','33','34'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rekker'
    },
    maxStaggerLines: 1,
    allowDecimals: false,
    labels: {
      step: 1
    }
  },

  series: [{
    animation: false,
    name: 'Tallgjentagelse',
    data: [
      ['1', 0],
      ['2', 0],
      ['3', 0],
      ['4', 0],
      ['5', 0],
      ['6', 0],
      ['7', 0],
      ['8', 0],
      ['9', 0],
      ['10', 0],
      ['11', 0],
      ['12', 5],
      ['13', 0],
      ['14', 0],
      ['15', 0],
      ['16', 0],
      ['17', 0],
      ['18', 0],
      ['19', 0],
      ['20', 0],
      ['21', 0],
      ['22', 0],
      ['23', 0],
      ['24', 0],
      ['25', 0],
      ['26', 0],
      ['27', 0],
      ['28', 0],
      ['29', 0],
      ['30', 0],
      ['31', 0],
      ['32', 0],
      ['33', 0],
      ['34', 0]
    ]
  }]

};

class ChartContainer extends Component {

  render(){
    // Destroy previous stats.
    for(let i = 0; i <= 33; i++){
      chartOptions.series[0].data[i][1] = 0;
    }

    // Insert new stats
    for(let i = 1; i <= 10; i++){
      let rowName = 'row' +i;
      this.props.numbers[rowName].map((num)=> {
        let oldVal = chartOptions.series[0].data[num - 1][1];
        chartOptions.series[0].data[num - 1][1] = oldVal + 1;
      });
    }

    return (
      <div className="col-sm-8 jumbotron" style={{'height': '400px'}}>
        <Chart container={'highchart'} options={chartOptions}/>
      </div>
    );
  }
}

ChartContainer.propTypes = {
  numbers: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    numbers: state.numbers
  };
}

export default connect(mapStateToProps) (ChartContainer);
