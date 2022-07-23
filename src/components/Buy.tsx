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
      <Modal isOpen={modal} toggle={toggle} {...props}>
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
            role={'Cancel button'}
            aria-label='Cancel button'
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Buy;
