import React from 'react';
import Chart from 'chart.js';

class LineChart extends React.Component {
  componentDidMount() {
    this.renderChart();
  }

  //sort by dates just in case
  renderChart() {
    const labels = Object.keys(this.props.data).sort();
    const values = labels.map(label => this.props.data[label]);
    const node = document.getElementById('chart');
    this.chart = new Chart(node, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Bitcoin (BTC)',
            data: values,
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255,99,132,1)'],
            borderWidth: 1,
          },
        ],
      },
    });
  }

  render() {
    return <canvas id="chart" />;
  }
}
export default LineChart;
