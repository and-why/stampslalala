/* eslint-disable react/prop-types */
import NextImage from 'next/image';
import NextLink from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';

export default function Product({ product }) {
  console.log(product);
  return (
    <ItemStyles>
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
      <Title>
        <NextLink href={`/product/${product.id}`}>{product.name}</NextLink>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      <div className="buttonList">
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
        <DeleteProduct id={product.id}>Delete</DeleteProduct>
      </div>
    </ItemStyles>
  );
}
