/* eslint-disable import/no-cycle */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { perPage } from '../config';
import Product from './Product';

export const All_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: flex-start;
  align-items: stretch;
  margin: 0 auto;
  padding: 0 20px;
  max-width: var(--maxWidth);
  /* border-bottom: 2px solid var(--red);
  border-bottom: 2px solid var(--red); */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function Products({ page }) {
  const { data, error, loading } = useQuery(All_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  // console.log('Products: ', data, error, loading);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ProductListStyles>
      {data.allProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ProductListStyles>
  );
}
