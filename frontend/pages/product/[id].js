import SingleProduct from '../../components/SingleProduct';

export default function ProductPage({ query }) {
  return <SingleProduct id={query.id} />;
}
