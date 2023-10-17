import React from 'react';
import { getTravelBundles } from '../../database/travel-bundles';
import { getCookie } from '../../util/cookies';
import EditCartForm from './EditCartForm';

export default function CartPage() {
  return <div>Cart page</div>;
}

export async function getAllItemsWithQuantities() {
  const cookieDataString = await getCookie('cart');
  console.log('cookieDataString:', cookieDataString);
  console.log('Type of cookieDataString:', typeof cookieDataString);
}
