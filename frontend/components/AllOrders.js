/* eslint-disable react/prop-types */
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NextImage from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import DisplayError from './ErrorMessage';

const OrderGrid = styled.div`
  display: grid;
  max-width: 620px;
  grid-gap: 20px;
  justify-content: stretch;
  align-items: flex-start;
  align-items: stretch;
  margin: 20px auto;
  h2 {
    padding: 1em;
    margin: 0;
    background: white;
  }
`;
const OrderGridRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto(1fr);
  padding: 2em;
  background: white;
  h3 {
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  }
  p {
    color: var(--gray);
    font-size: 0.9em;
    margin: 0;
    span {
      text-transform: uppercase;
      font-weight: bold;
    }
  }
`;
const ImageWrap = styled.div`
  .orderImages {
    margin: 1em 0;
    padding: 1em;
    display: flex;
    border-bottom: 1px solid var(--lightgray);
  }
  .orderImage {
    max-height: 100px;
    margin-right: 1em;
    background: var(--gray);
  }
  .orderImage img {
    opacity: 0.9;
  }
`;
const OrderFooter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
`;
const OrderButton = styled.a`
  padding: 0.5em 1em;
  border: 2px solid var(--lightgray);
  background: white;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  color: var(--black);
  text-align: center;
  &:hover {
    background: var(--lightgray);
    text-decoration: none;
  }
`;

const GET_ORDER_DATA_QUERY = gql`
  query {
    allOrders {
      id
      total
      items {
        id
        name
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

export default function AllOrders() {
  const { data, loading, error } = useQuery(GET_ORDER_DATA_QUERY);
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <OrderGrid>
      <h2>My Orders</h2>
      <DisplayError error={error} />
      {data?.allOrders?.map((order) => (
        <OrderGridRow key={order.id}>
          <h3>
            Item{order.items.length > 1 && 's'}:{' '}
            {order.items.map(
              (item, index) =>
                `${item.name}${index + 1 < order.items.length ? ', ' : ''}`
            )}
          </h3>
          <ImageWrap>
            <div className="orderImages">
              {order.items.map((item) => (
                <div className="orderImage">
                  <NextImage
                    src={item.photo.image.publicUrlTransformed}
                    height="100px"
                    width="75px"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </ImageWrap>
          <OrderFooter>
            <p>
              <span>Order No.:</span> {order.id}
              <br />
              <span>Total: </span>
              {formatMoney(order.total)}
            </p>
            <Link href={`/orders/${order.id}`}>
              <OrderButton>View Order</OrderButton>
            </Link>
          </OrderFooter>
        </OrderGridRow>
      ))}
    </OrderGrid>
  );
}
