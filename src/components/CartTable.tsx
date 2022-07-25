import { Col, Container, Row } from 'reactstrap';
import Table from '../helpers/Table';
import { iCart } from '../interfaces/cart';

type Props = {
  cartItems: iCart[];
  removeFromCart: (cart: iCart) => void;
};

const CartTable = ({ cartItems, removeFromCart }: Props) => {
  return (
    <Container>
      <Row>
        <Col md={12} sm={12}>
          <h3 className='cart-text-right'>Your cart</h3>
          <Table
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartTable;
