 CREATE TABLE travel_bundle (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
travel_destination varchar(30) NOT NULL,
info varchar(80) NOT NULL,
price integer NOT NULL
 );

 INSERT INTO travel_bundle
(travel_destination, info, price)
VALUES
('Japan','Experience Japan', 500),
('Bali','Experience Bali', 300),
('Siargao','Experience Siargao', 300),
('New York','Experience New York', 400);

SELECT * FROM travel_bundle;
