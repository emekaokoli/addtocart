import { Fragment } from 'react';
import { CloseButton } from 'reactstrap';
import { iCart } from '../interfaces/cart';

type Props = {
  cartItems: iCart[];
  removeFromCart: (cart: iCart) => void;
};

const TableItems = ({ cartItems, removeFromCart }: Props) => {
  return (
    <>
      {cartItems.map(
        ({ productName, unitPrice, totalCost, amount }) => (
          <Fragment key={new Date() + productName}>
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
          </Fragment>
        )
      )}
    </>
  );
};

export default TableItems;
