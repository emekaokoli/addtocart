import { useState } from 'react';
import '../styles/buy.styles.css';
import BuySuccess from './BuySuccess';
import Button from './common/button/Button';

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
        children={'Buy'}
      />
      <BuySuccess modal={modal} toggle={toggle} />
    </div>
  );
};

export default Buy;
