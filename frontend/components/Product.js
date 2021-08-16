/* eslint-disable react/prop-types */
import NextImage from 'next/image';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useUser } from './User';

export default function Product({ product }) {
  const user = useUser();
  console.log(user);
  return (
    <ItemStyles>
      <motion.figure
        layoutId="image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <NextImage
          src={
            product?.photo?.image?.publicUrlTransformed ||
            '/static/product-placeholder.png'
          }
          height="400px"
          width="400px"
          placeholder="blur"
          blurdataurl="/static/product-placeholder.png"
          objectFit="contain"
          alt={product.name}
        />
      </motion.figure>
      <motion.h2
        layoutId="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <NextLink href={`/product/${product.id}`}>{product.name}</NextLink>
      </motion.h2>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <motion.p
        layoutId="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {product.description}
      </motion.p>
      <div className="buttonList">
        <>
          {user && (
            <NextLink
              href={{
                pathname: '/update',
                query: {
                  id: product.id,
                },
              }}
            >
              Edit
            </NextLink>
          )}
          <AddToCart id={product.id} />
          {user && <DeleteProduct id={product.id}>Delete</DeleteProduct>}
        </>
      </div>
    </ItemStyles>
  );
}
