import { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import '../css/buy.styles.css';

type Props = {};

const Buy = (props: Props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button
        className='buy-button'
        onClick={toggle}
        role={'buy button'}
        aria-label='buy button'
      >
        Buy
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...props} role='dialog'>
        <ModalHeader toggle={toggle}>Payment sucess</ModalHeader>
        <ModalBody>
          <p>
            Thank you for your purchase. You will receive an email with
            your order details.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            className='buy-button'
            onClick={toggle}
            role={'Close button'}
            aria-label='Close button'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Buy;
