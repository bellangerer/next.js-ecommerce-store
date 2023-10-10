'use client';
import { addToCartAction } from './actions';

export function AddProductToCart(productId, quantity) {
  console.log('Check:', productId, quantity);
  return (
    <form>
      <button
        formAction={
          async () => await addToCartAction(productId, quantity) //  Write the function here
        }
      >
        Add to cart
      </button>
    </form>
  );
}
