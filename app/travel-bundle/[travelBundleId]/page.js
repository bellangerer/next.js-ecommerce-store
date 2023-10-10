import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTravelBundleById } from '../../../database/travel-bundles';
import { AddProductToCart } from './AddToCart';

export async function generateMetadata({ params }) {
  const singleTravelBundle = await getTravelBundleById(
    Number(params.travelBundleId),
  );

  return {
    title: singleTravelBundle ? singleTravelBundle.travelDestination : '',
  };
}

export default async function TravelBundlePage(props) {
  const singleTravelBundle = await getTravelBundleById(
    Number(props.params.travelBundleId),
  );

  console.log(
    'singleTravelBundle.travelDestination',
    singleTravelBundle.travelDestination,
  );
  console.log(singleTravelBundle);
  if (!singleTravelBundle) {
    return notFound();
  }

  return (
    <div>
      This is the single product page
      <h1>{singleTravelBundle.travelDestination}</h1>
      <div>
        <Image
          src={`/images/${singleTravelBundle.travelDestination}.jpeg`}
          width={400}
          height={300}
          alt={singleTravelBundle.travelDestination}
        />
        {singleTravelBundle.info} {singleTravelBundle.accessory} on a different
        perspective
      </div>
      <AddProductToCart productId={props.params.travelBundleId} quantity={3} />
    </div>
  );
}
// add to cart!!
