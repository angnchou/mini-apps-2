import React from 'react';
import $ from 'jquery';
import Input from './Input.jsx';
import Score from './Score.jsx';
import Frames from './Frames.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ball: 1,
      pinsDown: 0,
      frame: 1,
      frameScores: [],
      gameOver: false,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.getScore = this.getScore.bind(this);
  }

  handleSelect(numPins) {
    let newBall;
    let newPinsDown;
    let newFrame = this.state.frame;
    let newFrameScores = [...this.state.frameScores];
    let newGameOver = false;
    if (this.state.frame === 10) {
      switch (this.state.ball) {
        case 1:
          if (numPins === 10) {
            newPinsDown = 0;
          } else {
            newPinsDown = numPins;
          }
          newFrameScores.push([numPins]);
          newBall = 2;
          break;
        case 2:
          if (numPins + this.state.pinsDown === 10) {
            // spare
            newPinsDown = 0;
            newBall = 3;
          } else {
            newGameOver = true;
          }
          newFrameScores[9].push(numPins);
          break;
        case 3:
          newFrameScores[9].push(numPins);
          newGameOver = true;
          break;
      }
    } else if (this.state.ball === 1) {
      if (numPins === 10) {
        newBall = 1;
        newPinsDown = 0;
        newFrame++;
      } else {
        newBall = 2;
        newPinsDown = numPins;
      }
      newFrameScores.push([numPins]);
    } else {
      newBall = 1;
      newPinsDown = 0;
      newFrame++;
      newFrameScores[newFrameScores.length - 1][1] = numPins;
    }
    this.setState({
      ball: newBall,
      pinsDown: newPinsDown,
      frame: newFrame,
      frameScores: newFrameScores,
      gameOver: newGameOver,
    });
  }

  //where is next ball

  nextNextBallScore(index) {
    if (index === 9) {
      const lastFrame = this.state.frameScores[index];
      if (lastFrame.length === 3) {
        return lastFrame[2];
      } else {
        return 0;
      }
    }
    const nextFrame = index + 1;
    if (nextFrame >= this.state.frameScores.length) {
      return 0;
    }
    if (this.state.frameScores[nextFrame].length === 2) {
      return this.state.frameScores[nextFrame][1];
    }
    const nextNextFrame = nextFrame + 1;
    if (nextNextFrame < this.state.frameScores.length - 1) {
      return this.state.frameScores[nextNextFrame][0];
    }
    return 0;
  }

  getNextBallScore(index) {
    if (index === 9) {
      const lastFrame = this.state.frameScores[index];
      if (lastFrame.length > 1) {
        return lastFrame[1];
      } else {
        return 0;
      }
    }
    return index < this.state.frameScores.length - 1
      ? this.state.frameScores[index + 1][0]
      : 0;
  }

  getScore() {
    let total = 0;

    for (let i = 0; i < this.state.frameScores.length; i++) {
      let current = this.state.frameScores[i];

      const nextBallScore = this.getNextBallScore(i);

      total += current.reduce((acc, num) => acc + num, 0); // currentFrame
      if (current[0] === 10) {
        //if strike, add next two balls (maybe same or diff frames; maybe 2 frames so you can't add until after 2 frames later? )
        total += nextBallScore + this.nextNextBallScore(i);
      } else if (current.length > 1 && current[0] + current[1] === 10) {
        //if spare, add next ball in different frame
        total += nextBallScore;
      }
    }
    return total;
  }

  /*
  if ball is 1
    if strike
      newPinsDown = 0
    else
      ball = 2
      newPinsDown = numPins
    frames[frames.length] = [numPins]
  else
    newPinsDown = 0
    frames[frames.length - 1][1] = numPins

  //if second ball === spare
    //get three balls at frame 10
      //
  */

  render() {
    return (
      <div>
        {this.state.gameOver ? null : (
          <Input
            handleSelect={this.handleSelect}
            pinsDown={this.state.pinsDown}
          />
        )}
        <Score
          frame={this.state.frameScores.length}
          ball={this.state.ball}
          score={this.getScore()}
          gameOver={this.state.gameOver}
        />
        <Frames frameScores={this.state.frameScores} />
      </div>
    );
  }
}

export default App;
