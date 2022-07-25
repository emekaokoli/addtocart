import { Table } from 'reactstrap';
import { iCart } from '../interfaces/cart';
import TableItems from './TableItems';

type Props = {
  cartItems: iCart[];
  removeFromCart: (cart: iCart) => void;
};

const TableComponent = ({ cartItems, removeFromCart }: Props) => {
  return (
    <Table borderless responsive>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <TableItems
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </Table>
  );
};

export default TableComponent;
