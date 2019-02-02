import React from 'react';

const inputUi = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 0]];
const notSelectable = {
  color: 'rgba(72, 72, 72, 0.25)',
};

const Input = props => {
  return (
    <div>
      <table>
        <tbody>
          {inputUi.map((row, index) => (
            <tr key={index}>
              {row.map(num =>
                props.pinsDown + num <= 10 ? (
                  <td
                    key={num}
                    style={{ cursor: 'pointer' }}
                    onClick={() => props.handleSelect(num)}
                  >
                    {num}
                  </td>
                ) : (
                  <td style={notSelectable}>{num}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Input;
