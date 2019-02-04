import React from 'react';

const Frames = props => {
  return (
    <table>
      <tbody>
        <tr>
          {props.frameScores.map((frame, index) => {
            return (
              <td className="score" key={index}>
                {frame[0] +
                  (frame.length > 1 ? '  |  ' + frame[1] : '') +
                  (frame.length > 2 ? '  |  ' + frame[2] : '')}
              </td>
            );
          })}
        </tr>
        <tr />
      </tbody>
    </table>
  );
};

export default Frames;
