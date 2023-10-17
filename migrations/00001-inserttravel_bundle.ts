import { Sql } from 'postgres';

const travelBundles = [
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
];

export async function up(sql: Sql) {
  for (const travelBundle of travelBundles)
    await sql`
  INSERT INTO travel_bundle
  (travel_destination, info, price)
  VALUES
  (${travelBundle.travelDestination}, ${travelBundle.info}, ${travelBundle.price})
  `;
}

export async function down(sql: Sql) {
  for (const travelBundle of travelBundles)
    await sql`
    DELETE FROM travel_bundle WHERE id = ${travelBundle.id}

  `;
}
