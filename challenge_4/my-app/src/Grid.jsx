import React from 'react';
import ValueConstants from './ValueConstants.js';

const Grid = props => {
  return (
    <table>
      <tbody>
        {props.grid.map((row, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {row.map((box, colIndex) => {
                return (
                  <td
                    key={colIndex}
                    onClick={() => props.handleClick(rowIndex, colIndex)}
                    className={getClassName(box, props.gameOver)}
                  >
                    {''}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const getClassName = (value, gameOver) => {
  if (gameOver && ValueConstants.VALUE_MINE === value) {
    return 'mine';
  }
  if (ValueConstants.VALUE_FLAT === value) {
    return 'flat';
  } else {
    return 'box';
  }
};

export default Grid;
