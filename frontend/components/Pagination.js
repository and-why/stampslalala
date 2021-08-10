/* eslint-disable react/prop-types */
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import NextLink from 'next/link';
import DisplayError from './ErrorMessage';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;
export default function Pagination({ page }) {
  const { loading, error, data } = useQuery(PAGINATION_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { count } = data._allProductsMeta;
  const pageCount = Math.ceil(count / perPage);

  return (
    <PaginationStyles>
      <Head>
        <title>Products Page {page} of total | Stamps lalala</title>
      </Head>
      <NextLink href={`/products/${parseInt(page) - 1}`}>
        <a aria-disabled={page <= 1}>Prev</a>
      </NextLink>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} items total</p>
      <NextLink href={`/products/${parseInt(page) + 1}`}>
        <a aria-disabled={page >= pageCount}>Next</a>
      </NextLink>
    </PaginationStyles>
  );
}
