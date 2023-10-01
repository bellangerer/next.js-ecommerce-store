import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTravelBundle } from '../../../database/travel-bundles';

export async function generateMetadata({ params }) {
  const singleTravelBundle = await getTravelBundle(
    Number(params.travelBundlesId),
  );

  return {
    title: singleTravelBundle ? singleTravelBundle.travelDestination : '',
  };
}

export default async function TravelBundlePage(props) {
  const singleTravelBundle = await getTravelBundle(
    Number(props.params.travelBundlesId),
  );

  if (!singleTravelBundle) {
    return notFound();
  }

  return (
    <div>
      This is a single animal page
      <h1>{singleTravelBundle.travelDestination}</h1>
      <Image
        src={`/images/${singleTravelBundle.travelDestination}.png`}
        width={200}
        height={200}
        alt={singleTravelBundle.travelDestination}
      />
      this is a {singleTravelBundle.type} carrying{' '}
      {singleTravelBundle.accessory}
    </div>
  );
}
