import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import './css/buy.styles.css';
import './css/cart-total.styles.css';
import './css/clear-cart.styles.css';
import './css/progressbar.styles.css';

import Buy from './components/Buy';
import CartProgressBar from './components/CartProgressBar';
import CartTable from './components/CartTable';
import ClearCart from './components/ClearCart';
import ProductList from './components/ProductList';

import productsjson from './data/products.json';

import { iCart } from './interfaces/cart';
import { iProduct } from './interfaces/products';
import { useDebounce } from './utils/useDebounce';

function App() {
  const [productsList, setProductsList] = useState<iProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [cart, setCart] = useState<iCart[]>([]);
  let [limit, setLimit] = useState<number>(10);
  const [totalItemPrice, setTotalItemPrice] = useState<number>(0);

  useEffect(() => {
    setProductsList(productsjson);
  }, []);

  const debouncedCost = useDebounce(totalItemPrice, 1000);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      return acc + curr.unitPrice;
    }, 0);
    setTotalItemPrice(totalPrice);
    setTotal(debouncedCost);
    setTax(debouncedCost * 7);
    setSubtotal(debouncedCost + tax);
  }, [cart, tax, debouncedCost]);

  const addToCart = (product: iCart) => {
    const newCart = [...cart, product];
    if (newCart.length > 10) {
      alert('You can add only 10 products to cart');
    } else {
      setCart(newCart);
      setLimit(limit - 1);
    }
  };

  const removeFromCart = (product: iCart) => {
    const newCart = cart.filter(
      (item) => item.productName !== product.productName
    );
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Container className='App'>
      <Row>
        <Col md='12' sm='12'>
          <header className='App-header'>
            <h1>B24 Shopping Cart</h1>
          </header>
        </Col>
      </Row>

      <Row>
        <Col sm={12}>
          <ProductList
            productsList={productsList}
            onAddToCart={addToCart}
          />
        </Col>
      </Row>

      {cart.length !== 0 ? (
        <>
          <Row>
            <Col>
              <h3>items in cart</h3>
              <CartTable
                removeFromCart={removeFromCart}
                cartItems={cart}
              />
            </Col>
          </Row>

          <Row>
            <Col md={12} sm={6}>
              <div className='cart-total-container'>
                <div className='cart-total-item'>
                  <p>
                    <strong>Cart items Limit: {limit}</strong>
                  </p>
                  <strong>Subtotal: </strong>{' '}
                  <span>{subtotal.toFixed(2)}</span>
                </div>
                <div className='cart-total-item'>
                  <strong className='font-weight-bold'>Tax: </strong>{' '}
                  <span>{tax.toFixed(2)}</span>
                </div>
                <div className='cart-total-item'>
                  <strong>Total: </strong>{' '}
                  <span>{total.toFixed(2)}</span>
                </div>
              </div>
              <div className='clear-cart-container'>
                <ClearCart cart={cart} clearCart={clearCart} />
                <div className='progressbar-container'>
                  <CartProgressBar cartItems={cart.length} />
                </div>
                <div className='buy-container'>
                  <Buy />
                </div>
              </div>
            </Col>
          </Row>
        </>
      ) : null}
    </Container>
  );
}

export default App;
