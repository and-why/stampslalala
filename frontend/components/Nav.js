import NextLink from 'next/link';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  console.log(user);

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
