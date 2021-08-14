/* eslint-disable react/prop-types */
import NextImage from 'next/image';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';

const OrderItemWrapper = styled.div`
  margin-bottom: 20px;
  & > * {
    opacity: 0.9;
  }
`;
const ItemDetails = styled.div`
  padding: 20px 0;
  p {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    padding: 5px 0 10px;
    margin: 5px 0;
    border-bottom: 1px solid var(--lightgray);
  }
`;

export default function OrderItem({ item }) {
  return (
    <OrderItemWrapper>
      <NextImage
        src={item.photo.image.publicUrlTransformed}
        height="200px"
        width="150px"
        objectFit="cover"
      />
      <ItemDetails>
        <strong>{formatMoney(item.price)}</strong>
        <p>{item.name}</p>
        <p>
          Quantity: <span>{item.quantity}</span>
        </p>
        <p>
          Total: <strong>{formatMoney(item.price * item.quantity)}</strong>
        </p>
      </ItemDetails>
    </OrderItemWrapper>
  );
}
