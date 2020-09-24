import React from 'react';

function ProductRow(props) {
  return (
    <tr>
      <td>{props.details.name}</td>
      <td>{props.details.price}</td>      
    </tr>
  );
}

export default ProductRow;