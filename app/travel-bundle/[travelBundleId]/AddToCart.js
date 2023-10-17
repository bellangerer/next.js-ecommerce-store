'use client';
import style from '../[travelBundleId]/page.module.scss';
import { addToCartAction } from './actions';

export function AddProductToCart(productId, quantity) {
  console.log('Check:', productId, quantity);
  const handleAddToCart = async () => {
    await createOrUpdateComment(props.productIdId, quantity);

    // Redirect to the cart page with cart data as a query parameter
    router.push({
      pathname: '/cart',
      query: { productId: props.productId, quantity },
    });
  };
  return (
    <form>
      <button
        className={style.button}
        formAction={
          async () => await addToCartAction(productId, quantity) //  Write the function here
        }
      >
        Add to cart
      </button>
    </form>
  );
}
