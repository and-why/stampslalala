import AllOrders from '../components/AllOrders';
import PleaseSignIn from '../components/PleaseSignIn';

export default function OrderPage() {
  return (
    <PleaseSignIn>
      <AllOrders />
    </PleaseSignIn>
  );
}
