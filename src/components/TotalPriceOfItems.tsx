type Props = {
  tax: number;
  subtotal: number;
  total: number;
  limit: number;
};

const TotalPriceOfItemsInCart = ({
  tax,
  subtotal,
  total,
  limit,
}: Props) => {
  return (
    <div className='cart-total-container'>
      <div className='cart-total-item'>
        <p>
          <strong>Cart items Limit: {limit}</strong>
        </p>
        <strong>Subtotal: </strong> <span>{subtotal.toFixed(2)}</span>
      </div>
      <div className='cart-total-item'>
        <strong className='font-weight-bold'>Tax: </strong>{' '}
        <span>{tax.toFixed(2)}</span>
      </div>
      <div className='cart-total-item'>
        <strong>Total: </strong> <span>{total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalPriceOfItemsInCart;
