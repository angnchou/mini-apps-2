import React from 'react';

const Score = props => {
  return (
    <div>
      <div>
        Frame: {props.frame}, Ball: {props.ball} Score: {props.score}
        {props.gameOver ? 'Game Over!' : null}
      </div>
    </div>
  );
};

export default Score;
