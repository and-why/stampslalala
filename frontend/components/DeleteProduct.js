/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  console.log('running update function after delete');
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id, children }) {
  const [deleteProduct, { data, loading, error }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: { id },
      update,
      // refetchQueries: [{ query: All_PRODUCTS_QUERY }], -- one way of doing it.
    }
  );
  if (loading) return <p>Loading...</p>;
  return (
    <button
      type="button"
      disabled={loading}
      onClick={async () => {
        if (confirm('are you sure you want to delete this item')) {
          await deleteProduct().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
