import RequestReset from '../components/RequestReset';
import ResetForm from '../components/ResetForm';
import { FormPageStyle } from './signin';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <FormPageStyle>
        <div>
          <p>Sorry, you must supply a token</p>
          <RequestReset />
        </div>
      </FormPageStyle>
    );
  }
  return (
    <FormPageStyle>
      <ResetForm token={query?.token} />
    </FormPageStyle>
  );
}
