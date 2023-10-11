import { Sql } from 'postgres';

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

export async function up(sql: Sql) {
  for (const travel_bundle of travel_bundles)
    await sql`
  INSERT INTO travel_bundle
  (travelDestination, info, price)
  VALUES
  (${travel_bundle.travelDestination}, ${travel_bundle.info}, ${travel_bundle.price},)
  `;
}

export async function down(sql: Sql) {
  for (const travel_bundle of travel_bundles)
    await sql`
    DELETE FROM travelBundles WHERE id = ${travel_bundle.id}

  `;
}
