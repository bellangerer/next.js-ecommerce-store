'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export async function removeSingleItemFromCookies(itemId) {
  const travelQuantityCookie = getCookie('cart');

  const addedQuantities = !travelQuantityCookie
    ? []
    : parseJson(travelQuantityCookie);

  const itemQuantityToUpdate = addedQuantities.find((addedQuantity) => {
    return addedQuantity.id === itemId;
  });

  if (itemQuantityToUpdate !== -1) {
    addedQuantities.splice(itemQuantityToUpdate, 1);
  }
  await cookies().set('cart', JSON.stringify(addedQuantities));
}
