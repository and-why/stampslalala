import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { FormPageStyle } from '../components/styles/Form';
import Title from '../components/styles/Title';
import { useUser } from '../components/User';

export default function SignInPage() {
  const user = useUser();
  const router = useRouter();
  if (user) {
    router.push('/');
  }
  return (
    <>
      {!user && (
        <FormPageStyle>
          <SignIn />
          <SignUp />
        </FormPageStyle>
      )}
    </>
  );
}
