import React from 'react';
import './TableRow.scss';

const TableRow = ({ leftCol, rightCol }) => (

  <tr className="row">

    <td className="row__data row__data_left">{ leftCol }</td>

    <td className="row__data row__data_right">{ rightCol }</td>

  </tr>

);

export default TableRow;
