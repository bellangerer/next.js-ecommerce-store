// eslint-disable-next-line import/no-unresolved
import 'server-only';

const travelBundles = [
  { id: 1, travelDestination: 'Japan', info: 'Experience Japan' },
  { id: 2, travelDestination: 'Bali', info: 'Experience Bali' },
  { id: 3, travelDestination: 'Siargao', info: 'Experience Siargao' },
  { id: 4, travelDestination: 'New york', info: 'Experience New York' },
];

export function getTravelBundles() {
  return travelBundles;
}

export function getTravelBundle(id) {
  return travelBundles.find((travelBundle) => travelBundle.id === id);
}
