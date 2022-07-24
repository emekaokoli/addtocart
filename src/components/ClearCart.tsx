import { Button } from 'reactstrap';
import '../css/clear-cart.styles.css';
import { iCart } from '../interfaces/cart';

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
  >
    Clear Cart
  </Button>
);

export default ClearCart;
