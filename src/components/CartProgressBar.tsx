type Props = {
  cartItems: number;
};

const CartProgressBar = ({ cartItems }: Props) => {
  const progress = cartItems / 10;

  return (
    <div className='progress'>
      <div
        className='progress-bar'
        style={{
          width: `${progress * 100}%`,
          backgroundColor: '#006496',
        }}
        aria-label='cart progress bar'
        aria-labelledby='loading progress bar'
      >
        {progress * 100}%
      </div>
    </div>
  );
};

export default CartProgressBar;
