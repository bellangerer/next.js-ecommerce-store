import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTravelBundle } from '../../../database/travel-bundles';
import AddToCartButton from '../../AddToCartButton';

export async function generateMetadata({ params }) {
  const singleTravelBundle = await getTravelBundle(
    Number(params.travelBundleId),
  );

  return {
    title: singleTravelBundle ? singleTravelBundle.travelDestination : '',
  };
}

export default async function TravelBundlePage(props) {
  const singleTravelBundle = await getTravelBundle(
    Number(props.params.travelBundleId), // props.params hold information about my products
  );

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
          width={200}
          height={200}
          alt={singleTravelBundle.travelDestination}
        />
        {singleTravelBundle.info} {singleTravelBundle.accessory} on a different
        perspective
        <AddToCartButton />
      </div>
    </div>
  );
}
// add to cart!!
