import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import nProgress from 'nprogress';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import BigButton from './styles/BigButton';
import DisplayError from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import { useCart } from '../lib/cartState';

const CheckoutFormStyles = styled.form`
  border: 1px dotted var(--red);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  margin: 1rem 0;
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;

export function CheckoutForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { closeCart } = useCart();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [checkout, { error: graphQLError }] = useMutation(
    CREATE_ORDER_MUTATION,
    {
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    // 1. stop for from submitting
    e.preventDefault();
    setLoading(true);
    // 2. start page trnasition
    nProgress.start();
    // 3. Create the payment method via stripe (send token if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    console.log(paymentMethod);

    // 4. Handle any errors from stripe
    console.log(error);
    if (error) {
      setError(error);
      setLoading(false);
      nProgress.done();
      return;
    }
    // 5. Send the token that comes from step 3 to keystone serve with custom mutation
    const order = await checkout({
      variables: {
        token: paymentMethod.id,
      },
    });

    // 6. Change the page to view the order
    router.push({
      pathname: '/orders/[id]',
      query: { id: order.data.checkout.id },
    });
    // 7. Close the cart
    closeCart();
    // 8. Turn the loader off
    setLoading(false);
    nProgress.done();
  }
  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      <DisplayError error={error || graphQLError} />
      <CardElement />
      <BigButton disabled={loading}>Check out with Stripe</BigButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}

export { Checkout };
