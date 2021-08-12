import Supreme from './styles/Supreme';
import CartStyles from './styles/CartStyles';
import CloseButton from './styles/CloseButton';
import { useUser } from './User';
import CartItem from './CartItem';
import formatMoney from '../lib/formatMoney';
import { useCart } from '../lib/cartState';
import calcToPrice from '../lib/calcTotalPrice';
import { Checkout } from './Checkout';

export default function Cart() {
  const user = useUser();
  const { closeCart, cartOpen } = useCart();
  if (!user) return null;

  return (
    <CartStyles open={cartOpen}>
      <header>
        <Supreme>{user.name}'s cart</Supreme>
        <CloseButton onClick={closeCart}>
          <span />
        </CloseButton>
      </header>
      <ul>
        {user.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        {formatMoney(calcToPrice(user.cart))}

        <Checkout />
      </footer>
    </CartStyles>
  );
}
