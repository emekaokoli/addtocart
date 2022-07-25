import { iCart } from '../interfaces/cart';
import '../styles/clear-cart.styles.css';
import Button from './common/button/Button';

type Props = {
  cart: iCart[];
  clearCart: () => void;
};

const ClearCart = ({ cart, clearCart }: Props) => (
  <Button
    size='sm'
    className='clearcart-button'
    onClick={clearCart}
    disabled={cart.length === 0}
    role={'clear cart button'}
    aria-label='clear cart button'
    children={'Clear cart'}
  />
);

export default ClearCart;
