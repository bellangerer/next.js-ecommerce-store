'use server';
import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateComment(travelBundleId, comment) {
  // 1. get the current cookie
  const travelCommentsCookie = getCookie('travelComments');
  // 2. parse the cookie value

  const travelComments = !travelCommentsCookie
    ? // Case A: cookie is undefined
      // we need to create a new cookie with an empty array
      []
    : parseJson(travelCommentsCookie);

  // 3. we edit the cookie value
  // We get the the object for the fruit on cookies or undefined
  const travelToUpdate = travelComments.find((travelComment) => {
    return travelComment.id === travelBundleId;
  });
  // Case B: cookie is defined and fruit id already exists!
  // if we are in fruit id = 1
  if (travelToUpdate) {
    travelToUpdate.comment = comment;
  } else {
    // Case C: cookie is defined and fruit id doesn't exist!
    travelComments.push({
      id: travelBundleId,
      comment: comment,
    });
  }

  // 4. we override the cookie
  await cookies().set('travelComments', JSON.stringify(travelComments));
}

export async function addToCartAction(productId, quantity) {
  await cookies().set('cartItems', JSON.stringify(productId, quantity));
}
