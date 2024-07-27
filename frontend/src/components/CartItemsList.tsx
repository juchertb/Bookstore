import { useAppSelector } from '@/app/hooks';
import { Card } from './ui/card';
import {
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
} from './CartItemColumns';
import { selectCartItems } from '@/features/cart/cartSlice';

function CartItemsList() {
  const cartItems = useAppSelector(selectCartItems);

  return (
    <div>
      {cartItems.map((cartItem) => {
        const { cartID, title, price, image, amount, company, productColor } =
          cartItem;
        return (
          <Card
            key={cartID}
            className='flex flex-col gap-y-4 sm:flex-row flex-wrap p-6 mb-8'
          >
            <FirstColumn image={image} title={title} />
            <SecondColumn
              title={title}
              company={company}
              productColor={productColor}
            />
            <ThirdColumn amount={amount} cartID={cartID} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
