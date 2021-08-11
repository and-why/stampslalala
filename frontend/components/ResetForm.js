import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import DisplayError from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      token: $token
      password: $password
    ) {
      message
      code
    }
  }
`;

const SuccessMessage = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid green;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
    font-weight: 700;
  }
`;

export default function ResetForm({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
    token,
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  const successError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  async function handleSubmit(e) {
    e.preventDefault();
    await reset().catch(console.log(error));
    resetForm();
  }
  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <p>Please enter a new password</p>
        <DisplayError error={error || successError} />
        <fieldset disabled={loading} aria-busy={loading}>
          {data?.redeemUserPasswordResetToken === null && (
            <SuccessMessage>
              <p>
                <strong>Success!</strong> You can now sign in with your new
                password.
              </p>
            </SuccessMessage>
          )}
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Password
            <input
              type="password"
              name="password"
              placeholder="********"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            disabled={
              inputs.password?.length < 8 ||
              inputs.confirmPassword !== inputs.password
            }
          >
            Reset Password
          </button>
        </fieldset>
      </Form>
    </>
  );
}
