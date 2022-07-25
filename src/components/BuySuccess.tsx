import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

type Props = {
  modal: boolean;
  toggle: () => void;
};

const BuySuccess = ({ modal, toggle }: Props) => {
  //  toggle modal throws error Warning about deprecated findDOMNode usage, but it works, its reactstrap's fault sadly.
  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      role='dialog'
      aria-labelledby='buy modal'
    >
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
  );
};

export default BuySuccess;
