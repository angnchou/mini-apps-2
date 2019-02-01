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
      .get('bitcoin', {
        params: { currency: 'BTC' },
      })
      .then(result => {
        this.setState({
          data: result.data,
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
