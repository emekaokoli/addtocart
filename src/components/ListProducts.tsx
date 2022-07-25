import { useMemo, useState } from 'react';
import { Col, Label, Row } from 'reactstrap';

import '../styles/productlist.styles.css';

import AddToCart from './AddToCart';
import InputField from './common/Input/Input';
import SelectProduct from './SelectProduct';

import { iCart } from '../interfaces/cart';
import { iProduct } from '../interfaces/products';
import { useDebounce } from '../utils/useDebounce';

type Props = {
  productsList: iProduct[];
  onAddToCart: (product: iCart) => void;
};

const ListProducts = ({ productsList, onAddToCart }: Props) => {
  const [amount, setAmount] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [maxAmount, setMaxAmount] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const getProductPrice = useMemo(() => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      const productName = e.currentTarget.value;
      const product = productsList.find(
        (product) => product.productName === productName
      );

      setPrice(product ? product.price : 0);
      setMaxAmount(product ? product.maxAmount : 0);
      setSelectedProduct(productName);
      setCost(product ? product.price : 0);
    };
  }, [productsList]);

  const computeCosts = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
    setCost(price * Number(e.currentTarget.value));
  };

  const checkAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) < 1) {
      setError(true);
    }
    if (Number(e.currentTarget.value) > maxAmount) {
      e.currentTarget.style.color = 'red';
      setError(true);
    } else {
      e.currentTarget.style.color = 'black';
      setError(false);
    }
    setError(false);
  };

  const handleOnblur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (Number(e.currentTarget.value) < maxAmount) {
      e.currentTarget.style.color = 'black';
      setError(false);
    }
    if (Number(e.currentTarget.value) < 1) {
      setError(true);
    }
    setError(false);
  };

  return (
    <Row>
      <Col md={12} sm={12}>
        <div className='productlist-container'>
          <div className='first-input-section'>
            <SelectProduct
              productsList={productsList}
              getProductPrice={getProductPrice}
              selectedProduct={selectedProduct}
            />
            <Label for='amount'>
              {' '}
              <h6>Quantity</h6>
              <InputField
                id='amount'
                type='range'
                onChange={computeCosts}
                ariaLabel='label for the range option'
                maxLength={maxAmount}
                min={1}
                max={maxAmount}
                disabled={!selectedProduct}
              />
            </Label>
          </div>
          <div className='second-input-section'>
            <InputField
              id='amount-input'
              type='number'
              onChange={computeCosts}
              ariaLabel='label for the input'
              onInput={checkAmount}
              maxLength={maxAmount}
              value={amount}
              min={1}
              max={maxAmount}
              disabled={!selectedProduct}
              onBlur={handleOnblur}
              invalid={error || amount < 1}
            />
            <span>
              {' '}
              X {price} = {useDebounce(cost, 1000).toFixed(2)}
            </span>
            <AddToCart
              amount={amount}
              cost={cost}
              onAddToCart={onAddToCart}
              selectedProduct={selectedProduct}
              price={price}
              error={error}
              setSelectedProduct={setSelectedProduct}
              setAmount={setAmount}
              setPrice={setPrice}
              setCost={setCost}
              setMaxAmount={setMaxAmount}
            />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ListProducts;
