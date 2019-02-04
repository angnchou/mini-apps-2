import React from 'react';
import $ from 'jquery';
import Input from './Input.jsx';
import Score from './Score.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 1,
      ball: 1,
      pinsDown: 0,
      frameScores: [],
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(numPins) {
    // const newBall = null;
    // const newFrame = null;
    if (numPins === 10) {
      newBall = 2;
      newFrame = this.state.frame + 1;
    } else {
      newBall = 1;
      newPinsDown = numPins;
    }
    const newPinsDown = null;
    this.setState({
      frame: newFrame,
      ball: newBall,
      pinsDown: newPinsDown,
    });
  }

  render() {
    return (
      <div>
        <Input
          handleSelect={this.handleSelect}
          pinsDown={this.state.pinsDown}
        />
        <Score
          frame={this.state.frame}
          ball={this.state.ball}
          pinsDown={this.state.pinsDown}
          countScore={this.countScore}
        />
      </div>
    );
  }
}

export default App;
