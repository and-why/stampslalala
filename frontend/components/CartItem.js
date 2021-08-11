import styled from 'styled-components';
import NextImage from 'next/image';
import formatMoney from '../lib/formatMoney';
import DeleteCartItem from './DeleteCartItem';

const CartItemStyles = styled.li`
  padding: 1em 0;
  border-bottom: 1px solid var(--lightgrey);
  display: grid;
  align-items: flex-start;
  grid-template-columns: auto 1fr auto;
  .cartContent {
    margin-left: 1rem;
  }
  .money {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 2fr;
    row-gap: 10px;
    margin-bottom: 0.5em;
  }
  h3 {
    margin: 0;
    margin-bottom: 0.25em;
    font-size: 1.6em;
  }
  p {
    margin: 0;
  }
`;

export default function CartItem({ cartItem }) {
  if (!cartItem) {
    return null;
  }
  return (
    <CartItemStyles>
      <NextImage
        src={cartItem.product.photo.image.publicUrlTransformed}
        alt={cartItem.product.name}
        width="100px"
        height="100px"
        objectFit="cover"
      />
      <div className="cartContent">
        <h3>{cartItem.product.name}</h3>
        <div className="money">
          <p>{formatMoney(cartItem.product.price)} each</p>
          <p>Qty. {cartItem.quantity}</p>
          <p>
            <strong>
              TOTAL: {formatMoney(cartItem.product.price * cartItem.quantity)}
            </strong>
          </p>
        </div>
      </div>
      <DeleteCartItem id={cartItem.id} />
    </CartItemStyles>
  );
}
