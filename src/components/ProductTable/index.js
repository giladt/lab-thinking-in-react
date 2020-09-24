import React, {Fragment} from 'react';
import ProductRow from './ProductRow';
import { v4 as uuidv4 } from 'uuid';

function ProductTable(props) {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(product => <ProductRow details={product} key={uuidv4()}/>)}
        </tbody>
      </table>
    </Fragment>
  );
}

export default ProductTable;