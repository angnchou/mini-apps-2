import React from 'react';
import Chart from './Chart.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    axios
      .get('https://api.coindesk.com/v1/bpi/historical/close.json', {
        params: { currency: 'BTC' },
      })
      .then(result => {
        this.setState({
          data: result.data.bpi,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //make sure chart doesn't render without data
  render() {
    return (
      <div>
        {Object.keys(this.state.data).length ? (
          <Chart data={this.state.data} />
        ) : null}
      </div>
    );
  }
}

export default App;
