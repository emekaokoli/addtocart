import React from 'react';
import { CloseButton, Col, Container, Row, Table } from 'reactstrap';
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
          <Table borderless responsive>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            {cartItems.map(
              ({ productName, unitPrice, totalCost, amount }) => (
                <React.Fragment key={new Date() + productName}>
                  <tbody>
                    <tr>
                      <td>{productName}</td>
                      <td>{unitPrice}</td>
                      <td>{amount}</td>
                      <td>{totalCost}</td>
                      <td>
                        <CloseButton
                          aria-label='close button'
                          onClick={() =>
                            removeFromCart({
                              productName,
                              unitPrice,
                              totalCost,
                              amount,
                            })
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </React.Fragment>
              )
            )}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CartTable;
