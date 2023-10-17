'use client';

import { useState } from 'react';
import { removeSingleItemFromCookies } from './actions';

export default function EditCartForm(props) {
  const [quantity, setQuantity] = useState('');

  return (
    <form>
      <input
        data-test-id="product-quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(event) => setQuantity(event.currentTarget.value)}
      />
      <br />
      <br />
      <button
        data-test-id="cart-product-remove-<product id>"
        formAction={async () => await removeSingleItemFromCookies(props.itemId)}
      >
        Remove
      </button>
    </form>
  );
}
