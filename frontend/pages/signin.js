import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Title from '../components/styles/Title';

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

export default function SignInPage() {
  return (
    <FormPageStyle>
      <SignIn />
      <SignUp />
      <RequestReset />
    </FormPageStyle>
  );
}
