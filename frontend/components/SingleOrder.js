import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';
import OrderItem from './OrderItem';

const GET_ORDER_QUERY = gql`
  query GET_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      total
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            id
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

const Flex = styled.div`
  display: flexbox;
  justify-content: space-between;
  align: center;
`;
const OrderWrapper = styled.div`
  display: grid;
  max-width: 620px;
  grid-gap: 20px;
  justify-content: stretch;
  align-items: flex-start;
  align-items: stretch;
  margin: 0 auto;
  padding: 20px;
`;
const OrderDetailsBox = styled.div`
  background: white;
  padding: 2em;
  h2 {
    font-size: 1.6em;
    margin: 0 0 0.25em 0;
  }
  h3 {
    font-size: 1.1em;
    padding-bottom: 20px;
  }
  h4 {
    text-transform: uppercase;
  }
  .borderBottom {
    border-bottom: 1px solid var(--lightgray);
  }
  p {
    font-size: 0.9em;
    margin: 0 0 1em 0;
    span {
      text-transform: uppercase;
      font-weight: bold;
    }
    &:last-child {
      margin: 0;
    }
  }
`;
const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  margin: 20px 0;
`;

export default function SingleOrder({ orderId }) {
  const { data, error, loading } = useQuery(GET_ORDER_QUERY, {
    variables: { id: orderId },
  });
  const order = data?.Order;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <OrderWrapper>
      <DisplayError error={error} />
      <OrderDetailsBox>
        <h2>Order details</h2>
        <p>Tanks you for your order! Check out the details below.</p>
      </OrderDetailsBox>
      <OrderDetailsBox>
        <p>
          <span>Order No.:</span> {order.id}
        </p>
        <p>
          <span>Total: </span>
          {formatMoney(order.total)}
        </p>
      </OrderDetailsBox>
      <OrderDetailsBox>
        <Flex className="borderBottom">
          <h3>Items You orders</h3>
          <p>
            {order.items.length} Item{order.items.length > 1 && 's'}
          </p>
        </Flex>
        <ItemsGrid>
          {order.items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}
        </ItemsGrid>
      </OrderDetailsBox>
      <OrderDetailsBox>
        <h3 className="borderBottom">Order total</h3>
        <Flex>
          <h4>Sub-total (exc. GST)</h4>
          <h4>{formatMoney(order.total / 1.1)}</h4>
        </Flex>
        <Flex>
          <h4>Total (inc. GST)</h4>
          <h4>{formatMoney(order.total)}</h4>
        </Flex>
      </OrderDetailsBox>
    </OrderWrapper>
  );
}
