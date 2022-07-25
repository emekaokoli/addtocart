import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'reactstrap';
import { iCart } from '../interfaces/cart';

type Props = {
  cart: iCart[];
};

const Header = ({ cart }: Props) => {
  return (
    <Row>
      <Col md={12} sm={12}>
        <header className='App-header'>
          <h1>
            B<span className='logo'>24</span> Shopping Cart
          </h1>
          <p className='wrapper'>
            <FontAwesomeIcon
              icon={faCartShopping}
              className='cart-icon'
            />
            <span>{cart.length.toString()}</span>
          </p>
        </header>
      </Col>
    </Row>
  );
};

export default Header;
