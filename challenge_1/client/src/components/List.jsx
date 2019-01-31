import React from 'react';

const List = props => {
  return (
    <table>
      <tbody className="list">
        {props.data.map((item, index) => {
          return (
            <tr className="data" key={index}>
              <td className="detail">{item.date}</td>
              <td className="detail">{item.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;
