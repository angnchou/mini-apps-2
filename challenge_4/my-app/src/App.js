import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.jsx';
import ValueConstants from './ValueConstants';

const GRID_SIZE = 10;

const NUM_MINES = 10;

const placeMine = grid => {
  let row;
  let col;
  do {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * 10);
  } while (grid[row][col] !== ValueConstants.VALUE_EMPTY);
  grid[row][col] = ValueConstants.VALUE_MINE;
};

class App extends Component {
  constructor(props) {
    super(props);
    const grid = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      grid.push(new Array(GRID_SIZE).fill(ValueConstants.VALUE_EMPTY));
    }
    for (let i = 0; i < NUM_MINES; i++) {
      placeMine(grid);
    }
    this.state = {
      grid: grid,
      gameOver: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(rowI, colI) {
    if (this.state.gameOver) {
      return;
    }
    if (this.state.grid[rowI][colI] === ValueConstants.VALUE_MINE) {
      this.setState({
        gameOver: true,
      });
    } else {
      const newGrid = [...this.state.grid];
      newGrid[rowI][colI] = ValueConstants.VALUE_FLAT;
      this.setState({
        grid: newGrid,
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Grid
          grid={this.state.grid}
          handleClick={this.handleClick}
          gameOver={this.state.gameOver}
        />
      </div>
    );
  }
}

export default App;
