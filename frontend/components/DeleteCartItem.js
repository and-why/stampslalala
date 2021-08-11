import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { CURRENT_USER_QUERY } from './User';

const DELETE_CART_ITEM_MUTATION = gql`
  mutation DELETE_CART_ITEM_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

const DeleteButtonStyle = styled.a`
  border: none;
  padding: 0.5em;
  span {
    cursor: pointer;
    margin: 0 5px;
    padding: 0 12px;
    background-position: 50%;
    background-size: 19px;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 5h16v2H0V5zm14 3.07v9.27c0 1.47-1.15 2.66-2.574 2.66H4.574C3.153 20 2 18.797 2 17.34V8.07h12zM4 17.15c0 .462.363.85.803.85h6.394c.446 0 .803-.381.803-.85V8.1H4v9.05zM6 9h1v8H6V9zm3 0h1v8H9V9zM7 0h2c1.656 0 3 1.339 3 3v1.038H4V3c0-1.656 1.339-3 3-3zm3 3.999V3c0-.554-.446-1-1-1H7c-.554 0-1 .446-1 1v.999h4z' fill='%23666' fill-rule='evenodd'/%3E%3C/svg%3E");
    &:hover {
      background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg' height='24' width='24'%3E%3Cpath d='M0 5h16v2H0V5zm14 3.07v9.27c0 1.47-1.15 2.66-2.574 2.66H4.574C3.153 20 2 18.797 2 17.34V8.07h12zM4 17.15c0 .462.363.85.803.85h6.394c.446 0 .803-.381.803-.85V8.1H4v9.05zM6 9h1v8H6V9zm3 0h1v8H9V9zM7 0h2c1.656 0 3 1.339 3 3v1.038H4V3c0-1.656 1.339-3 3-3zm3 3.999V3c0-.554-.446-1-1-1H7c-.554 0-1 .446-1 1v.999h4z' fill='%23d01345' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function DeleteCartItem({ id }) {
  const [removeItem, { loading }] = useMutation(DELETE_CART_ITEM_MUTATION, {
    variables: { id },
    update,
    // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },
  });
  return (
    <DeleteButtonStyle onClick={removeItem} disabled={loading}>
      <span />
    </DeleteButtonStyle>
  );
}
