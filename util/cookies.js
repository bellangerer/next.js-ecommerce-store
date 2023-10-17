import { cookies } from 'next/headers';

export function getCookie(name) {
  const cart = cookies().get(name)?.value;
  return cart ? cart : [];
}

export function setCookie(productId, quantity) {
  cookies().set(
    'cartItems',
    JSON.stringify({ productId: productId, quantity: quantity }),
  );
}
