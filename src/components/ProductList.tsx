import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import '../css/productlist.styles.css';
import { iCart } from '../interfaces/cart';
import { iProduct } from '../interfaces/products';

type Props = {
  productsList: iProduct[];
  onAddToCart: (product: iCart) => void;
};

const ProductList = ({ productsList, onAddToCart }: Props) => {
  const [amount, setAmount] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [maxAmount, setMaxAmount] = useState<number>(0);

  const getProductPrice = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const productName = e.currentTarget.value;
    const product = productsList.find(
      (product) => product.productName === productName
    );

    setPrice(product ? product.price : 0);
    setMaxAmount(product ? product.maxAmount : 0);
    setSelectedProduct(productName);
  };

  const computeCosts = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
    setCost(price * Number(e.currentTarget.value));
  };

  // prevent user from typing a number greater than maxAmount show color red if so
  const checkAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) > maxAmount) {
      e.currentTarget.style.color = 'red';
      alert(
        ` You cannot add more than ${maxAmount} for this products`
      );
    } else {
      e.currentTarget.style.color = 'black';
    }
  };

  return (
    <div className='productlist-container'>
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
      <Label for='amount'>
        {' '}
        <h6>Quantity</h6>
        <Input
          id='amount'
          type='range'
          onChange={computeCosts}
          onInput={checkAmount}
          min={1}
          max={maxAmount}
          disabled={!selectedProduct}
          maxLength={maxAmount}
        />
      </Label>
      <Input
        id='amount'
        type='number'
        onChange={computeCosts}
        aria-label='label for the input'
        value={amount}
        onInput={checkAmount}
        maxLength={maxAmount}
        min={1}
        max={maxAmount}
        disabled={!selectedProduct}
      />
      X {price} = {cost.toFixed(2)}
      <Button
        size='sm'
        aria-label='add to cart'
        role={'button'}
        onClick={() => {
          if (!selectedProduct) {
            alert('Please select a product');
          }

          onAddToCart({
            productName: selectedProduct,
            unitPrice: price,
            amount: amount,
            totalCost: cost,
          });
          setSelectedProduct('');
          setAmount(1);
          setCost(0);
          setMaxAmount(0);
          setPrice(0);
        }}
        disabled={!selectedProduct}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductList;
