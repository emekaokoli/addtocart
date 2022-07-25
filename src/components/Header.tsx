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
      <Col sm={12} md={12}>
        <header className='App-header'>
          <nav>
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
          </nav>
        </header>
      </Col>
    </Row>
  );
};

export default Header;
