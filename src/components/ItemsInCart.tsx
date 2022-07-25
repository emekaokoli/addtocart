import { Col, Row } from 'reactstrap';
import { iCart } from '../interfaces/cart';
import Buy from './Buy';
import CartProgressBar from './CartProgressBar';
import CartTable from './CartTable';
import ClearCart from './ClearCart';
import TotalPriceOfItemsInCart from './TotalPriceOfItemsInCart';

type Props = {
  cart: iCart[];
  removeFromCart: (product: iCart) => void;
  subtotal: number;
  tax: number;
  total: number;
  clearCart: () => void;
  limit: number;
};

const ItemsInCart = ({
  cart,
  removeFromCart,
  subtotal,
  tax,
  total,
  clearCart,
  limit,
}: Props) => {
  return (
    <>
      {cart.length !== 0 ? (
        <>
          <h3 className='cart-text-right'>items in cart</h3>
          <CartTable
            removeFromCart={removeFromCart}
            cartItems={cart}
          />

          <Row>
            <Col md={12} sm={6}>
              <TotalPriceOfItemsInCart
                subtotal={subtotal}
                tax={tax}
                total={total}
                limit={limit}
              />

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
    </>
  );
};

export default ItemsInCart;
