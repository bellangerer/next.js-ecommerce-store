import { Sql } from 'postgres';

export type TravelBundle = {
  id: number;
  travelDestination: string;
  info: string;
  price: number | null;
};

export async function up(sql: Sql) {
  await sql`
CREATE TABLE travel_bundle (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
travel_destination varchar(30) NOT NULL,
info varchar(80) NOT NULL,
price integer NOT NULL

);
`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE travel_bundle
  `;
}
