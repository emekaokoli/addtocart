import { useState } from 'react';
import { Button } from 'reactstrap';
import '../css/buy.styles.css';
import BuySuccess from './BuySuccess';

const Buy = () => {
  const [modal, setModal] = useState<boolean>(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='buy-container'>
      <Button
        className='buy-button'
        onClick={toggle}
        role={'buy button'}
        aria-label='buy button'
      >
        Buy
      </Button>
      <BuySuccess modal={modal} toggle={toggle} />
    </div>
  );
};

export default Buy;
