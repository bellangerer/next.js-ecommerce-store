import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { TravelBundle } from '../migrations/00000-createTableTravelBundle';

/* const travelBundles1 = [
  {
    id: 1,
    travelDestination: 'Japan',
    info: 'Experience Japan',
    price: 500,
  },

  { id: 2, travelDestination: 'Bali', info: 'Experience Bali', price: 300 },

  {
    id: 3,
    travelDestination: 'Siargao',
    info: 'Experience Siargao',
    price: 300,
  },

  {
    id: 4,
    travelDestination: 'New york',
    info: 'Experience New York',
    price: 400,
  },
]; */

export const getTravelBundles = cache(async () => {
  // return travelBundles;
  const travelBundles = await sql<TravelBundle[]>`
  SELECT * FROM travel_bundle
  `;
  return travelBundles;
});

export const getTravelBundleById = cache(async (id: number) => {
  // return travelBundles;
  const [travelBundle] = await sql<TravelBundle[]>`
  SELECT
  *
  FROM
     travel_bundle
  WHERE
     id = ${id}
  `;
  return travelBundle;
});

/* export function getTravelBundle(id: number) {
  return travelBundles1.find((travelBundle) => travelBundle.id === id);
} */
