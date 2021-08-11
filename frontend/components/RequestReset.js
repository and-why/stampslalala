import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import DisplayError from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
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

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
  });
  const [reset, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await reset().catch(console.log(error));
    resetForm();
  }
  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Request password reset</h2>
        <p>
          If you have forgotten your password, please reset by filling in this
          form.
        </p>
        <DisplayError error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          {data?.sendUserPasswordResetLink === null && (
            <SuccessMessage>
              <p>
                <strong>Success!</strong> Password reset for{' '}
                {/* {data.createUser.email}, please check your email for a reset */}
                password link.
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

          <button type="submit">Request Reset</button>
        </fieldset>
      </Form>
    </>
  );
}
