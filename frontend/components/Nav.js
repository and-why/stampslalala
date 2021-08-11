import NextLink from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  const { toggleCart } = useCart();
  return (
    <NavStyles>
      <NextLink href="/products">products</NextLink>
      {user && (
        <>
          <NextLink href="/sell">sell</NextLink>
          <NextLink href="/orders">orders</NextLink>
          <NextLink href="/account">account</NextLink>
        </>
      )}
      {!user ? <NextLink href="/signin">Sign In</NextLink> : <SignOut />}
    </NavStyles>
  );
}
