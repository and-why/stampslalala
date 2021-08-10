import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import { CURRENT_USER_QUERY } from './User';
import DisplayError from './ErrorMessage';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { name: $name, password: $password, email: $email }) {
      id
      name
      email
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

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    await signup().catch(console.log(error));
    resetForm();
  }
  return (
    <>
      <Form method="POST" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p>
          If you don't yet have an account, please sign up by filling in this
          form.
        </p>
        <DisplayError error={error} />
        <fieldset disabled={loading} aria-busy={loading}>
          {data?.createUser && (
            <SuccessMessage>
              <p>
                <strong>Success!</strong> Signed Up with {data.createUser.email}
                , please go ahead and sign in with the other form.
              </p>
            </SuccessMessage>
          )}
          <label htmlFor="name">
            name
            <input
              type="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
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
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="*********"
              autoComplete="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Sign up</button>
        </fieldset>
      </Form>
    </>
  );
}
