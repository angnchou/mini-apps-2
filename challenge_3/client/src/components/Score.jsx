import React from 'react';

const Score = props => {
  return (
    <div>
      <div>
        Frame: {props.frame}, Ball: {props.ball}
      </div>
    </div>
  );
};

export default Score;
