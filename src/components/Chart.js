import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighChartsMore from 'highcharts/highcharts-more';
HighChartsMore(Highcharts);

class Chart extends Component {
  constructor(props) {
    super(props);
  }
  // When the DOM is ready, create the chart.
  componentDidMount() {
    this.chart = new Highcharts[this.props.type || "Chart"](
      this.props.container,
      this.props.options
    );
  }
  componentDidUpdate(){
   this.chart = new Highcharts[this.props.type || "Chart"](
      this.props.container,
      this.props.options
    );
  }
  //Destroy chart before unmount.
  componentWillUnmount() {
    this.chart.destroy();
  }
  //Create the div which the chart will be rendered to.
  render() {
    return React.createElement('div', { id: this.props.container });
  }
}

Chart.propTypes = {
  container: React.PropTypes.string.isRequired,
  options: React.PropTypes.object.isRequired,
  type: React.PropTypes.string
};

export default Chart;
