import { useEffect, useMemo, useState } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import './css/buy.styles.css';
import './css/cart.styles.css';
import './css/clear-cart.styles.css';
import './css/progressbar.styles.css';

import ListProducts from './components/ListProducts';

import productsjson from './data/products.json';

import Header from './components/Header';
import ItemsInCart from './components/ItemsInCart';
import { iCart } from './interfaces/cart';
import { iProduct } from './interfaces/products';

function App() {
  const [productsList, setProductsList] = useState<iProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [cart, setCart] = useState<iCart[]>([]);
  const [limit, setLimit] = useState<number>(10);

  useEffect(() => {
    setProductsList(productsjson);
  }, [productsList]);

  useMemo(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      return acc + curr.unitPrice;
    }, 0);
    setTotal(totalPrice);
    setTax(totalPrice * 7);
    setSubtotal(totalPrice + tax);
  }, [cart, tax]);

  const addToCart = (product: iCart) => {
    const oldProduct = cart.find(
      (item) => item.productName === product.productName
    );
    let newCart: iCart[] = [];
    if (!oldProduct) {
      newCart = [...cart, product];
    } else {
      newCart = cart.map((item) => {
        if (item.productName === product.productName) {
          item.amount += product.amount;
          item.totalCost += product.totalCost;
        }
        return item;
      });
    }

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
    setLimit(10);
  };

  return (
    <Container className='App'>
      <Header cart={cart} />

      <ListProducts
        productsList={productsList}
        onAddToCart={addToCart}
      />

      <ItemsInCart
        cart={cart}
        removeFromCart={removeFromCart}
        subtotal={subtotal}
        tax={tax}
        total={total}
        clearCart={clearCart}
        limit={limit}
      />
    </Container>
  );
}

export default App;
