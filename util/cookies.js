import { cookies } from 'next/headers';

export function getCookie(name) {
  return cookies().get(name)?.value;
}

export function setCookie(productId, quantity) {
  cookies().set(
    'cartItems',
    JSON.stringify({ productId: productId, quantity: quantity }),
  );
}
