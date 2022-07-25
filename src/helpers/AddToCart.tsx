import { Button } from 'reactstrap';
import { iCart } from '../interfaces/cart';

type Props = {
  selectedProduct: string;
  amount: number;
  price: number;
  cost: number;
  error: boolean;
  onAddToCart: (product: iCart) => void;
  setSelectedProduct: (product: string) => void;
  setAmount: (amount: number) => void;
  setPrice: (price: number) => void;
  setCost: (cost: number) => void;
  setMaxAmount: (maxAmount: number) => void;
};

const AddToCart = ({
  selectedProduct,
  amount,
  price,
  cost,
  error,
  onAddToCart,
  setSelectedProduct,
  setAmount,
  setPrice,
  setCost,
  setMaxAmount,
}: Props) => {
  return (
    <Button
      className='add-to-cart-button'
      size='sm'
      aria-label='add to cart'
      role={'button'}
      onClick={() => {
        if (!selectedProduct) {
          alert('Please select a product');
        }

        onAddToCart({
          productName: selectedProduct,
          unitPrice: Number(price.toFixed(2)),
          amount: amount,
          totalCost: cost,
        });
        setSelectedProduct('');
        setAmount(1);
        setCost(0);
        setMaxAmount(0);
        setPrice(0);
      }}
      disabled={!selectedProduct || error}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
