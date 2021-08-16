import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

export const FormPageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: flex-start;
  align-items: stretch;
  margin: 20px auto;
  padding: 0 20px;
  max-width: var(--maxWidth);
`;

const Form = styled.form`
  background: rgba(0, 0, 0, 0.02);
  max-width: 600px;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1em;
    border: 0px solid black;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  a {
    margin-left: 1em;
    font-size: 0.9em;
    font-weight: 400;
  }
  button,
  input[type='submit'] {
    width: auto;
    background: var(--red);
    color: white;
    cursor: 'pointer';
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  button:disabled,
  button[disabled] {
    background: var(--gray);
    opacity: 0.5;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        var(--red) 0%,
        var(--lightpink) 50%,
        var(--red) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
