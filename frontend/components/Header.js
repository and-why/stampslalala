import NextLink from 'next/link';
import styled from 'styled-components';
import { useCart } from '../lib/cartState';
import Cart from './Cart';
import CartCount from './CartCount';
import { FacebookIcon, TwitterIcon } from './icons/socialIcons';
import Nav from './Nav';
import Search from './Search';
import { useUser } from './User';

const Logo = styled.h1`
  font-family: 'LiuJianMaoCao', cursive;
  font-size: 4em;
  padding: 0.25em;
  margin: 0 0 0.25em 0;
  /* border: 2px dotted var(--red); */
  min-width: 230px;
  line-height: 0.55em;
  a {
    color: var(--red, #834122);
    text-decoration: none;
  }
  span {
    /* font-family: 'Lato'; */
    font-size: 0.75em;
  }
`;

const HeaderStyles = styled.header`
  background: var(--offwhite);
  .bar {
    /* border-bottom: 10px solid var(--red, #834122); */
    display: grid;
    grid-template-columns: 3fr 2fr 3fr;
    justify-content: space-between;
    align-items: center;
    padding: 1em 2em;
    width: 100%;
    text-align: center;
    a {
      color: var(--black, black);
      &:hover,
      &:focus {
        text-decoration: none;
      }
    }
    .social {
      justify-self: flex-start;
      svg {
        width: 30px;
        height: 30px;
      }
    }
    .headerRight {
      justify-self: flex-end;
      display: flex;
      align-items: center;
      input {
        text-align: right;
        border: none;
        padding: 0.5em;
        background: var(--white);
        font-size: 1.2em;
        &:focus-visible {
          outline: none;
        }
      }
    }
  }
`;

export default function Header() {
  const { openCart, toggleCart } = useCart();
  const user = useUser();
  return (
    <HeaderStyles>
      <div className="bar">
        <div className="social">
          <NextLink href="https://www.facebook.com">
            <a>
              <FacebookIcon />
            </a>
          </NextLink>
          <NextLink href="https://www.twitter.com">
            <a>
              {' '}
              <TwitterIcon />
            </a>
          </NextLink>
        </div>
        <Logo>
          <NextLink href="/">
            <a>
              WoodYou
              <br />
              <span>Designs</span>
            </a>
          </NextLink>
        </Logo>
        <div className="headerRight">
          <Search />
          <a onClick={openCart}>
            <CartCount
              count={user?.cart?.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </a>
        </div>
      </div>
      <Nav />
      <Cart />
    </HeaderStyles>
  );
}
