type Props = {
  cartItems: number;
};

const CartProgressBar = ({ cartItems }: Props) => {
  const progress = cartItems / 10;

  return (
    <div className='progress'>
      <div
        className='progress-bar'
        // role='progressbar'
        style={{
          width: `${progress * 100}%`,
          backgroundColor: '#006496',
        }}
        // aria-valuenow={progress}
        // aria-valuemin='0'
        // aria-valuemax='100'
      >
        {progress * 100}%
      </div>
    </div>
  );
};

export default CartProgressBar;
