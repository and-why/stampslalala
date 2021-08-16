import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import NextImage from 'next/image';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: column;
  gap: 2em;
  margin: 20px auto;
  max-width: var(--maxWidth);
  justify-content: center;
  align-items: flex-start;
  img {
    width: 100%;
    max-height: 700px;
  }
  .details {
    width: 100%;
    text-align: left;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;
  const { Product } = data;
  return (
    <ProductStyles>
      <Head>
        <title>{Product.name} | Stamps lalala</title>
      </Head>
      <motion.figure
        layoutId="image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <NextImage
          alt={Product.photo.altText}
          src={Product.photo.image.publicUrlTransformed}
          height="500px"
          width="500px"
          objectFit="contain"
        />
      </motion.figure>
      <div className="details">
        <motion.h2
          layoutId="title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Product.name}
        </motion.h2>
        <motion.p
          layoutId="description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {Product.description}
        </motion.p>
      </div>
    </ProductStyles>
  );
}
