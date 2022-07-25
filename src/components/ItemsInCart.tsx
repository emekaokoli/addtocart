import { iCart } from '../interfaces/cart';
import Buy from './Buy';
import CartProgressBar from './CartProgressBar';
import CartTable from './CartTable';
import ClearCart from './ClearCart';
import TotalPriceOfItemsInCart from './TotalPriceOfItems';

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
          <CartTable
            removeFromCart={removeFromCart}
            cartItems={cart}
          />

          <TotalPriceOfItemsInCart
            subtotal={subtotal}
            tax={tax}
            total={total}
            limit={limit}
          />

          <div className='clear-cart-container'>
            <ClearCart cart={cart} clearCart={clearCart} />
            <CartProgressBar cartItems={cart.length} />
            <Buy />
          </div>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};

export default ItemsInCart;
