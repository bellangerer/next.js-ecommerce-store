import { cookies } from 'next/headers';
import Link from 'next/link';
import { getTravelBundle } from '../../database/travel-bundles';
import { getCookie } from '../../util/cookies';

// import CartRemoveAllButton from './CartRemoveAllAction';
// import CartRemoveButton from './CartRemoveButton';

export default async function CartPage() {
  const cartItems = getCookie('cartItems');
  console.log(cartItems);
  const travelBundle = JSON.parse(cartItems);
  const singleTravelBundle = await getTravelBundle(
    Number(travelBundle.productId), // props.params hold information about my products
  );
  console.log('Single Bundle ', singleTravelBundle);
  return (
    <main>
      <h2>This is my cart page</h2>
    </main>
  );
}
