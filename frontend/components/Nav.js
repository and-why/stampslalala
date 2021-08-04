import NextLink from 'next/link';

export default function Nav() {
  return (
    <nav>
      <NextLink href="/products">products</NextLink>
      <NextLink href="/sell">sell</NextLink>
      <NextLink href="/orders">orders</NextLink>
      <NextLink href="/account">account</NextLink>
    </nav>
  );
}
