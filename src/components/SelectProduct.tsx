import React from 'react';
import { iProduct } from '../interfaces/products';

type Props = {
  productsList: iProduct[];
  getProductPrice: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedProduct: string;
};

const SelectProduct = ({
  productsList,
  getProductPrice,
  selectedProduct,
}: Props) => {
  return (
    <select
      aria-label='label for the select option'
      onChange={getProductPrice}
      value={selectedProduct}
    >
      {!selectedProduct && (
        <option value=''>{'Select a product'}</option>
      )}
      {productsList.map(({ id, productName }) => (
        <React.Fragment key={id}>
          {' '}
          <option value={productName}>{productName}</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default SelectProduct;
